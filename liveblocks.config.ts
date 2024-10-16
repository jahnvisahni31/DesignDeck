import { LiveMap, createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";
import { ReactionEvent } from "./types/type";

// Ensure publicApiKey is properly retrieved from the environment
if (!process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY) {
  throw new Error("NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY is not defined.");
}

const client = createClient({
  throttle: 16, // Keep this setting to control the frequency of updates.
  publicApiKey: process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY, // Public key must be used here.
  
  // Uncomment if using a custom auth backend
  // authEndpoint: "/api/liveblocks-auth",

  resolveUsers: async ({ userIds }) => {
    // For Comments feature, return user data like name and avatar
    // Implement this with your own backend or leave it as is if not used
    return [];
  },
  resolveMentionSuggestions: async ({ text, roomId }) => {
    // For Comments feature: Suggest userIds when mentioning users by filtering their names
    return [];
  },
});

// Presence: Properties that are synced for each user
export type Presence = {
  cursor: { x: number; y: number } | null;
  message: string | null;
};

// Storage: Shared objects across users that persist in the Room
type Storage = {
  canvasObjects: LiveMap<string, any>; // Example of shared canvas objects
};

// UserMeta: Optional static metadata for users
type UserMeta = {
  // Example: id, name, avatar fetched from your custom auth backend
  // id?: string;
  // info?: Json;
};

// RoomEvent: Custom events broadcast and listened to within the room
type RoomEvent = ReactionEvent;

// ThreadMetadata: Metadata for Comments threads (for example, in collaborative comments feature)
export type ThreadMetadata = {
  resolved: boolean;
  zIndex: number;
  time?: number;
  x: number;
  y: number;
};

export const {
  suspense: {
    RoomProvider,
    useRoom,
    useMyPresence,
    useUpdateMyPresence,
    useSelf,
    useOthers,
    useOthersMapped,
    useOthersConnectionIds,
    useOther,
    useBroadcastEvent,
    useEventListener,
    useErrorListener,
    useStorage,
    useObject,
    useMap,
    useList,
    useBatch,
    useHistory,
    useUndo,
    useRedo,
    useCanUndo,
    useCanRedo,
    useMutation,
    useStatus,
    useLostConnectionListener,
    useThreads,
    useUser,
    useCreateThread,
    useEditThreadMetadata,
    useCreateComment,
    useEditComment,
    useDeleteComment,
    useAddReaction,
    useRemoveReaction,
  },
} = createRoomContext<Presence, Storage, UserMeta, RoomEvent, ThreadMetadata>(
  client
);
