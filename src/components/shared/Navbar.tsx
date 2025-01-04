"use client"
import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { AiOutlineMenu } from "react-icons/ai";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname()
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
              <Link
                href="/news"
                className={pathname==='/news'? "text-red-500" : "hover:text-red-500"}
              >
                News
              </Link>

              <div className={pathname==='/services'? "text-red-500" : "hover:text-red-500"}>
                <NavigationMenuTrigger className="dark:bg-gray-900 dark:text-white">
                  Sevices
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="text-gray-600 shadow-md rounded-md px-5 py-4 space-y-2">
                    <li>
                      <Link href="/services/web">
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/app">
                        Mobile Apps
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/seo">
                        SEO
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </div>

              <Link
                href="/about"
                className={pathname==='/about'? "text-red-500" : "hover:text-red-500"}
              >
                About
              </Link>

              <Link
                href="/contact"
                className={pathname==='/contact'? "text-red-500" : "hover:text-red-500"}
              >
                Contact
              </Link>
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
          <Button variant={"default"}>
            <AiOutlineMenu size={24} />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
