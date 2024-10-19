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
    Link,
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
    "Profile",
    "Dashboard",
    "WorkSpace",
    "System",
    "My Settings",
    "Help & Feedback",
    "Log Out",
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
                        <Link href="/">Home</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Dropdown backdrop="blur">
                            <DropdownTrigger>
                                <Button disableRipple endContent={icons.chevron} radius="sm" variant="light">
                                    <p className="text-white">Open Menu</p>
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions">
                                <DropdownItem key="new" startContent={icons.hammer}>DesignDesk Jam</DropdownItem>
                                <DropdownItem key="copy" startContent={icons.dev}>Dev Mode</DropdownItem>
                                <DropdownItem key="edit" startContent={icons.slide}>DesignDesk Slides</DropdownItem>
                                <DropdownItem key="delete" className="text-warning" startContent={icons.download}>Download</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/">Contact</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/faq">FAQ</Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent justify="end">
                    {!isLoggedIn && (
                        <>
                            <NavbarItem>
                                <Link href="/login">Login</Link>
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
                                <NavbarMenuItem key={`${item}-${index}`} onClick={() => setIsMenuOpen(false)}>
                                    <Link
                                        className="w-full p-4 block text-center"
                                        color={index === menuItems.length - 1 ? "danger" : "foreground"}
                                        href="#"
                                        size="lg"
                                    >
                                        {item}
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
