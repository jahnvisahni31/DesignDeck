"use client"
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import { useUser } from "@/context/UserContext";
import Logo from "@/public/assets/design-deck-logo.png";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import Image from 'next/image';
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  ImDeviantart,
  ImDownload,
  ImHammer,
  ImNewspaper,
} from "react-icons/im";

interface NavbarComponentProps {
  isLoggedIn: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
}

const icons = {
  chevron: <ChevronDown size={16} />,
  hammer: <ImHammer />,
  dev: <ImDeviantart />,
  slide: <ImNewspaper />,
  download: <ImDownload />,
};

const menuItems = [
  { name: "Profile", href: "/profile" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "WorkSpace", href: "/workspace" },
  { name: "System", href: "/system" },
  { name: "My Settings", href: "/settings" },
  { name: "Help & Feedback", href: "/help" },
  { name: "Log Out", href: "/logout" },
];

const NavbarComponent: React.FC<NavbarComponentProps> = ({ isLoggedIn, setIsMenuOpen, isMenuOpen }) => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "dark" ? systemTheme : theme;
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const {loggedIn, setLoggedIn} = useUser();

  useEffect(() => {
    setDarkMode(currentTheme === 'dark');

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [currentTheme]);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? "text-white" : "text-black"}`}>
      <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="bg-neutral-900 text-white">
        <NavbarContent justify="start">
          {!isMobile && (
            <NavbarBrand className="flex basis-0 flex-row flex-grow flex-nowrap justify-start bg-transparent" style={{ marginLeft: '-50px' }}>
              <Image 
                className="transition duration-300 ease-in-out" 
                src={Logo.src} 
                alt="DesignDeck Logo"  
                width={276}
                height={64}
                style={{ marginLeft: '0', marginRight: '10px', background: 'none' }}
              />
            </NavbarBrand>
          )}
        </NavbarContent>

        <NavbarContent justify="center" className="space-x-4">
          <NavbarItem className="flex items-center">
            <Link href="/" legacyBehavior passHref>
              <a className="relative inline-block text-lg text-white transition-all duration-300 hover:text-gray-300 group transform hover:scale-105">
                Home
                <span className="absolute block h-[2px] w-full bg-gray-300 bottom-0 left-0 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </Link>
          </NavbarItem>

          <NavbarItem className="flex items-center">
            <Dropdown backdrop="blur">
              <DropdownTrigger>
                <Button disableRipple endContent={icons.chevron} radius="sm" variant="light" style={{ fontSize: '16px' }}>
                  <p className="text-white">Open Menu</p>
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new" startContent={icons.hammer}>
                  <Link href="/design-desk-jam" legacyBehavior passHref>
                    <a className={`relative inline-block text-md ${darkMode ? "text-white " : "text-neutral-600 "} transition-all duration-300 group transform hover:scale-105`}>
                      DesignDesk Jam
                      <span className="absolute block h-[2px] w-full bg-neutral-600 dark:text-white bottom-0 left-0 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                    </a>
                  </Link>
                </DropdownItem>
                <DropdownItem key="copy" startContent={icons.dev}>
                  <Link href="/dev-mode" legacyBehavior passHref>
                    <a className={`relative inline-block text-md ${darkMode ? "text-white " : "text-neutral-600 "} transition-all duration-300 group transform hover:scale-105`}>
                      Dev Mode
                      <span className="absolute block h-[2px] w-full bg-neutral-600 dark:text-white bottom-0 left-0 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                    </a>
                  </Link>
                </DropdownItem>
                <DropdownItem key="edit" startContent={icons.slide}>
                  <Link href="/design-desk-slides" legacyBehavior passHref>
                    <a className={`relative inline-block text-md ${darkMode ? "text-white " : "text-neutral-600 "} transition-all duration-300 group transform hover:scale-105`}>
                      DesignDesk Slides
                      <span className="absolute block h-[2px] w-full bg-neutral-600 dark:text-white bottom-0 left-0 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                    </a>
                  </Link>
                </DropdownItem>
                <DropdownItem key="delete" className="text-warning" startContent={icons.download}>
                  <Link href="/download" legacyBehavior passHref>
                    <a className={`relative inline-block text-md ${darkMode ? "text-white " : "text-neutral-600 "} transition-all duration-300 group transform hover:scale-105`}>
                      Download
                      <span className="absolute block h-[2px] w-full bg-neutral-600 dark:text-white bottom-0 left-0 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                    </a>
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>

          <NavbarItem>
            <Link href="/contact" legacyBehavior passHref>
              <a className="relative inline-block text-lg text-white transition-all duration-300 hover:text-gray-300 group transform hover:scale-105">
                Contact
                <span className="absolute block h-[2px] w-full bg-gray-300 bottom-0 left-0 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link href="/faq" legacyBehavior passHref>
              <a className="relative inline-block text-lg text-white transition-all duration-300 hover:text-gray-300 group transform hover:scale-105">
                FAQ
                <span className="absolute block h-[2px] w-full bg-gray-300 bottom-0 left-0 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          {(!isLoggedIn && !loggedIn) ? 
            <>
              <NavbarItem>
                <Link href="/login" legacyBehavior passHref>
                  <a className="hover:text-gray-300 transition duration-300">
                    Login
                    <span className="absolute block h-[2px] w-full bg-gray-300 bottom-0 left-0 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Button
                  as={Link}
                  href="/signup"
                  className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden text-lg font-medium text-white bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg shadow-lg group"
                >
                  <span className="absolute inset-0 w-full h-full transition-transform duration-300 transform scale-x-0 bg-gradient-to-r from-red-500 to-yellow-400 group-hover:scale-x-100"></span>
                  <span className="relative z-10">Sign Up</span>
                  <svg
                    className="absolute w-5 h-5 transition-transform duration-300 transform -translate-x-10 group-hover:translate-x-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m0 0l4 4m-4-4l4-4" />
                  </svg>
                </Button>
              </NavbarItem>
            </>
            : <>
                <NavbarItem>
                    <button onClick={()=>setLoggedIn(false)} className="hover:text-gray-300 px-4 rounded-lg py-2 text-white bg-red-500 transition duration-300">
                      Logout
                    </button>
                </NavbarItem>
            </>
          }
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          <NavbarMenuToggle onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="material-icons">menu</span>
          </NavbarMenuToggle>

          {isMenuOpen && (
            <div className="absolute top-3 right-0 left-0 bg-white shadow-lg z-50">
              {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item.name}-${index}`} onClick={() => setIsMenuOpen(false)}>
                  <Link href={item.href} legacyBehavior passHref>
                    <a className="block py-2 text-gray-800 hover:bg-gray-200 transition duration-300">
                      {item.name}
                    </a>
                  </Link>
                </NavbarMenuItem>
              ))}
            </div>
          )}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
