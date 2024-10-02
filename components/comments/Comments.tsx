import { ClientSideSuspense } from "@liveblocks/react";
import CommentsOverlay from "./CommentsOverlay";
import { ErrorBoundary } from "react-error-boundary";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function Comments() {
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
  return (
    <ErrorBoundary
      fallback={

        <div className={`fixed left-1/2 -translate-x-1/2 bottom-[40px] ${darkMode? "bg-white shadow-black" : "bg-primary-grey-200 shadow-white"}  rounded-md flex items-center p-3 shadow-md shadow-black`}>
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
