// NavbarComponent.tsx
import React, { useEffect, useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Button,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem
} from "@nextui-org/react";
import { ChevronDown } from "@/public/assets/ChevronDown";
import { ImDeviantart, ImDownload, ImHammer, ImNewspaper } from "react-icons/im";
import { useTheme } from "next-themes";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import Link from "next/link";

// Define props interface
interface NavbarComponentProps {
    isLoggedIn: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isMenuOpen: boolean;
}

const icons = {
    chevron: <ChevronDown fill="white" size={16} height={undefined} width={undefined} />,
    hammer: <ImHammer />,
    dev: <ImDeviantart />,
    slide: <ImNewspaper />,
    download: <ImDownload />
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
        <div className="fixed top-0 left-0 right-0 z-50 text-white">
            <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="bg-neutral-900 text-white">

                <NavbarContent justify="start">
                    {!isMobile && (
                        <NavbarBrand>
                            <p><b>DesignDesk</b></p>
                        </NavbarBrand>
                    )}
                </NavbarContent>

                <NavbarContent justify="center">
                    <NavbarItem>
                        <Link href="/" passHref>
                            Home
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Dropdown backdrop="blur">
                            <DropdownTrigger>
                                <Button disableRipple endContent={icons.chevron} radius="sm" variant="light">
                                    <p className="text-white">Open Menu</p>
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions">
                                <DropdownItem key="new" startContent={icons.hammer}>
                                    <Link href="/design-desk-jam" passHref>
                                        DesignDesk Jam
                                    </Link>
                                </DropdownItem>
                                <DropdownItem key="copy" startContent={icons.dev}>
                                    <Link href="/dev-mode" passHref>
                                        Dev Mode
                                    </Link>
                                </DropdownItem>
                                <DropdownItem key="edit" startContent={icons.slide}>
                                    <Link href="/design-desk-slides" passHref>
                                        DesignDesk Slides
                                    </Link>
                                </DropdownItem>
                                <DropdownItem key="delete" className="text-warning" startContent={icons.download}>
                                    <Link href="/download" passHref>
                                        Download
                                    </Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/contact" passHref>
                            Contact
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/faq" passHref>
                            FAQ
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent justify="end">
                    {!isLoggedIn && (
                        <>
                            <NavbarItem>
                                <Link href="/login" passHref>
                                    Login
                                </Link>
                            </NavbarItem>
                            <NavbarItem>
                                <Button as={Link} href="/signup">
                                    Sign Up
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
                                    <Link href={item.href} passHref>
                                        {item.name}
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
