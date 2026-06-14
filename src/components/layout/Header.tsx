"use client";

import { Button } from "@/components/ui/Button";
import { cn, navLinks, siteConfig } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X, Zap } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 shadow-lg shadow-gray-200/50 backdrop-blur-md dark:bg-primary/95 dark:shadow-black/20"
          : "bg-transparent"
      )}
    >
      <div className="container-custom flex h-16 items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="#inicio" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-secondary to-accent">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <div className="hidden sm:block">
            <span className="text-sm font-bold text-primary dark:text-white lg:text-base">
              {siteConfig.brandName}
            </span>
            <span className="block text-[10px] text-text-secondary dark:text-text-dark-secondary">
              {siteConfig.brandTagline}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-secondary/5 hover:text-secondary dark:text-text-dark-secondary dark:hover:bg-accent/10 dark:hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Cambiar tema"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-text-secondary transition-colors hover:border-secondary hover:text-secondary dark:border-gray-700 dark:text-text-dark-secondary dark:hover:border-accent dark:hover:text-accent"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          )}

          <Link href="#contacto" className="hidden sm:block">
            <Button size="sm">Agendar consulta</Button>
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menú"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-primary lg:hidden dark:border-gray-700 dark:text-white"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-gray-200 bg-white lg:hidden dark:border-gray-700 dark:bg-primary"
          >
            <nav className="container-custom flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-secondary/5 hover:text-secondary dark:text-text-dark-secondary dark:hover:bg-accent/10 dark:hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="mt-2 w-full">Agendar consulta</Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
