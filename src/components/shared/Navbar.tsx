import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import NavbarClient from "./Navbar.client";
import NavbarMenuBtn from "./Navbar.menuBtn";

const Navbar = () => {
  return (
    <header className="shadow-md py-4">
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
            <Switch />
            <Button variant="default">Login</Button>
          </div>
        </div>
        <div className="lg:hidden">
          <NavbarMenuBtn/>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
