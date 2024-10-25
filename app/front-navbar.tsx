"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from "@nextui-org/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { ImDeviantart, ImDownload, ImHammer, ImNewspaper } from "react-icons/im";
import { useTheme } from "next-themes";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import Link from "next/link";
import Logo from "@/app/images/design-deck-logo.png";
import Image from 'next/image';

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
  download: <ImDownload />
};

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
  { name: "Profile", href: "/profile" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "WorkSpace", href: "/workspace" },
  { name: "System", href: "/system" },
  { name: "My Settings", href: "/settings" },
  { name: "Help & Feedback", href: "/help" },
  { name: "Log Out", href: "/logout" },
];


export default function NavbarComponent({ isLoggedIn, setIsMenuOpen, isMenuOpen }: NavbarComponentProps) {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Navbar isBordered className="bg-background">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <p className="font-bold text-inherit">DesignDesk</p>
        </NavbarBrand>
      </NavbarContent>

      {!isMobile && (
        <NavbarContent justify="center" className="hidden sm:flex gap-4">
          <NavbarItem>
            <Link href="/">Home</Link>
          </NavbarItem>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Features
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="Features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem key="autoscaling" startContent={icons.hammer}>
                DesignDesk Jam
              </DropdownItem>
              <DropdownItem key="usage_metrics" startContent={icons.dev}>
                Dev Mode
              </DropdownItem>
              <DropdownItem key="production_ready" startContent={icons.slide}>
                DesignDesk Slides
              </DropdownItem>
              <DropdownItem key="99_uptime" startContent={icons.download}>
                Download
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavbarItem>
            <Link href="/contact">Contact</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/faq">FAQ</Link>
          </NavbarItem>
        </NavbarContent>
      )}

      <NavbarContent justify="end">
        {!isLoggedIn && !isMobile && (
          <>
            <NavbarItem>
              <Button as={Link} color="primary" href="/login" variant="flat">
                Login
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="/signup" variant="solid">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        {isMobile && (
          <NavbarItem>
            <Button
              isIconOnly
              variant="light"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>

      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-gray-800 p-6 shadow-xl transition-transform duration-300 ease-in-out transform translate-x-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Menu</h2>
              <Button
                isIconOnly
                variant="light"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-900 dark:text-white"
              >
                <X size={24} />
              </Button>
            </div>
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary-400 transition-colors text-lg py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {!isLoggedIn && (
                <div className="pt-4 space-y-4">
                  <Button as={Link} color="primary" href="/login" variant="flat" fullWidth size="lg">
                    Login
                  </Button>
                  <Button as={Link} color="primary" href="/signup" variant="solid" fullWidth size="lg">
                    Sign Up
                  </Button>
                </div>
              )}
            </div>
          </div>

const NavbarComponent: React.FC<NavbarComponentProps> = ({ isLoggedIn, setIsMenuOpen, isMenuOpen }) => {
    const { systemTheme, theme } = useTheme();
    const currentTheme = theme === "dark" ? systemTheme : theme;
    const [darkMode, setDarkMode] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

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
                            <Image className="transition duration-300 ease-in-out" 
                            src={Logo.src} 
                            alt="DesignDeck Logo"  
                            width={276}
                            height={64}
                            style={{ marginLeft: '0', marginRight: '10px', background: 'none' }}  /> 
                            {/* Increased height and removed background */}
                         </NavbarBrand>
                    )}
                </NavbarContent>

                <NavbarContent justify="center" className="space-x-4"> {/* Adjusted spacing here */}
                    <NavbarItem className="flex items-center">
                        <Link href="/" legacyBehavior passHref>
                            <a className="relative inline-block text-lg text-white transition-all duration-300 hover:text-gray-300 group transform hover:scale-105">
                                Home
                                <span className="absolute block h-[2px] w-full bg-gray-300 bottom-0 left-0 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                            </a>

                        </Link>
                    </NavbarItem>
                    <NavbarItem  className="flex items-center">
                        <Dropdown backdrop="blur">
                            <DropdownTrigger>
                                <Button disableRipple endContent={icons.chevron} radius="sm" variant="light" style={{fontSize: '16px'}}>
                                    <p className="text-white">Open Menu</p>
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions">
                                <DropdownItem key="new" startContent={icons.hammer}>
                                    <Link href="/design-desk-jam"  legacyBehavior passHref>
                                    <a className={`relative inline-block text-md ${darkMode ? "text-white " : "text-neutral-600 "}  transition-all duration-300  group transform hover:scale-105`}>
                            DesignDesk Jam
                            <span className="absolute block h-[2px] w-full bg-neutral-600 dark:text-white bottom-0 left-0 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                        </a>
                                    </Link>
                                </DropdownItem>
                                <DropdownItem key="copy" startContent={icons.dev}>
                                    <Link href="/dev-mode"  legacyBehavior passHref>
                                    <a className={`relative inline-block text-md ${darkMode ? "text-white " : "text-neutral-600 "} transition-all duration-300  group transform hover:scale-105`}>
                            Dev Mode
                            <span className="absolute block h-[2px] w-full bg-neutral-600 dark:text-white bottom-0 left-0 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                        </a>
                                    </Link>
                                </DropdownItem>
                                <DropdownItem key="edit" startContent={icons.slide}>
                                    <Link href="/design-desk-slides"  legacyBehavior passHref>
                                    <a className={`relative inline-block text-md ${darkMode ? "text-white " : "text-neutral-600 "} transition-all duration-300  group transform hover:scale-105`}>
                            DesignDesk Slides
                            <span className="absolute block h-[2px] w-full bg-neutral-600 dark:text-white bottom-0 left-0 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                        </a>
                                    </Link>
                                </DropdownItem>
                                <DropdownItem key="delete" className="text-warning" startContent={icons.download}>
                                    <Link href="/download" legacyBehavior passHref>
                                    <a className={`relative inline-block text-md ${darkMode ? "text-white " : "text-neutral-600 "} transition-all duration-300  group transform hover:scale-105`}>
                            Download
                            <span className="absolute block h-[2px] w-full bg-neutral-600 dark:text-white bottom-0 left-0 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                        </a>
                                    </Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/contact"  legacyBehavior passHref>
                        <a className="relative inline-block text-lg text-white transition-all duration-300 hover:text-gray-300 group transform hover:scale-105">
                Contact
                <span className="absolute block h-[2px] w-full bg-gray-300 bottom-0 left-0 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/faq"  legacyBehavior passHref>
                        <a className="relative inline-block text-lg text-white transition-all duration-300 hover:text-gray-300 group transform hover:scale-105">
                FAQ
                <span className="absolute block h-[2px] w-full bg-gray-300 bottom-0 left-0 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent justify="end">
                    {!isLoggedIn && (
                        <>
                            <NavbarItem>
                                <Link href="/login"  legacyBehavior passHref>
                                <a className="hover:text-gray-300 transition duration-300">
                                    Login
                                    <span className="absolute block h-[2px] w-full bg-gray-300 bottom-0 left-0 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                                </a>
                                </Link>
                            </NavbarItem>
                            <NavbarItem>
                                {/* <Button as={Link} href="/signup" className="bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
                                     Sign Up
                                </Button> */}
                                 <Button 
                                    as={Link} 
                                    href="/signup" 
                                    className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden text-lg font-medium text-white bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg shadow-lg group">
                                    <span className="absolute inset-0 w-full h-full transition-transform duration-300 transform scale-x-0 bg-white group-hover:scale-x-100"></span>
                                    <span className="relative z-10">Sign Up</span>
            <svg 
            className="absolute w-5 h-5 transition-transform duration-300 transform -translate-x-10 group-hover:translate-x-0" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m0 0l4 4m-4-4l4-4" />
        </svg>
    </Button>
                            </NavbarItem>
                        </>
                    )}
                    <NavbarItem>
                        <ThemeSwitcher />
                    </NavbarItem>
                </NavbarContent>

                {/* Mobile Menu */}
                <NavbarMenu>
                    <NavbarMenuToggle onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span className="material-icons">menu</span>
                    </NavbarMenuToggle>

                    {isMenuOpen && (
                        <div className="absolute top-3 right-0 left-0 bg-white shadow-lg z-50">
                            {menuItems.map((item, index) => (
                                <NavbarMenuItem key={`${item.name}-${index}`} onClick={() => setIsMenuOpen(false)}>
                                    <Link href={item.href}  legacyBehavior passHref>
                                    <a className="block py-2 text-gray-800 hover:bg-gray-200 transition duration-300">{item.name}</a>
                                    </Link>
                                </NavbarMenuItem>
                            ))}
                        </div>
                    )}
                </NavbarMenu>
            </Navbar>

        </div>
      )}
    </Navbar>
  );
}