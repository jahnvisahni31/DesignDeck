'use client'
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { motion } from 'framer-motion';
import NavbarComponent from './front-navbar';

const NotFound = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'dark' || (!theme && systemTheme === 'dark') ? 'dark' : 'light';
  const [darkMode, setDarkMode] = useState(currentTheme === 'dark');

  useEffect(() => {
    setDarkMode(currentTheme === 'dark');
  }, [currentTheme]);

  return (
    <>
      <NavbarComponent
        isLoggedIn={isLoggedIn}
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      />
      <div
        className={`min-h-screen flex items-center justify-center px-4 ${
          darkMode ? 'bg-black text-white' : 'bg-white text-black'
        }`}
      >
        <div className="max-w-4xl w-full flex flex-col md:flex-row items-center text-center md:text-left">
          {/* Left side image */}
          <div className="relative h-64 lg:h-auto w-full lg:w-1/2">
              <motion.div
                className="absolute inset-0 flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  className="bg-yellow-300 w-72 h-48 transform rotate-6"
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 1, rotate: 6 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
                <motion.div
                  className="bg-purple-400 w-52 h-52 absolute top-1 right-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
                />
                <motion.div
                  className="bg-red-500 w-32 h-32 absolute bottom-4 left-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 1, ease: "easeInOut" }}
                />
                <motion.div
                  className="bg-green-500 w-40 h-40 absolute bottom-0 right-9"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 1, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          
          {/* Right side content */}
          <div className="md:w-1/2">
            <motion.h1
              className="text-6xl font-bold mb-4"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 120, delay: 0.4 }}
            >
              Oops!
            </motion.h1>

            <motion.h2
              className="text-2xl font-semibold mb-4"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 120, delay: 0.6 }}
            >
              The page you're looking for doesn't exist.
            </motion.h2>

            <motion.p
              className="text-lg mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Looks like you've wandered into unknown territory. Let's get you back to safety!
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 120, delay: 1 }}
            >
              <Link href="/">
                <button className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                  darkMode ? 'bg-purple-500 text-white hover:bg-purple-600' : 'bg-purple-700 text-white hover:bg-purple-400'
                }`}>
                  Go back to homepage
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
