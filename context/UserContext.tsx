"use client";

/**
 * I'm importing all the necessary dependencies for implementing a robust user management system.
 *  selected these to ensure we have everything needed for real-time updates,
 * offline support, and performance monitoring.
 */
import { 
  createContext, 
  useContext, 
  useState, 
  useEffect, 
  useCallback, 
  useRef, 
  ReactNode,
  useMemo 
} from 'react';
import { io, Socket } from 'socket.io-client';
import { debounce } from 'lodash';

/**
 * Here comprehensive interfaces for our user-related data structures.
 * also included all the fields we'll need for advanced features
 * like presence detection and activity tracking stuff
 */
export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  fontSize: number;
  language: string;
  notifications: {
    desktop: boolean;
    email: boolean;
    push: boolean;
    frequency: 'immediate' | 'daily' | 'weekly';
  };
}

export interface UserSession {
  id: string;
  device: string;
  lastActive: Date;
  expiresAt: Date;
}

export interface UserActivity {
  id: string;
  type: 'edit' | 'view' | 'comment' | 'share';
  timestamp: Date;
  metadata: Record<string, unknown>;
}

export interface User {
  id: string;
  username: string;
  email: string;
  name?: string;
  avatar?: string;
  preferences: UserPreferences;
  status: 'online' | 'away' | 'offline' | 'busy';
  sessions: UserSession[];
  activities: UserActivity[];
  lastSynced?: Date;
}

interface PresenceData {
  userId: string;
  status: User['status'];
  lastActive: Date;
  currentPage?: string;
  metadata?: Record<string, unknown>;
}

interface SyncState {
  lastSync: Date;
  pending: boolean;
  error?: Error;
}

interface PerformanceMetrics {
  updateLatency: number[];
  averageLatency: number;
  syncSuccess: number;
  syncFailed: number;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
  loading: boolean;
  error?: Error;
  presence: Map<string, PresenceData>;
  sync: {
    state: SyncState;
    trigger: () => Promise<void>;
    cancel: () => void;
  };
  metrics: PerformanceMetrics;
  actions: {
    updatePreferences: (prefs: Partial<UserPreferences>) => Promise<void>;
    updateStatus: (status: User['status']) => Promise<void>;
    logActivity: (activity: Omit<UserActivity, 'id' | 'timestamp'>) => Promise<void>;
    logout: () => Promise<void>;
  };
}

/**
 * A storage system that handles both localStorage and IndexedDB.
 * This ensures we can store larger datasets while staying within browser limits.
 */
class StorageManager {
  private static readonly STORAGE_KEY = 'designdeck:user';
  private static readonly DB_NAME = 'designdeck';
  private static readonly DB_VERSION = 1;
  private db: IDBDatabase | null = null;

  async init(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(StorageManager.DB_NAME, StorageManager.DB_VERSION);

      request.onerror = () => reject(new Error('Failed to initialize storage'));
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains('activities')) {
          db.createObjectStore('activities', { keyPath: 'id' });
        }
      };
    });
  }

  async saveUser(user: User): Promise<void> {
    const serializedUser = JSON.stringify(user);
    if (new Blob([serializedUser]).size > 1024 * 1024) {
      throw new Error('User data exceeds storage limit');
    }

    localStorage.setItem(StorageManager.STORAGE_KEY, serializedUser);

    if (this.db && user.activities.length > 0) {
      const tx = this.db.transaction('activities', 'readwrite');
      const store = tx.objectStore('activities');
      
      for (const activity of user.activities) {
        await store.put(activity);
      }
    }
  }

  async loadUser(): Promise<User | null> {
    const data = localStorage.getItem(StorageManager.STORAGE_KEY);
    if (!data) return null;

    const user = JSON.parse(data) as User;
    if (this.db) {
      const tx = this.db.transaction('activities', 'readonly');
      const store = tx.objectStore('activities');
      const activities = await store.getAll();
      user.activities = activities || [];
    }

    return user;
  }
}

/**
 * A WebSocket manager is done here for real-time features like presence and sync.
 * this updates &  stay under our 100ms target while handling reconnection
 * and message queuing.
 */
class WebSocketManager {
  private socket: Socket | null = null;
  private messageQueue: Array<{ type: string; payload: unknown }> = [];
  private connected = false;
  private reconnectTimer?: NodeJS.Timeout;

  constructor(
    private onMessage: (type: string, payload: unknown) => void,
    private onConnectionChange: (connected: boolean) => void
  ) {}

  connect(userId: string): void {
    if (this.socket?.connected) return;

    this.socket = io(process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:3001', {
      query: { userId },
      transports: ['websocket'],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: 5,
    });

