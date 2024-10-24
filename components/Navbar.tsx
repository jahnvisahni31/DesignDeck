"use client";

import Image from "next/image";
import React, { memo, useState, useEffect } from "react";
import Link from "next/link";
import { ActiveElement, NavbarProps } from "@/types/type";
import ActiveUsers from "./users/ActiveUsers";
import { navElements } from "@/constants";
import NewThread from "./comments/NewThread";
import { Button } from "./ui/button";
import ShapesMenu from "./ShapesMenu";
import ThemeSwitcher from "./ui/ThemeSwitcher";
import { useTheme } from "next-themes";
import { Menu, X } from "lucide-react";

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

  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`${theme === "dark" ? "bg-primary-black text-white" : "bg-white text-black border-b border-gray-200"}`}>
      <nav className="flex select-none items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={100}
            height={40}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-grow justify-center">
          <ul className="flex">
            {navElements.map((item: ActiveElement | any) => (
              <li
                key={item.name}
                onClick={() => {
                  if (Array.isArray(item.value)) return;
                  handleActiveElement(item);
                }}
                className={`group px-2.5 py-2 flex justify-center items-center cursor-pointer
                  ${
                    isActive(item.value)
                      ? "bg-primary-green"
                      : "hover:bg-primary-customGray"
                  }
                `}
              >
                {Array.isArray(item.value) ? (
                  <ShapesMenu
                    item={item}
                    activeElement={activeElement}
                    imageInputRef={imageInputRef}
                    handleActiveElement={handleActiveElement}
                    handleImageUpload={handleImageUpload}
                  />
                ) : item.value === "comments" ? (
                  <NewThread>
                    <Button className="relative w-8 h-8 p-1">
                      <Image
                        src={item.icon}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                        className={theme === "dark" ? "invert" : ""}
                      />
                    </Button>
                  </NewThread>
                ) : (
                  <Button
                    className={`relative w-8 h-8 p-1 focus:outline-none focus:ring-2 focus:ring-primary-green`}
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                      className={theme === "dark" ? "invert" : ""}
                    />
                  </Button>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/" className="hidden md:inline-block hover:underline transition duration-300 ease-in-out">
            Home
          </Link>
          <Link href="/faq" className="hidden md:inline-block hover:underline transition duration-300 ease-in-out">
            FAQ
          </Link>
          <ThemeSwitcher />
          <ActiveUsers />
          <Button
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center py-4">
            {navElements.map((item: ActiveElement | any) => (
              <li
                key={item.name}
                onClick={() => {
                  if (Array.isArray(item.value)) return;
                  handleActiveElement(item);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-center py-2 ${
                  isActive(item.value)
                    ? "bg-primary-green"
                    : "hover:bg-primary-customGray"
                }`}
              >
                {item.name}
              </li>
            ))}
            <li className="w-full text-center py-2 hover:bg-primary-customGray">
              <Link href="/">Home</Link>
            </li>
            <li className="w-full text-center py-2 hover:bg-primary-customGray">
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default memo(Navbar, (prevProps, nextProps) => prevProps.activeElement === nextProps.activeElement);