"use client";

import { getShapeInfo } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

function LeftSideBar({ allShapes }: { allShapes: Array<any> }) {

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

  
  const memoizedShapes = useMemo(
    () => (
      <div className={`${darkMode? "border-primary-grey-200 bg-primary-black text-primary-grey-300" : "bg-white text-black"}`}>
      <section className={`flex flex-col border-t  min-w-[227px] sticky left-0 h-full max-sm:hidden select-none overflow-y-auto pb-20`}>
        <h3 className={`border  px-5 py-4 ${darkMode ? "text-white" : "text-black "} text-xs uppercase`}>
          Layers
        </h3>
        <div className="flex flex-col">
          {allShapes?.map((shape: any) => {
            const info = getShapeInfo(shape[1]?.type);

            return (
              <div
                key={shape[1]?.objectId}
                className={`group my-1 flex items-center gap-2 px-5 py-2.5 hover:cursor-pointer hover:bg-primary-green  ${darkMode ?"hover:text-primary-black" : "hover:text-white"}`}
              >
                <Image
                  src={info?.icon}
                  alt="Layer"
                  width={16}
                  height={16}
                  className="group-hover:invert"
                />
                <h3 className="text-sm font-semibold capitalize">
                  {info.name}
                </h3>
              </div>
            );
          })}
        </div>
      </section>
      </div>
    ),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [allShapes?.length, darkMode]
  );

  return memoizedShapes;
}

export default LeftSideBar;
