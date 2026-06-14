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
      <div className="container-custom flex h-14 items-center justify-between sm:h-16 lg:h-20">
        <Link href="#inicio" className="flex min-w-0 items-center gap-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-secondary to-accent sm:h-9 sm:w-9">
            <Zap className="h-4 w-4 text-white sm:h-5 sm:w-5" />
          </div>
          <div className="min-w-0">
            <span className="block truncate text-xs font-bold text-primary dark:text-white sm:text-sm lg:text-base">
              {siteConfig.brandName}
            </span>
            <span className="block truncate text-[9px] text-text-secondary dark:text-text-dark-secondary sm:text-[10px]">
              {siteConfig.brandTagline}
            </span>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-0.5 md:flex lg:gap-1"
          aria-label="Navegación principal"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-2 py-2 text-xs font-medium text-text-secondary transition-colors hover:bg-secondary/5 hover:text-secondary dark:text-text-dark-secondary dark:hover:bg-accent/10 dark:hover:text-accent lg:px-3 lg:text-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
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

          <Link href="#contacto" className="hidden md:block">
            <Button size="sm">Agendar consulta</Button>
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menú"
            aria-expanded={isMobileMenuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-primary md:hidden dark:border-gray-700 dark:text-white sm:h-10 sm:w-10"
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
            className="border-t border-gray-200 bg-white md:hidden dark:border-gray-700 dark:bg-primary"
          >
            <nav
              className="container-custom flex flex-col gap-1 py-4"
              aria-label="Menú móvil"
            >
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
