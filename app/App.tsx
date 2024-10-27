"use client";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Navbar,
  Link,
  Button,
  Image,
  Card,
  CardFooter,
} from "@nextui-org/react";
import { ChevronDown } from "@/public/assets/ChevronDown";
import { ImDeviantart, ImDownload, ImHammer, ImNewspaper } from "react-icons/im";
import Footer from "@/components/ui/footer";
import { useTheme } from "next-themes";
import NavbarComponent from "./front-navbar";
import ThemeProvider from "./provider";
import Progressbar from "../components/progressbar/progressbar";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "../components/Preloader";
import BackToTop from "../components/BackToTop/BackToTop";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
 

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} className="some-class-name" height={undefined} width={undefined} />,
    hammer: <ImHammer />,
    dev: <ImDeviantart />,
    slide: <ImNewspaper />,
    download: <ImDownload />,
  };

  const menuItems = [
    "Profile",
    "Dashboard",
    "WorkSpace",
    "System",
    "My Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const { systemTheme, theme } = useTheme();
  useEffect(() => {
    setDarkMode((theme === "dark" ? systemTheme : theme) === "dark");
  }, [systemTheme, theme]);

  return (
    <ThemeProvider>
      <Progressbar />
      <NavbarComponent isLoggedIn={isLoggedIn} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <Preloader />

      <div className={`min-h-screen ${darkMode ? "bg-black text-white" : "bg-gradient-to-r from-gray-300 via-white to-gray-200 text-black"} font-sans`}>
        <div className={`py-0 hidden md:block md:py-4 ${darkMode ? "bg-black" : "bg-gradient-to-r from-gray-300 via-white to-gray-200 text-black"}`}>
          <div className="flex justify-around items-center">
            {menuItems.map((item, index) => (
              <Link key={index} className="text-lg" href={`/${item.toLowerCase().replace(" ", "-")}`}>
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between px-20 py-0 md:my-40 my-0">
          <div className="max-w-xl mb-10 lg:mb-0">
            <motion.h1 className="text-7xl font-medium leading-tight mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <span>Think bigger.</span><br /><span>Build faster.</span>
            </motion.h1>

            <motion.p className="text-xl mb-8 font-light" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}>
              DesignDesk helps design and development teams build great products, together.
            </motion.p>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}>
              <Button color="secondary"><Link href="/workspace">Get started for free</Link></Button>
            </motion.div>
          </div>

          <div className="relative h-64 lg:h-auto w-full lg:w-1/2">
            {["bg-yellow-300", "bg-purple-400", "bg-red-500", "bg-green-500"].map((color, i) => (
              <motion.div key={i} className={`${color} ${i === 0 ? "w-72 h-48 rotate-6" : i === 1 ? "w-52 h-52 top-4 right-4" : i === 2 ? "w-32 h-32 bottom-4 left-4" : "w-40 h-40 bottom-0 right-8"} absolute transform`}
                initial={{ opacity: 0, ...(i % 2 ? { scale: 0.8 } : { rotate: 0 }) }}
                animate={{ opacity: 1, ...(i % 2 ? { scale: 1 } : { rotate: 6 }) }}
                transition={{ delay: i * 0.2, duration: 1, ease: "easeInOut" }}
              />
            ))}
          </div>
        </div>

        <div className={`${darkMode ? "text-white" : "text-black"} py-20 mx-10`}>
          <div className="flex justify-center text-2xl m-4 pb-14">Features</div>
          <div className="max-w-8xl max-h-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { imgSrc: "five.webp", text: "Live Collaboration", onClick: () => toast("Live Collaboration notify me") },
              { imgSrc: "four.webp", text: "Real-Time Updates", onClick: () => toast("Real-Time updates notify me") },
              { imgSrc: "two.webp", text: "Text Addition", onClick: () => toast("Text addition notify me") },
            ].map((feature, i) => (
              <Card key={i} isFooterBlurred radius="lg" className="border-none shadow-2xl rounded-lg text-center bg-none">
                <Image alt={feature.text} className="object-cover w-full h-full" height={370} src={feature.imgSrc} width={500} />
                <CardFooter className="absolute bottom-1 w-[93%] mb-2 right-2 py-1 shadow-small mr-2 z-10 transition-all duration-300 ease-in-out bg-white/10 rounded-xl hover:bg-black/50 hover:scale-105 text-white font-medium">
                  <p>{feature.text}</p>
                  <Button onClick={feature.onClick} variant="flat" color="default" radius="lg" size="sm">Notify Me</Button>
                </CardFooter>
                <ToastContainer />
              </Card>
            ))}
          </div>
        </div>

        <div className={`${darkMode ? "bg-black text-white" : "bg-gradient-to-r from-gray-300 via-white to-gray-200 text-black"} py-20 px-10 my-40`}>
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
            <div className="flex items-center">
              <div className="text-yellow-700 text-9xl font-extrabold mr-6">&#8220;</div>
              <div className="text-3xl lg:text-5xl font-medium leading-snug max-w-lg">
                Nearly everything that designers and developers need is available in DesignDesk.
              </div>
            </div>
            <div className="flex items-center mt-10 lg:mt-0">
              <div className="text-right mr-4">
                <div className="text-2xl font-semibold">GitHub</div>
                <div className="flex items-center mt-2">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-r from-green-400 to-yellow-400 p-8 m-3"></div>
                  <div>
                    <div className="text-lg text-gray-600">Diana Mounter</div>
                    <div className="text-lg text-gray-600">Head of Design</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
      <BackToTop />
    </ThemeProvider>
  );
}
