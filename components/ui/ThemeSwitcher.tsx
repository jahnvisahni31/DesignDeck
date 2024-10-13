"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mount, setMount] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [darkMode, setDarkMode] = useState(currentTheme === "dark");

  useEffect(() => {
    setMount(true);
    setDarkMode(currentTheme === "dark");
  }, [currentTheme]);

  const toggleTheme = () => {
    setTheme(darkMode ? "light" : "dark");
    setDarkMode(!darkMode);
  };

  return (
    <div className="z-50 flex items-center">
      {mount && (
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleTheme}
            aria-label="Toggle dark mode"
          />
          {/* <span className={`slider round ${darkMode ? "bg-light-blue-300" : "bg-white"}`}> */}
          <span className={`slider round ${darkMode ? "bg-light-blue-900" : "bg-white"}`}>
            <i className={`fas fa-sun icon transition-opacity duration-300 ${darkMode ? "opacity-0" : "opacity-100"}`} />
            <i className={`fas fa-moon icon transition-opacity duration-300 ${darkMode ? "opacity-100" : "opacity-0"}`} />
          </span>
        </label>
      )}
    </div>
  );
};

export default ThemeSwitcher;
