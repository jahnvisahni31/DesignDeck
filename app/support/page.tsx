"use client";
import React, { useEffect, useState } from "react";
import { Button, Link } from "@nextui-org/react";
import Footer from "@/components/ui/footer";
import { useTheme } from "next-themes";
import NavbarComponent from "../front-navbar";

export default function SupportUs() {
  const [darkMode, setDarkMode] = useState(false);
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "dark" ? systemTheme : theme;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false); // Track copy success state

  useEffect(() => {
    setDarkMode(currentTheme === "dark");
  }, [currentTheme]);

  const handleCopyLink = () => {
    const shareLink = "https://design-deck.vercel.app/";
    navigator.clipboard.writeText(shareLink).then(
      () => {
        setCopySuccess(true);
        setTimeout(() => {
          setCopySuccess(false); // Reset after 3 seconds
        }, 3000);
      },
      (err) => {
        console.error("Failed to copy: ", err);
      }
    );
  };

  return (
    <>
      <NavbarComponent
        isLoggedIn={isLoggedIn}
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      />
      <div
        className={`min-h-screen ${
          darkMode
            ? "bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white"
            : "bg-gradient-to-r from-gray-300 via-white to-gray-200 text-black"
          } font-sans`}
      >
        <div className="flex flex-col items-center justify-center px-8 py-20">
          {/* Heading Section */}
          <h1 className="text-6xl font-extrabold mb-8 text-center leading-tight animate-pulse">
            Support Our Mission
          </h1>

          <p className="text-2xl mb-8 max-w-3xl text-center font-light leading-relaxed tracking-wide">
            Your support is essential to helping us enhance and expand DesignDesk, the ultimate platform for collaborative interface design. Whether it&apos;s through donations, sharing our project, or providing valuable feedback, your involvement enables us to create a better experience for designers and teams worldwide.
          </p>


          {/* Donate and Share Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-16">
            {/* Donate Button */}
            <Button className="px-8 py-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:from-purple-600 hover:to-green-400 text-white font-semibold rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105" 
              >
              <Link
                href="https://razorpay.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                Donate Now
              </Link>
            </Button>

            {/* Share Button with success message */}
            {!copySuccess ? (
              <Button className="px-8 py-4 bg-blue-600 hover:bg-blue-800 text-white font-semibold rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                onClick={handleCopyLink}
              >
                Share Our Mission
              </Button>
            ) : (
              <Button
                disabled className="px-8 py-4 bg-green-500 text-white font-semibold rounded-full shadow-lg transition duration-300 ease-in-out"
              >
                Link Copied!
              </Button>
            )}
          </div>

          {/* Get Involved Section */}
          <div className="text-center mt-24">
            <h2 className="text-4xl font-semibold mb-6">Other Ways to Get Involved</h2>
            <p className="text-2xl mb-8 max-w-3xl text-center font-light leading-relaxed tracking-wide">
              If you&apos;re not in a position to donate, you can still help! Share your feedback, spread the word about our platform, or volunteer to help us improve. Every small action makes a huge impact.
            </p>
            <Button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              <Link href="/feedback" className="text-white">
                Give Feedback
              </Link>
            </Button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
