"use client"
import Link from 'next/link'
import React from 'react'
import { NavigationMenuContent, NavigationMenuTrigger } from '../ui/navigation-menu'
import { usePathname } from 'next/navigation'


const NavbarClient = () => {
    
    const pathname = usePathname();

  return (
    <>
    <Link href="/news" className={pathname === '/news' ? "text-red-500" : "hover:text-red-500"}>
      News
    </Link>
    {/* <div className={pathname === '/services' ? "text-red-500" : "hover:text-red-500"}>
      <NavigationMenuTrigger className="dark:bg-gray-900 dark:text-white">
        Services
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="text-gray-600 shadow-md rounded-md px-5 py-4 space-y-2">
          <li>
            <Link href="/services/web">Web Development</Link>
          </li>
          <li>
            <Link href="/services/app">Mobile Apps</Link>
          </li>
          <li>
            <Link href="/services/seo">SEO</Link>
          </li>
        </ul>
      </NavigationMenuContent>
    </div> */}
    <Link href="/about" className={pathname === '/about' ? "text-red-500" : "hover:text-red-500"}>
      About
    </Link>
    <Link href="/contact" className={pathname === '/contact' ? "text-red-500" : "hover:text-red-500"}>
      Contact
    </Link>
  </>
  )
}

export default NavbarClient