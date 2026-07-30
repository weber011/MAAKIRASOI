"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Instagram, MapPin } from "lucide-react";

export default function ContactSection() {
  const contactLinks = [
    {
      icon: <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />,
      title: "WhatsApp Us",
      desc: "For quick orders",
      href: "https://wa.me/919876543210",
      color: "hover:text-green-500",
    },
    {
      icon: <Phone className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Call Us",
      desc: "+91 98765 43210",
      href: "tel:+919876543210",
      color: "hover:text-blue-500",
    },
    {
      icon: <Instagram className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Instagram",
      desc: "@maakirasoi",
      href: "https://instagram.com/",
      color: "hover:text-pink-500",
    },
    {
      icon: <MapPin className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Visit Us",
      desc: "New Delhi, India",
      href: "https://maps.google.com",
      color: "hover:text-red-500",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-warm-cream relative">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-poppins text-soft-brown uppercase tracking-[0.2em] text-xs md:text-sm mb-4"
          >
            Get In Touch
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-fluid-h2 text-dark-chocolate"
          >
            We'd love to <span className="text-golden-wheat italic">hear from you.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {contactLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className={`flex flex-col items-center text-center p-6 md:p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-dark-chocolate/5 shadow-sm active:scale-95 transition-all force-gpu group ${link.color}`}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-luxury-beige flex items-center justify-center text-dark-chocolate mb-4 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                {link.icon}
              </div>
              <h3 className="font-playfair text-lg md:text-xl text-dark-chocolate mb-1">{link.title}</h3>
              <p className="font-poppins text-[10px] md:text-xs text-dark-chocolate/60 uppercase tracking-wider">{link.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
