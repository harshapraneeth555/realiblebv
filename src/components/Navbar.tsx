import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Process", href: "#process" },
  { name: "Impact", href: "#impact" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 md:gap-3 group flex-shrink-0">
            <img
              src="/logo_trans.png"
              alt="Realible Logo"
              className="h-10 sm:h-12 md:h-14 lg:h-20 w-auto transition-opacity duration-300"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm xl:text-base text-muted-foreground hover:text-primary font-medium transition-colors duration-200 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 xl:w-10 xl:h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors duration-200"
              aria-label="Contact us on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 xl:w-5 xl:h-5 text-primary" />
            </a>
            <ThemeToggle />
            <Button size="default" className="bg-gradient-hero hover:opacity-90 text-sm xl:text-base px-4 xl:px-5">Get Started</Button>
          </div>

          {/* Tablet/Mobile actions */}
          <div className="lg:hidden flex items-center gap-2 flex-shrink-0">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors duration-200"
              aria-label="Contact us on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </a>
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-primary font-medium py-2 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <span className="text-sm text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>
              <Button size="default" className="mt-2 bg-gradient-hero hover:opacity-90">Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
