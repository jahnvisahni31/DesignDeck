"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import NavbarComponent from "../front-navbar";
import { useUser } from "@/context/UserContext";
import Footer from "@/components/ui/footer";

const BlogPage = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "dark" ? systemTheme : theme;
  const [darkMode, setDarkMode] = useState(false);
  const { loggedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (currentTheme === "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, [currentTheme]);

  const blogs = [
    {
      title: "Think Bigger",
      content:
        "DesignDesk helps design and development teams build great products, together.",
    },
    {
      title: "Build Faster",
      content:
        "DesignDesk improves workflow efficiency by streamlining processes.",
    },
    {
      title: "Collaborate Seamlessly",
      content:
        "DesignDesk enables real-time collaboration for better teamwork.",
    },
    {
      title: "Enhance Creativity",
      content: "Unlock creative potential with powerful design tools.",
    },
    {
      title: "Real-Time Updates",
      content: "Stay updated with every change in real-time.",
    },
    {
      title: "Better Workflow",
      content: "Manage projects effortlessly with integrated design tools.",
    },
  ];
  return (
    <>
      <NavbarComponent
        isLoggedIn={loggedIn}
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      />
      <div className="p-6 mt-[4rem]">
        {/* <Link href="/">
        <Button className='ml-[2.5rem] sm:mb-[0rem] mb-[2rem]' color="secondary">
           Home
            </Button>
            </Link> */}
        <h1 className="text-4xl font-bold mb-4 sm:mb-8 text-center">Blogs</h1>
        <div className="justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className=" p-4 shadow-lg shadow-[#3b0a45] rounded-md "
            >
              <Image
                src="/five.webp"
                width={400}
                height={400}
                alt="Description of the image"
                className="w-[30rem] rounded mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p>{blog.content}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
