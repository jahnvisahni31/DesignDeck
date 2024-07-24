import { useLiveblocks } from "@liveblocks/react";

export const useOthers = () => {
    const { others } = useLiveblocks(); // Adjust based on how you manage the state

    return others.map((other) => ({
        id: other.id,
        cursorX: other.cursorX, // Example properties
        cursorY: other.cursorY,
    }));
};