import { ClientSideSuspense } from "@liveblocks/react";
import CommentsOverlay from "./CommentsOverlay";
import { ErrorBoundary } from "react-error-boundary";

function Comments() {
  return (
    <ErrorBoundary
      fallback={
        <div className="fixed left-1/2 -translate-x-1/2 bottom-[40px] bg-white rounded-md flex items-center p-3 shadow-md shadow-black">
          An error occurred while loading threads.
        </div>
      }
    >
      <ClientSideSuspense fallback={null}>
        {() => <CommentsOverlay />}
      </ClientSideSuspense>
    </ErrorBoundary>
  );
}

export default Comments;
