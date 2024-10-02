"use client";

import Image from "next/image";
import React ,{ memo, useState , useEffect } from "react";

import { ActiveElement, NavbarProps } from "@/types/type";

import ActiveUsers from "./users/ActiveUsers";
import { navElements } from "@/constants";
import NewThread from "./comments/NewThread";
import { Button } from "./ui/button";
import ShapesMenu from "./ShapesMenu";
import { Switch } from "./ui/Switch";
import ThemeSwitcher from "./ui/ThemeSwitcher";
import { useTheme } from "next-themes";

function Navbar({
  activeElement,
  imageInputRef,
  handleImageUpload,
  handleActiveElement
}: NavbarProps) {
  const isActive = (value: string | Array<ActiveElement>) =>
    (activeElement && activeElement.value === value) ||
    (Array.isArray(value) &&
      value.some((val) => val?.value === activeElement?.value));

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
  console.log(darkMode)
 
  return (
    <div className={`${darkMode ? "bg-primary-black text-white" : "bg-white text-black border-b-0 border-black"}`}>

    <nav className={`flex select-none items-center justify-between gap-4  px-5`}>
      <Image src="/assets/logo.png" alt="Logo" width={66} height={26} />

      <ul className="flex ">
        {/* Renders nav elements */}
        {navElements.map((item: ActiveElement | any) => (
          <li
            key={item.name}
            onClick={() => {
              if (Array.isArray(item.value)) return; // Prevents selection of shapes menu
              handleActiveElement(item);
            }}
            className={`group px-2.5 py-5 flex justify-center items-center
          ${
            isActive(item.value)
              ? "bg-primary-green"
              : "hover:bg-primary-grey-200"
          }
          `}
          >
            {Array.isArray(item.value) ? ( // Renders shapes menu
              <ShapesMenu
                item={item}
                activeElement={activeElement}
                imageInputRef={imageInputRef}
                handleActiveElement={handleActiveElement}
                handleImageUpload={handleImageUpload}
              />
            ) : item.value === "comments" ? ( // Renders comments cursor
              <NewThread>
                <Button className={`relative w-5 h-5 object-contain p-2 items-center justify-center  focus:outline-none focus:ring-0 ${darkMode ? "border-gray-300 text-white  " : " text-black  "}`}>
                  <Image
                    src={item.icon}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                    className={isActive(item.value) ? "invert" : ""}
                  />
                </Button>
              </NewThread>
            ) : (
              // Renders other nav elements
              <Button className={`relative w-5 h-5 object-contain p-2 items-center justify-center  focus:outline-none focus:ring-0 ${darkMode ? "border-gray-300 text-white  " : " text-black   "}`}>
                <Image
                  src={item.icon}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                  className={isActive(item.value) ? "invert" : ""}
                />
              </Button>
            )}
          </li>
        ))}
      </ul>
      <div className="flex items-center" >
        <ThemeSwitcher/>
      </div>
      
      <ActiveUsers />
    </nav>
    </div>
    
  );
}

export default memo(
  Navbar,
  (prevProps, nextProps) => prevProps.activeElement === nextProps.activeElement
);
