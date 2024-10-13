"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [darkMode, setDarkMode] = useState(currentTheme === "dark");

  useEffect(() => {
    setMounted(true);
    setDarkMode(currentTheme === "dark");
  }, [currentTheme]);

  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    setTheme(newTheme);
    setDarkMode(!darkMode);
  };

  if (!mounted) return null;

  return (
      <div
        className={`relative w-16 h-8 rounded-full p-1 cursor-pointer transition-colors duration-300 ${
          darkMode ? "bg-gray-500" : "bg-yellow-400"
        }`}
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
      >
        <div
          className={`absolute top-0.5 left-0.5 w-7 h-7 rounded-full transition-all duration-300 flex items-center justify-center ${
            darkMode ? "translate-x-8 bg-gray-100" : "translate-x-0 bg-white"
          }`}
        >
          {darkMode ? (
            <FontAwesomeIcon icon={faMoon} className="text-gray-700" />
          ) : (
            <FontAwesomeIcon icon={faSun} className="text-yellow-500" />
          )}
        </div>
      </div>
  );
};

export default ThemeSwitcher;
