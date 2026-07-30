"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image/Video with Overlay */}
      <div className="absolute inset-0 z-0 bg-dark-chocolate">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-chocolate via-dark-chocolate/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="font-poppins text-golden-wheat text-sm md:text-base uppercase tracking-[0.3em] mb-6">
            Slow-Fermented • Gluten-Free • Vegan • Sugar-Free
          </p>
        </motion.div>

        <motion.h1 
          className="font-playfair text-5xl md:text-7xl lg:text-8xl text-warm-cream leading-tight mb-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {["Freshly", "Baked.", "Handcrafted", "Wellness.", "Made", "With", "Love."].map((word, i) => (
            <motion.span
              key={i}
              className={`inline-block mr-4 ${i === 3 || i === 6 ? 'block md:inline-block w-full md:w-auto' : ''} ${i === 3 ? 'text-golden-wheat italic' : ''}`}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 mt-4"
        >
          <button className="bg-golden-wheat hover:bg-white text-dark-chocolate px-10 py-4 font-poppins uppercase tracking-wider text-sm transition-colors flex items-center justify-center gap-2 group">
            Explore Menu
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border border-warm-cream/30 hover:border-golden-wheat text-warm-cream hover:text-golden-wheat px-10 py-4 font-poppins uppercase tracking-wider text-sm transition-colors glass-panel">
            Order Now
          </button>
        </motion.div>
      </div>

      {/* Floating Statistics Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-0 left-0 right-0 z-20 border-t border-warm-cream/10 bg-dark-chocolate/40 backdrop-blur-md"
      >
        <div className="container mx-auto px-6 py-6 overflow-x-auto no-scrollbar">
          <ul className="flex items-center justify-between gap-8 min-w-max md:min-w-0 font-poppins text-xs md:text-sm uppercase tracking-widest text-warm-cream/80">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-golden-wheat rounded-full" /> 100% Clean Ingredients</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-golden-wheat rounded-full" /> Made Fresh Daily</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-golden-wheat rounded-full" /> Slow Fermented</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-golden-wheat rounded-full" /> Small Batch Production</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
