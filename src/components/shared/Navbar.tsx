"use client"
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import NavbarClient from "./Navbar.client";
import NavbarMenuBtn from "./Navbar.menuBtn";
import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";

const Navbar = () => {
  const {toggleTheme} = useContext(ThemeContext)
  return (
    <header className={`shadow-md py-4 dark:bg-gray-900 dark:text-white`}>
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4">
        {/* logo */}

        <div className="text-xl font-bold">
          <Link href="/">Tech Help BD</Link>
        </div>

        {/* desktop menu */}
        <NavigationMenu className="hidden lg:flex ">
          <NavigationMenuList>
            <NavigationMenuItem className="flex space-x-8 items-center">
              <NavbarClient />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* color switcher and login button */}
        <div className="hidden lg:flex space-x-3">
          <div className="flex justify-center items-center space-x-3">
            <span>Dark Mode</span>
            <Switch onClick={toggleTheme} />
            {/* <Button variant="default">Login</Button> */}
          </div>
        </div>
        <div className="lg:hidden">
          <NavbarMenuBtn />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
