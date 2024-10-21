import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import Logo from "@/public/assets/design-deck-logo.png"; // Correct logo import
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
} from "@nextui-org/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from 'next/image';
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ImDeviantart, ImDownload, ImHammer, ImNewspaper } from "react-icons/im";

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
          <Image src={Logo} alt="DesignDeck Logo" width={100} height={50} />
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
            <DropdownMenu aria-label="Features">
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
        </div>
      )}
    </Navbar>
  );
}
