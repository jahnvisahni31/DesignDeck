"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

const liveblocksPublicKey = process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY;

export function Room({ children }: { children: ReactNode }) {
  if (!liveblocksPublicKey) {
    // Handle the case where the environment variable is not set
    return <div>Error: Liveblocks public key is not set.</div>;
  }
  return (
    <LiveblocksProvider publicApiKey={liveblocksPublicKey}>
      <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}