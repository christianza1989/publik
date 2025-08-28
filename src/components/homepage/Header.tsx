// src/components/homepage/Header.tsx
"use client";
import { useState, useEffect } from 'react';
import { Link } from 'i18n/navigation';
import { Button, buttonVariants } from 'src/components/ui/button';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Globe, Sun, Moon, BookOpenCheck } from 'lucide-react';
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from 'ui/dropdown-menu';
import { usePathname } from 'next/navigation';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'lt', name: 'Lietuvių', flag: '🇱🇹' },
  { code: 'lv', name: 'Latviešu', flag: '🇱🇻' },
  { code: 'et', name: 'Eesti', flag: '🇪🇪' },
];

export const Header = () => {
  const { setTheme, theme } = useTheme();
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const currentLocale = languages.find(lang => pathname.startsWith(`/${lang.code}`))?.code || 'en';

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  
  const navLinks = [
    { href: '#how-it-works', label: 'Kaip veikia?' },
    { href: '#features', label: 'Privalumai' },
    { href: '#testimonials', label: 'Atsiliepimai' },
    { href: '#pricing', label: 'Kainodara' },
    { href: '#faq', label: 'DUK' },
];

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm border-b border-slate-800 dark"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white">
              <BookOpenCheck className="h-6 w-6 text-green-400" />
              <span>Publikuota.lt</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map(link => (
                  <a key={link.href} href={link.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">{link.label}</a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="text-white hover:bg-white/10 hover:text-white"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="text-white border-white/20 bg-transparent hover:bg-white/10 hover:text-white">
                    <Globe className="h-4 w-4 mr-2" />
                    {currentLocale.toUpperCase()}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {languages.map(lang => (
                    <DropdownMenuItem key={lang.code} asChild>
                       <Link href={pathname.replace(`/${currentLocale}`, `/${lang.code}`)} locale={lang.code} legacyBehavior={false}>
                        {lang.flag} {lang.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <a href="https://portal.publikuota.lt/lt/login" className={buttonVariants({ variant: "ghost", className: "text-white hover:bg-white/10 hover:text-white" })}>Prisijungti</a>
              <a href="https://portal.publikuota.lt/lt/signup" className={buttonVariants({ className: "bg-indigo-600 hover:bg-indigo-700" })}>Registruotis</a>
            </div>

            <div className="md:hidden">
                <Button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
                    {isMobileMenuOpen ? <X/> : <Menu />}
                </Button>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
};
