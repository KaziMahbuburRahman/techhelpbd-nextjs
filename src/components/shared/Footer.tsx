

import { Button } from "@/components/ui/button";
import { Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Tech Help BD
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Building a better digital experience for everyone.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 text-gray-600 dark:text-gray-400">
            <Link href="/about" className="hover:text-gray-900 dark:hover:text-white">
              About Us
            </Link>
            {/* <Link href="/services" className="hover:text-gray-900 dark:hover:text-white">
              Services
            </Link> */}
            <Link href="/contact" className="hover:text-gray-900 dark:hover:text-white">
              Contact
            </Link>
            <Link href="https://techhelpbd.com/privacy-policy/" className="hover:text-gray-900 dark:hover:text-white">
              Privacy Policy
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Link
              href="https://twitter.com"
              aria-label="Twitter"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <Twitter size={24} />
            </Link>
            <Link
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <Instagram size={24} />
            </Link>
            <Link
              href="https://github.com"
              aria-label="Github"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <Github size={24} />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; 2024 TechHelpBD. All rights reserved.
          </p>

          <Button variant="outline" className="mt-4 md:mt-0 dark:bg-gray-900 dark:text-white">
            Subscribe
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;