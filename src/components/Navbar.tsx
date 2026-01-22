import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, ChevronDown, Heart, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/realible-b-v" },
  { name: "Twitter", icon: Twitter, href: "https://x.com/realiblebv" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/realiblebv/" },
  { name: "Whatsapp", icon: MessageCircle, href: "https://wa.me/46736167376" },
];

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Process", href: "/process" },
  { name: "Impact", href: "/impact" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "Import", href: "/services/import" },
  { name: "Export", href: "/services/export" },
  { name: "Realible BV Food", href: "/services/food" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Green Header Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 text-sm">
            {/* Slogan - Left */}
            <p className="font-medium text-sm sm:text-base">Able to bring reality</p>
            
            {/* Social Icons - Right */}
            <div className="flex items-center gap-2 sm:gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-14 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
      >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 group flex-shrink-0">
            <img
              src="/logo_trans.png"
              alt="Realible Logo"
              className="h-10 sm:h-12 md:h-14 lg:h-20 w-auto transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm xl:text-base text-muted-foreground hover:text-primary font-medium transition-colors duration-200 whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm xl:text-base text-muted-foreground hover:text-primary font-medium transition-colors duration-200 whitespace-nowrap flex items-center gap-1 outline-none">
                Services
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
                {serviceLinks.map((link) => (
                  <DropdownMenuItem key={link.name} asChild>
                    <Link to={link.href} className="cursor-pointer">
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
            <Link
              to="/donate"
              className="w-9 h-9 xl:w-10 xl:h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors duration-200"
              aria-label="Donate to support our cause"
            >
              <Heart className="w-4 h-4 xl:w-5 xl:h-5 text-primary fill-primary/20" />
            </Link>
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
            <Link to="/contact">
              <Button size="default" className="bg-gradient-hero hover:opacity-90 text-sm xl:text-base px-4 xl:px-5">Get Started</Button>
            </Link>
          </div>

          {/* Tablet/Mobile actions */}
          <div className="lg:hidden flex items-center gap-2 flex-shrink-0">
            <Link
              to="/donate"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors duration-200"
              aria-label="Donate to support our cause"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-primary fill-primary/20" />
            </Link>
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
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-primary font-medium py-2 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              {/* Services in Mobile Menu */}
              <div className="flex flex-col gap-2">
                <span className="text-muted-foreground font-medium py-2">Services</span>
                {serviceLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground hover:text-primary font-medium py-1 pl-4 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <Link
                to="/donate"
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-primary font-medium py-2 transition-colors flex items-center gap-2"
              >
                <Heart className="w-4 h-4 text-primary fill-primary/20" />
                Donate
              </Link>
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <span className="text-sm text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>
              <Link to="/contact">
                <Button size="default" className="mt-2 w-full bg-gradient-hero hover:opacity-90">Get Started</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.nav>
    </>
  );
}
