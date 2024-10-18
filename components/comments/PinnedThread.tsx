"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ThreadData } from "@liveblocks/client";
import { Thread } from "@liveblocks/react-comments";

import { ThreadMetadata } from "@/liveblocks.config";
import { useTheme } from "next-themes";

type Props = {
  thread: ThreadData<ThreadMetadata>;
  onFocus: (threadId: string) => void;
};

function PinnedThread({ thread, onFocus, ...props }: Props) {
  // Open pinned threads that have just been created
  const startMinimized = useMemo(
    () => Number(new Date()) - Number(new Date(thread.createdAt)) > 100,
    [thread]
  );

  const [minimized, setMinimized] = useState(startMinimized);

  const {systemTheme, theme, setTheme} = useTheme();
  const currentTheme = theme === "dark" ? systemTheme : theme;
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if(currentTheme==='dark'){
      setDarkMode(true);
    }
    else{
      setDarkMode(false);
    }
  },[currentTheme])
  // console.log(themeCheck)
  // console.log(darkMode)

  /**
   * memoize the result of this function so that it doesn't change on every render but only when the thread changes
   * Memo is used to optimize performance and avoid unnecessary re-renders.
   *
   * useMemo: https://react.dev/reference/react/useMemo
   */

  const randomAvatar = useMemo(
    () =>
      `https://liveblocks.io/avatars/avatar-${Math.floor(
        Math.random() * 30
      )}.png`,
    []
  );

  const memoizedContent = useMemo(
    () => (
      <div
        className="absolute flex cursor-pointer gap-4"
        {...props}
        onClick={(e: any) => {
          onFocus(thread.id);

          // check if click is on/in the composer
          if (
            e.target &&
            e.target.classList.contains("lb-icon") &&
            e.target.classList.contains("lb-button-icon")
          ) {
            return;
          }

          setMinimized(!minimized);
        }}
      >
        <div
          className={`relative flex h-9 w-9 select-none items-center justify-center rounded-bl-full rounded-br-full rounded-tl-md rounded-tr-full ${darkMode ? "bg-white" : "bg-primary-grey-200"} shadow`}
          data-draggable={true}
        >
          <Image
            src={randomAvatar}
            alt="Dummy Name"
            width={28}
            height={28}
            draggable={false}
            className="rounded-full"
          />
        </div>
        {!minimized ? (
          <div className={`flex min-w-60 flex-col overflow-hidden rounded-lg ${darkMode ? "bg-white":"bg-primary-grey-200"}text-sm shadow`}>
            <Thread
              thread={thread}
              indentCommentContent={false}
              onKeyUp={(e) => {
                e.stopPropagation();
              }}
            />
          </div>
        ) : null}
      </div>
    ),
    [darkMode, minimized, onFocus, props, thread, randomAvatar] // Include randomAvatar in the dependencies
  );

  return <div>{memoizedContent}</div>;
}

export default PinnedThread;