    this.setupListeners();
  }

  private setupListeners(): void {
    if (!this.socket) return;

    this.socket.on('connect', () => {
      this.connected = true;
      this.onConnectionChange(true);
      this.flushMessageQueue();
    });

    this.socket.on('disconnect', () => {
      this.connected = false;
      this.onConnectionChange(false);
    });

    this.socket.on('message', ({ type, payload }) => {
      this.onMessage(type, payload);
    });
  }

  send(type: string, payload: unknown): void {
    if (!this.connected) {
      this.messageQueue.push({ type, payload });
      return;
    }

    this.socket?.emit('message', { type, payload });
  }

  private flushMessageQueue(): void {
    while (this.messageQueue.length > 0) {
      const message = this.messageQueue.shift();
      if (message) {
        this.send(message.type, message.payload);
      }
    }
  }

  disconnect(): void {
    this.socket?.disconnect();
    this.socket = null;
    this.connected = false;
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
    }
  }
}

/**
 * implementing the UserProvider component that ties everything together.
 * This provides the context for our entire user management system while
 * maintaining performance and reliability.
 */
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();
  const [presence, setPresence] = useState<Map<string, PresenceData>>(new Map());
  const [syncState, setSyncState] = useState<SyncState>({
    lastSync: new Date(),
    pending: false
  });
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    updateLatency: [],
    averageLatency: 0,
    syncSuccess: 0,
    syncFailed: 0
  });

  const storage = useRef(new StorageManager());
  const ws = useRef<WebSocketManager>();

  // Initialize services
  useEffect(() => {
    const init = async () => {
      try {
        await storage.current.init();
        const savedUser = await storage.current.loadUser();
        if (savedUser) {
          setUser(savedUser);
          setLoggedIn(true);
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to initialize'));
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  // Handle WebSocket setup
  useEffect(() => {
    if (!user?.id || !loggedIn) return;

    ws.current = new WebSocketManager(
      (type, payload) => {
        const start = performance.now();
        handleWebSocketMessage(type, payload);
        const latency = performance.now() - start;
        
        setMetrics(prev => ({
          ...prev,
          updateLatency: [...prev.updateLatency.slice(-9), latency],
          averageLatency: (prev.averageLatency * 9 + latency) / 10
        }));
      },
      (connected) => {
        setUser(prev => prev ? {
          ...prev,
          status: connected ? 'online' : 'offline'
        } : null);
      }
    );

    ws.current.connect(user.id);
    return () => ws.current?.disconnect();
  }, [user?.id, loggedIn]);

  const handleWebSocketMessage = useCallback((type: string, payload: unknown) => {
    switch (type) {
      case 'presence':
        setPresence(new Map(Object.entries(payload as Record<string, PresenceData>)));
        break;
      case 'sync':
        setSyncState(prev => ({
          ...prev,
          lastSync: new Date(),
          pending: false
        }));
        break;
  
    }
  }, []);

  const syncWithServer = useCallback(
    debounce(async () => {
      if (!user || !ws.current) return;

      setSyncState(prev => ({ ...prev, pending: true }));
      try {
        ws.current.send('sync', { userId: user.id, timestamp: new Date() });
        setMetrics(prev => ({ ...prev, syncSuccess: prev.syncSuccess + 1 }));
      } catch (err) {
        setMetrics(prev => ({ ...prev, syncFailed: prev.syncFailed + 1 }));
        throw err;
      }
    }, 1000),
    [user]
  );

  const contextValue = useMemo<UserContextType>(() => ({
    user,
    setUser,
    loggedIn,
    setLoggedIn,
    loading,
    error,
    presence,
    sync: {
      state: syncState,
      trigger: syncWithServer,
      cancel: syncWithServer.cancel
    },
    metrics,
    actions: {
      updatePreferences: async (prefs) => {
        if (!user) return;
        const updatedUser = {
          ...user,
          preferences: { ...user.preferences, ...prefs }
        };
        await storage.current.saveUser(updatedUser);
        setUser(updatedUser);
        syncWithServer();
      },
      updateStatus: async (status) => {
        if (!user) return;
        const updatedUser = { ...user, status };
        await storage.current.saveUser(updatedUser);
        setUser(updatedUser);
        ws.current?.send('presence', { status });
      },
      logActivity: async (activity) => {
        if (!user) return;
        const newActivity = {
          ...activity,
          id: crypto.randomUUID(),
          timestamp: new Date()
        };
        const updatedUser = {
          ...user,
          activities: [...user.activities, newActivity]
        };
        await storage.current.saveUser(updatedUser);
        setUser(updatedUser);
        syncWithServer();
      },
      logout: async () => {
        ws.current?.disconnect();
        setUser(null);
        setLoggedIn(false);
        localStorage.clear();
      }
    }
  }), [user, loggedIn, loading, error, presence, syncState, metrics, syncWithServer]);

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};


export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

/**
 * Here we can export test utilities to help with unit testing and debugging.
 * These aren't used in production but help ensure code quality.
 */
export const __test__ = {
  StorageManager,
  WebSocketManager
};