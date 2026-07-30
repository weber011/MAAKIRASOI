"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if we should show background (scrolled past 50px)
      setIsScrolled(currentScrollY > 50);
      
      // Hide on scroll down, show on scroll up (mobile & desktop momentum scroll friendly)
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Menu", href: "#menu" },
    { name: "Our Story", href: "#story" },
    { name: "Gifting", href: "#gifting" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        } ${
          isScrolled
            ? "py-4 bg-luxury-beige/90 backdrop-blur-md shadow-sm border-b border-warm-cream/20"
            : "py-4 md:py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-center">
            <span className="font-playfair text-xl md:text-2xl font-bold text-dark-chocolate tracking-wide">
              Maa Ki Rasoi
            </span>
            <span className="font-poppins text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-soft-brown">
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
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-soft-brown transition-all duration-300 group-hover:w-full force-gpu"></span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-6">
            <button className="hidden md:block font-cormorant italic text-lg text-dark-chocolate hover:text-golden-wheat transition-colors">
              Order Now
            </button>
            
            <button className="relative text-dark-chocolate hover:text-soft-brown transition-colors p-2 min-h-[48px] min-w-[48px] md:min-h-0 md:min-w-0 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-2 right-2 md:-top-1 md:-right-2 bg-golden-wheat text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile Menu Toggle - Large touch target */}
            <button
              className="md:hidden text-dark-chocolate min-h-[48px] min-w-[48px] flex items-center justify-center relative z-[60]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Fullscreen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[55] bg-luxury-beige/95 backdrop-blur-xl flex flex-col justify-center items-center h-[100dvh] force-gpu"
          >
            <div className="flex flex-col items-center gap-8 w-full px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-playfair text-4xl text-dark-chocolate tracking-wide min-h-[48px] flex items-center"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="w-full max-w-sm mt-8"
              >
                <button className="bg-dark-chocolate text-warm-cream font-poppins text-sm uppercase tracking-widest py-4 w-full rounded-full min-h-[56px] active:scale-95 transition-transform force-gpu shadow-lg shadow-dark-chocolate/20">
                  Order Now
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
