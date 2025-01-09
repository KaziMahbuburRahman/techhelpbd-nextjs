import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ThemeProvider } from "@/context/themeContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "TechHelpBD - Technology Based Knowledge Sharing Site",
  description: "Tech Help BD is one of the best technology based knowledge sharing site in Bangladesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
      <ThemeProvider>
      <Navbar/>
        <main className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {children}
        
        </main>
        <Footer/>
      </ThemeProvider>
      </body>
    </html>
  );
}
