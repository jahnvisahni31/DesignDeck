"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { io, Socket } from "socket.io-client";

// Enhanced Types
export interface UserPreferences {
  theme: "light" | "dark" | "system";
  layoutPreferences: {
    sidebarCollapsed: boolean;
    zoom: number;
    gridEnabled: boolean;
  };
  recentProjects: string[];
}

export interface EnhancedUser {
  id: string;
  username: string;
  preferences: UserPreferences;
  lastActive: Date;
  status: "online" | "offline" | "away";
}

export interface CollaboratorActivity {
  elementId: string;
  action: "editing" | "viewing";
  timestamp: Date;
}

export interface CollaborationState {
  activeUsers: Map<string, CollaboratorActivity>;
}

interface UserContextType {
  user: EnhancedUser | null;
  setUser: (user: EnhancedUser | null) => void;
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
  collaborators: CollaborationState;
  updateUserActivity: (elementId: string, action: CollaboratorActivity["action"]) => void;
  preferences: UserPreferences;
  updatePreferences: (newPreferences: Partial<UserPreferences>) => void;
}

// Default preferences
const DEFAULT_PREFERENCES: UserPreferences = {
  theme: "system",
  layoutPreferences: {
    sidebarCollapsed: false,
    zoom: 1,
    gridEnabled: true,
  },
  recentProjects: [],
};

// Context creation
const UserContext = createContext<UserContextType | undefined>(undefined);

// Persistence helpers
class StorageManager {
  static KEY = "design-deck-session";

  // I've added a method to save the user's session data to localStorage
  static save(data: Partial<EnhancedUser>) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(data));
    } catch (error) {
      console.error("Failed to save session:", error);
    }
  }

  // I've added a method to load the user's session data from localStorage
  static load(): Partial<EnhancedUser> | null {
    try {
      const data = localStorage.getItem(this.KEY);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error("Failed to load session:", error);
      return null;
    }
  }

  // I've added a method to clear the user's session data from localStorage
  static clear() {
    localStorage.removeItem(this.KEY);
  }
}

// WebSocket manager for real-time collaboration
class RealtimeManager {
  private socket: Socket | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;

  // I've added a new parameter to update the user's status in the provider
  constructor(
    private updateCollaborators: (data: CollaborationState) => void,
    private updateUserStatus: (userId: string, status: EnhancedUser["status"]) => void
  ) {}

  // I've added a method to connect to the WebSocket server and set up event listeners
  connect(userId: string) {
    if (this.socket?.connected) return;

    this.socket = io(process.env.NEXT_PUBLIC_WEBSOCKET_URL || "ws://localhost:3001", {
      query: { userId },
    });

    this.setupEventListeners();
  }

  // I've added the event listeners for the WebSocket connection
  private setupEventListeners() {
    if (!this.socket) return;

    this.socket.on("connect", () => {
      console.log("Connected to collaboration server");
      this.reconnectAttempts = 0;
      this.updateUserStatus(this.socket.id, "online"); // Update user status to online on connect
    });

    this.socket.on("collaborators-update", (data: CollaborationState) => {
      this.updateCollaborators(data);
    });

    this.socket.on("disconnect", () => {
      this.updateUserStatus(this.socket.id, "offline"); // Update user status to offline on disconnect
      if (this.reconnectAttempts < this.maxReconnectAttempts) {
        this.reconnectAttempts++;
        setTimeout(() => this.socket?.connect(), 1000 * this.reconnectAttempts);
      }
    });
  }

  // I've added a method to update the user's activity through the WebSocket connection
  updateActivity(userId: string, activity: CollaboratorActivity) {
    this.socket?.emit("activity-update", { userId, activity });
  }

  // I've added a method to disconnect from the WebSocket server
  disconnect() {
    this.socket?.disconnect();
    this.socket = null;
  }
}

// Main Provider Component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  // I've added the user state, login state, collaboration state, and preferences state
  const [user, setUser] = useState<EnhancedUser | null>(() => {
    const saved = StorageManager.load();
    return saved as EnhancedUser | null;
  });

  const [loggedIn, setLoggedIn] = useState<boolean>(!!user);
  const [collaborators, setCollaborators] = useState<CollaborationState>({
    activeUsers: new Map(),
  });
  const [preferences, setPreferences] = useState<UserPreferences>(
    user?.preferences || DEFAULT_PREFERENCES
  );

  // I've initialized the RealtimeManager with the updateCollaborators and updateUserStatus functions
  const realtimeManager = new RealtimeManager(
    setCollaborators,
    (userId, status) => {
      if (user?.id === userId) {
        setUser((prevUser) => (prevUser ? { ...prevUser, status } : null));
      }
    }
  );

  // I've added a useEffect hook to save the user's session data to localStorage
  useEffect(() => {
    if (user) {
      StorageManager.save(user);
    } else {
      StorageManager.clear();
    }
  }, [user]);

  // I've added a useEffect hook to connect to the WebSocket server when the user is logged in
  useEffect(() => {
    if (user && loggedIn) {
      realtimeManager.connect(user.id);
    }
    return () => realtimeManager.disconnect();
  }, [user?.id, loggedIn]);

  // I've added useEffect hooks to detect the user's online/offline status and update the user state accordingly
  useEffect(() => {
    const handleOffline = () => {
      if (user) {
        setUser((prevUser) => (prevUser ? { ...prevUser, status: "offline" } : null));
      }
    };

    const handleOnline = () => {
      if (user) {
        setUser((prevUser) => (prevUser ? { ...prevUser, status: "online" } : null));
      }
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, [user]);

  // I've added a function to update the user's activity through the RealtimeManager
  const updateUserActivity = (elementId: string, action: CollaboratorActivity["action"]) => {
    if (!user) return;

    const activity: CollaboratorActivity = {
      elementId,
      action,
      timestamp: new Date(),
    };

    realtimeManager.updateActivity(user.id, activity);
  };

  // I've added a function to update the user's preferences and persist the changes
  const updatePreferences = (newPreferences: Partial<UserPreferences>) => {
    if (!user) return;

    const updatedPreferences = {
      ...preferences,
      ...newPreferences,
    };

    setPreferences(updatedPreferences);
    setUser({
      ...user,
      preferences: updatedPreferences,
    });
  };

  // I've created the UserContextType object with all the necessary properties and methods
  const contextValue: UserContextType = {
    user,
    setUser,
    loggedIn,
    setLoggedIn,
    collaborators,
    updateUserActivity,
    preferences,
    updatePreferences,
  };

  // I've wrapped the children components with the UserContext.Provider
  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

// I've added a custom hook to easily access the UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};