"use client";

import Image from "next/image";
import { memo } from "react";

import { ActiveElement, NavbarProps } from "@/types/type";

import ActiveUsers from "./users/ActiveUsers";
import { navElements } from "@/constants";
import NewThread from "./comments/NewThread";
import { Button } from "./ui/button";
import ShapesMenu from "./ShapesMenu";

function Navbar({
  activeElement,
  imageInputRef,
  handleImageUpload,
  handleActiveElement,
}: NavbarProps) {
  const isActive = (value: string | Array<ActiveElement>) =>
    (activeElement && activeElement.value === value) ||
    (Array.isArray(value) &&
      value.some((val) => val?.value === activeElement?.value));

  return (
    <nav className="flex select-none items-center justify-between gap-4 bg-primary-black px-5 text-white">
      <Image src="/assets/logo.svg" alt="FigPro Logo" width={66} height={26} />

      <ul className="flex">
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
                <Button className="relative w-5 h-5 object-contain">
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
              <Button className="relative w-5 h-5 object-contain">
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

      <ActiveUsers />
    </nav>
  );
}

export default memo(
  Navbar,
  (prevProps, nextProps) => prevProps.activeElement === nextProps.activeElement
);
