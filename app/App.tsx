"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  Link,
  Button,
  Image,
  Card,
  CardFooter,
} from "@nextui-org/react";
import { ChevronDown } from "@/public/assets/ChevronDown";
import {
  ImDeviantart,
  ImDownload,
  ImHammer,
  ImNewspaper,
} from "react-icons/im";
import Footer from "@/components/ui/footer";
import { useTheme } from "next-themes";
import NavbarComponent from "./front-navbar";
import ThemeProvider from "./provider";
import Progressbar from "../components/progressbar/progressbar"

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const icons = {
    chevron: (
      <ChevronDown
        fill="currentColor"
        size={16}
        height={undefined}
        width={undefined}
        className="some-class-name"
      />
    ),
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
  const currentTheme = theme === "dark" ? systemTheme : theme;
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(currentTheme === "dark");
  }, [currentTheme]);

  return (
    <>
      <ThemeProvider>
        <Progressbar/>
        <NavbarComponent
          isLoggedIn={isLoggedIn}
          setIsMenuOpen={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
        />
        <div
          className={`min-h-screen ${
            darkMode
              ? "bg-black text-white"
              : "bg-gradient-to-r from-gray-300 via-white to-gray-200 text-black"
          } font-sans`}
        >
          <div
            className={`py-4 ${
              darkMode
                ? "bg-black"
                : "bg-gradient-to-r from-gray-300 via-white to-gray-200 text-black"
            }`}
          >
            <div className="flex justify-around items-center">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  className="text-lg"
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between px-20 py-2 my-40">
            <div className="max-w-xl mb-10 lg:mb-0">
              <h1 className="text-7xl font-medium leading-tight mb-6">
                Think bigger.
                <br />
                Build faster.
              </h1>
              <p className="text-xl mb-8 font-light">
                DesignDesk helps design and development teams build great
                products, together.
              </p>
              <Button color="secondary">
                <Link href="/workspace">Get started for free</Link>
              </Button>
            </div>

            <div className="relative h-64 lg:h-auto w-full lg:w-1/2">
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="bg-yellow-300 w-72 h-48 transform rotate-6"></div>
                <div className="bg-purple-400 w-52 h-52 absolute top-4 right-4"></div>
                <div className="bg-red-500 w-32 h-32 absolute bottom-4 left-4"></div>
                <div className="bg-green-500 w-40 h-40 absolute bottom-0 right-8"></div>
              </div>
            </div>
          </div>

          <div
            className={` ${
              darkMode ? " text-white " : " text-black"
            } py-20 mx-10 `}
          >
            <div className="flex justify-center text-2xl m-4 pb-14">
              Features
            </div>
            <div className="max-w-8xl max-h-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 ">
              <div
                className={` ${
                  darkMode ? " text-white " : " text-neutral-900"
                } bg-none  shadow-2xl rounded-lg  text-center`}
              >
                <Card isFooterBlurred radius="lg" className="border-none ">
                  <Image
                    alt="Woman listing to music"
                    className=" object-fill w-full h-full"
                    height={370}
                    src="five.webp"
                    width={500}
                  />
                  <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[93%] mb-2 right-2 shadow-small  mr-2 z-10 transition-all duration-300 ease-in-out hover:bg-black/50 hover:scale-105 ">
                    <p className="font-medium text-justify text-black ">
                      Live Collaboration
                    </p>
                    <Button
                      className="text-tiny text-white bg-black/60"
                      variant="flat"
                      color="default"
                      radius="lg"
                      size="sm"
                    >
                      Notify me
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div className={`  bg-none shadow-2xl rounded-lg  text-center`}>
                <Card isFooterBlurred radius="lg" className="border-none">
                  <Image
                    alt="Woman listing to music"
                    className="object-cover w-full h-full"
                    height={370}
                    src="four.webp"
                    width={500}
                  />
                  <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[93%] mb-2 right-2 shadow-small  mr-2 z-10 transition-all duration-300 ease-in-out hover:bg-black/50 hover:scale-105">
                    <p className=" font-light text-white text-justify">
                      Real-Time Updates
                    </p>
                    <Button
                      className="text-tiny text-white bg-black/20"
                      variant="flat"
                      color="default"
                      radius="lg"
                      size="sm"
                    >
                      <a href="/workspace">Notify me</a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div
                className={` ${
                  darkMode ? " text-white " : " text-neutral-900"
                } bg-none shadow-2xl rounded-lg  text-center`}
              >
                <Card isFooterBlurred radius="lg" className="border-none">
                  <Image
                    alt="Woman listing to music"
                    className="  object-cover w-full h-full"
                    height={370}
                    src="two.webp"
                    width={500}
                  />
                  <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[93%] mb-2 right-2 shadow-small  mr-2 z-10 transition-all duration-300 ease-in-out hover:bg-black/50 hover:scale-105">
                    <p className="text-white text-md font-sans">
                      Text Addition
                    </p>
                    {/* <p className="text-black text-tiny">Add text to designs and adjust font size, weight, and style.</p> */}

                    <Button
                      color="default"
                      className="  text-tiny font-sans text-white bg-black/60"
                      variant="flat"
                      radius="lg"
                      size="sm"
                    >
                      Notify Me
                    </Button>
                  </CardFooter>
                  {/* <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-black">Text Addition</p>
                </div>
                <Button radius="full" color="default" className=" shadow-lg text-tiny text-white bg-black/60">
                  Notify Me
                </Button>
              </CardFooter> */}
                </Card>
              </div>
            </div>
          </div>

          <div
            className={` ${
              darkMode
                ? "bg-black text-white "
                : "bg-gradient-to-r from-gray-300 via-white to-gray-200 text-black"
            } py-20 px-10 my-40`}
          >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
              <div className="flex items-center">
                <div className="text-yellow-700 text-9xl font-extrabold mr-6">
                  &#8220;
                </div>
                <div className="text-3xl lg:text-5xl font-medium leading-snug max-w-lg">
                  Nearly everything that designers and developers need is
                  available in DesignDesk.
                </div>
              </div>

              <div className="flex items-center mt-10 lg:mt-0">
                <div className="text-right mr-4 flex-col">
                  <div className="text-2xl font-semibold justify-start">
                    GitHub
                  </div>

                  <div className="flex flex-row">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-green-400 to-yellow-400 p-8 m-3"></div>
                    <div className="flex flex-col justify-center items-center">
                      <div className="text-lg text-gray-600">Diana Mounter</div>
                      <div className="text-lg text-gray-600">
                        Head of Design
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
