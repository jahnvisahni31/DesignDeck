"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with larger size */}
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={100}
            height={40}
            className="cursor-pointer"
          />
        </Link>

        {/* Navigation Links */}
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
      </div>
    </nav>
  );
};

export default NavBar;
