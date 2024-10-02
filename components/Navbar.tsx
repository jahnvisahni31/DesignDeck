"use client";

import Image from "next/image";
import { memo } from "react";
import Link from "next/link";
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
      <Link href="/">
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={100}
          height={40}
          className="cursor-pointer"
        />
      </Link>
      <div className="flex-grow flex justify-center">
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
      </div>

      <div className="flex space-x-4 text-white">
        <Link
          href="/"
          className="hover:underline hover:text-gray-300 transition duration-300 ease-in-out"
        >
          Home
        </Link>
        <Link
          href="/faq"
          className="hover:underline hover:text-gray-300 transition duration-300 ease-in-out"
        >
          FAQ
        </Link>
      </div>

      <ActiveUsers />
    </nav>
  );
}

export default memo(
  Navbar,
  (prevProps, nextProps) => prevProps.activeElement === nextProps.activeElement
);
