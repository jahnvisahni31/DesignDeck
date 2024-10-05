"use client";
import { useTheme } from "next-themes";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import { useEffect } from "react";

const ThemeSwitcher = ({ darkMode, setDarkMode }) => {
  const { systemTheme, theme, setTheme } = useTheme();
  
  // Update dark mode state based on current theme
  useEffect(() => {
    setDarkMode(theme === 'dark');
  }, [theme, setDarkMode]);

  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    setTheme(newTheme);
  };

  return (
    <div className="z-50">
      <label className="switch">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleTheme}
          aria-label="Toggle dark mode"
        />
        <span className="slider round">
          {darkMode ? (
            <i className="fas fa-sun icon" /> // Sun icon for dark mode
          ) : (
            <i className="fas fa-moon icon" /> // Moon icon for light mode
          )}
        </span>
      </label>

      <style jsx>{`
        .switch {
          position: relative;
          display: inline-block;
          width: 60px; /* Width of the toggle */
          height: 34px; /* Height of the toggle */
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: -2px; /* Adjusted to center the icon vertically */
          left: -2px; /* Adjusted to center the icon horizontally */
          right: -2px; /* Adjusted to center the icon horizontally */
          bottom: -2px; /* Adjusted to center the icon vertically */
          background-color: #ccc; /* Background color when off */
          transition: .4s; /* Transition effect for smoothness */
          border-radius: 34px; /* Rounded corners */
          display: flex; /* Flexbox for centering */
          align-items: center; /* Centering vertically */
          justify-content: ${darkMode ? 'flex-end' : 'flex-start'}; /* Position icon based on mode */
          padding: 0 10px;
        }

        .slider .icon {
          font-size: 20px; /* Set a size for the icons */
          transition: .4s; /* Transition effect for smoothness */
        }

        input:checked + .slider {
          background-color: #2196F3; /* Background color when on */
        }
      `}</style>
    </div>
  );
};

export default ThemeSwitcher;