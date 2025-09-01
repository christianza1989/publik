// --- PRADĖK KOPIJUOTI NUO ČIA ---
// Failas: src/components/homepage/Header.tsx

"use client";
import { useState, useEffect } from 'react';
import Link from "next/link";
import { Button, buttonVariants } from 'src/components/ui/button';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, BookOpenCheck } from 'lucide-react';
import { useTheme } from "next-themes";

export const Header = () => {
  const { setTheme, theme } = useTheme();
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setIsMobileMenuOpen(false); // Automatiškai uždaryti meniu slenkant žemyn
    } else {
      setHidden(false);
    }
  });

  // Efektas, kuris neleidžia slinkti puslapiui, kai meniu atidarytas
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Išvalymo funkcija, kuri atstato stilių, jei komponentas būtų sunaikintas
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);
  
  const navLinks = [
    { href: '#how-it-works', label: 'Kaip veikia?' },
    { href: '#features', label: 'Privalumai' },
    { href: '#pricing', label: 'Kainodara' },
    { href: '#faq', label: 'DUK' },
];

  const MobileMenu = () => (
    <motion.div
      key="mobile-menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-slate-900 p-6 flex flex-col"
      >
        <div className="flex justify-between items-center mb-10">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white" onClick={() => setIsMobileMenuOpen(false)}>
            <BookOpenCheck className="h-6 w-6 text-green-400" />
            <span>Publikuota.lt</span>
          </Link>
          <Button onClick={() => setIsMobileMenuOpen(false)} variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
            <X />
          </Button>
        </div>
        
        <nav className="flex flex-col items-center gap-6 flex-grow">
          {navLinks.map(link => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        <div className="flex flex-col gap-4 mt-10">
          <div className="flex items-center justify-center gap-2">
            <a href="https://portal.publikuota.lt/lt/login" onClick={() => setIsMobileMenuOpen(false)} className={buttonVariants({ variant: "ghost", className: "text-white hover:bg-white/10 hover:text-white w-full" })}>Prisijungti</a>
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
          </div>
          <a href="https://portal.publikuota.lt/lt/signup" onClick={() => setIsMobileMenuOpen(false)} className={buttonVariants({ className: "bg-indigo-600 hover:bg-indigo-700 w-full" })}>Registruotis</a>
        </div>
      </motion.div>
    </motion.div>
  );

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

      <AnimatePresence>
        {isMobileMenuOpen && <MobileMenu />}
      </AnimatePresence>
    </>
  );
};
