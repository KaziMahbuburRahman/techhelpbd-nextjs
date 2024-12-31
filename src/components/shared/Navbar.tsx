import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

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
              <NavigationMenuLink href="/news" className={` hover:text-red-500`}>
                News
              </NavigationMenuLink>

              <div
               
                className={`hover:text-red-500`}
              >
                <NavigationMenuTrigger className="dark:bg-gray-900 dark:text-white">Sevices</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="text-gray-600 shadow-md rounded-md px-5 py-4 space-y-2">
                    <li>
                      <NavigationMenuLink href="/services/web">
                        Web Development
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/services/app">
                        Mobile Apps
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/services/seo">
                        SEO
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </div>

              <NavigationMenuLink href="/about" className={`hover:text-red-500`}>
                About
              </NavigationMenuLink>

              <NavigationMenuLink
                href="/contact"
                className={`hover:text-red-500`}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

      </nav>
    </header>
  );
};

export default Navbar;
