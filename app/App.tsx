"use client";
import React, { useEffect, useState } from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, slider} from "@nextui-org/react";
import { ChevronDown } from "@/public/assets/ChevronDown";
import { ImDeviantart, ImDownload, ImHammer, ImNewspaper } from "react-icons/im";
import Image from "next/image";
import Footer from "@/components/ui/footer";
import { useTheme } from "next-themes";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} height={undefined} width={undefined} />,
    hammer : <ImHammer/>,
    dev: <ImDeviantart />,
    slide: <ImNewspaper />,
    download: <ImDownload />

  }

  const menuItems = [
    "Profile",
    "Dashboard",
    "WorkSpace",
    "System",
    "My Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const {systemTheme, theme, setTheme} = useTheme();
  const currentTheme = theme === "dark" ? systemTheme : theme;
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if(currentTheme==='dark'){
      setDarkMode(true);
    }
    else{
      setDarkMode(false);
    }
  },[currentTheme])
  // console.log(themeCheck)
  // console.log(darkMode)

  return (
    <><div>
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-lg">
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <p className="font-bold text-inherit">DesignDesk</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand>
            <p className="font-bold text-inherit">DesignDesk</p>
          </NavbarBrand>
          <NavbarItem>
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Dropdown backdrop="blur">
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Open Menu
                </Button>
              </DropdownTrigger>
              <DropdownMenu variant="faded" aria-label="Static Actions">
                <DropdownItem key="new" startContent={icons.hammer}>DesignDesk Jam</DropdownItem>
                <DropdownItem key="copy" startContent={icons.dev}>Dev Mode</DropdownItem>
                <DropdownItem key="edit" startContent={icons.slide}>DesignDesk Slides</DropdownItem>
                <DropdownItem key="delete" className=" text-warning" startContent={icons.download}>
                  Download
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

          </NavbarItem>

          <NavbarItem>
            <Link color="foreground" href="/">
              Contact
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/faq">
              FAQ
            </Link>
          </NavbarItem>
        </NavbarContent>

        

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="warning" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
          <NavbarItem>
            <ThemeSwitcher/>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"}
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      </div>
      
    </div>
    <div className={`min-h-screen ${darkMode ? "bg-black text-white " : "bg-white text-black"} `}  >
      <div className="flex flex-col lg:flex-row items-center justify-between px-20 py-20 my-40  ">
        <div className="max-w-xl mb-10 lg:mb-0">
          <h1 className="text-7xl font-medium leading-tight mb-6">
            Think bigger.<br />Build faster.
          </h1>
          <p className="text-xl mb-8 font-light">
            DesignDesk helps design and development teams build great products, together.
          </p>
          <Button color="secondary" >
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

      <div className={` ${darkMode ? "bg-black text-white " : "bg-white text-black"} py-20  `}>
      <div className="flex justify-center text-2xl m-4 pb-14">
            Contributions
          </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className={` ${darkMode ? "bg-neutral-900 text-white " : "bg-white text-neutral-900"} shadow-2xl rounded-lg p-6 text-center `}>
            <h3 className="text-xl font-semibold mb-4">Hi Chef</h3>
            <div className="flex justify-center">
            {/* <div className=" h-6 w-6 rounded-full bg-gradient-to-r from-green-400 to-yellow-400 p-8 my-6">
            </div> */}
            <Image
              src="/profile-1.webp"
              alt="Prototype 1"
              width={300}
              height={300}
              className="mx-auto mb-4 w-24 h-24 object-cover rounded-full"
            />
            </div>
            
            <div>Your friends are cooking</div>
          </div>
          <div className={` ${darkMode ? "bg-neutral-900 text-white " : "bg-white text-neutral-900"}   shadow-2xl rounded-lg p-6 text-center`}>
            <h3 className="text-xl font-semibold mb-4">Yasmin</h3>
            {/* <div className="h-6 w-6 rounded-full bg-gradient-to-r from-green-400 to-yellow-400 p-8 m-3">
            </div> */}
            <div className="flex justify-center">
            {/* <div className=" h-6 w-6 rounded-full bg-gradient-to-r from-green-400 to-yellow-400 p-8 my-6">
            </div> */}
            <Image
              src="/profile-2.webp"
              alt="Prototype 1"
              width={300}
              height={300}
              className="mx-auto mb-4 w-24 h-24 object-cover rounded-full"
            />
            </div>
            <div>Tomato Habanero Salsa</div>
          </div>
          <div className={` ${darkMode ? "bg-neutral-900 text-white " : "bg-white text-neutral-900"}  shadow-2xl rounded-lg p-6 text-center`}>
            <h3 className="text-xl font-semibold mb-4">Francis</h3>
            {/* <div className="h-6 w-6 rounded-full bg-gradient-to-r from-green-400 to-yellow-400 p-8 m-3">
            </div> */}
            <div className="flex justify-center">
            {/* <div className=" h-6 w-6 rounded-full bg-gradient-to-r from-green-400 to-yellow-400 p-8 my-6">
            </div> */}
            <Image
              src="/profile-3.webp"
              alt="Prototype 1"
              width={300}
              height={300}
              className="mx-auto mb-4 w-24 h-24 object-cover rounded-full"
            />
            </div>
            <div>In progress...</div>
          </div>
        </div>
      </div>

      <div className={` ${darkMode ? "bg-black text-white " : "bg-white text-black"} py-20 px-10 my-40`}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex items-center">
          <div className="text-yellow-700 text-9xl font-extrabold mr-6">
            &#8220;
          </div>
          <div className="text-3xl lg:text-5xl font-medium leading-snug max-w-lg">
            Nearly everything that designers and developers need is available in DesignDesk.
          </div>
        </div>

        <div className="flex items-center mt-10 lg:mt-0">
          <div className="text-right mr-4 flex-col">
            <div className="text-2xl font-semibold justify-start">GitHub</div>
            
            <div className="flex flex-row">
            <div className="h-6 w-6 rounded-full bg-gradient-to-r from-green-400 to-yellow-400 p-8 m-3">
            </div>
            <div className="flex flex-col justify-center items-center">
            <div className="text-lg text-gray-600 ">Diana Mounter</div>
            <div className="text-lg text-gray-600 ">Head of Design</div>

            </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>

    <Footer/>

    </div></>
  );
}
