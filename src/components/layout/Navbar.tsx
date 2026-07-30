"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Menu", href: "#menu" },
    { name: "Our Story", href: "#story" },
    { name: "Gifting", href: "#gifting" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-luxury-beige/80 backdrop-blur-md shadow-sm border-b border-warm-cream/20"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center">
          <span className="font-playfair text-2xl font-bold text-dark-chocolate tracking-wide">
            Maa Ki Rasoi
          </span>
          <span className="font-poppins text-[10px] uppercase tracking-[0.2em] text-soft-brown">
            by Ekta
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-poppins text-sm uppercase tracking-wider text-dark-chocolate hover:text-soft-brown transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-soft-brown transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <button className="hidden md:block font-cormorant italic text-lg text-dark-chocolate hover:text-golden-wheat transition-colors">
            Order Now
          </button>
          
          <button className="relative text-dark-chocolate hover:text-soft-brown transition-colors">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-2 bg-golden-wheat text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-dark-chocolate"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-luxury-beige/95 backdrop-blur-lg border-b border-warm-cream shadow-lg py-8 px-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-playfair text-2xl text-dark-chocolate"
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-dark-chocolate text-warm-cream font-poppins text-sm uppercase tracking-widest py-4 mt-4 w-full">
              Order Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
