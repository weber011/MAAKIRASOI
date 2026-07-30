"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image/Video with Overlay */}
      <div className="absolute inset-0 z-0 bg-dark-chocolate overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 force-gpu"
        >
          <Image
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
            alt="Artisan bakery hero background"
            fill
            priority
            className="object-cover opacity-60 mix-blend-overlay"
            sizes="100vw"
            quality={90}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-chocolate via-dark-chocolate/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center pb-24 md:pb-32 mt-20 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="flex flex-col items-center mb-6 md:mb-8"
        >
          <h1 className="font-playfair text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] text-warm-cream font-bold tracking-wider leading-none drop-shadow-2xl">
            Maa Ki Rasoi
          </h1>
          <p className="font-poppins text-golden-wheat text-xs sm:text-sm md:text-lg uppercase tracking-[0.3em] md:tracking-[0.5em] mt-4 max-w-full">
            By Ekta
          </p>
        </motion.div>

        <motion.h2 
          className="font-playfair text-2xl md:text-4xl text-warm-cream/90 mb-8 max-w-4xl mx-auto font-light"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
          }}
        >
          {["Freshly", "Baked.", "Handcrafted", "Wellness."].map((word, i) => (
            <motion.span
              key={i}
              className={`inline-block mr-2 md:mr-3 ${i === 3 ? 'text-golden-wheat italic' : ''}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <button className="bg-golden-wheat hover:bg-white text-dark-chocolate w-full sm:w-auto min-h-[56px] px-8 font-poppins uppercase tracking-wider text-sm rounded-full transition-colors flex items-center justify-center gap-2 group force-gpu active:scale-95 shadow-lg shadow-dark-chocolate/20">
            Explore Menu
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border border-warm-cream/30 text-warm-cream w-full sm:w-auto min-h-[56px] px-8 font-poppins uppercase tracking-wider text-sm rounded-full transition-colors glass-panel active:scale-95 force-gpu">
            Order Now
          </button>
        </motion.div>
      </div>

      {/* Floating Statistics Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-0 left-0 right-0 z-20 border-t border-warm-cream/10 bg-dark-chocolate/60 backdrop-blur-md force-gpu"
      >
        <div className="container mx-auto px-4 py-4 md:py-6 overflow-x-auto no-scrollbar scroll-smooth">
          <ul className="flex items-center justify-between gap-6 md:gap-8 min-w-max font-poppins text-[10px] md:text-xs uppercase tracking-widest text-warm-cream/90">
            <li className="flex items-center gap-2 whitespace-nowrap"><span className="w-1.5 h-1.5 bg-golden-wheat rounded-full" /> 100% Clean</li>
            <li className="flex items-center gap-2 whitespace-nowrap"><span className="w-1.5 h-1.5 bg-golden-wheat rounded-full" /> Made Fresh</li>
            <li className="flex items-center gap-2 whitespace-nowrap"><span className="w-1.5 h-1.5 bg-golden-wheat rounded-full" /> Slow Fermented</li>
            <li className="flex items-center gap-2 whitespace-nowrap pr-4 md:pr-0"><span className="w-1.5 h-1.5 bg-golden-wheat rounded-full" /> Small Batch</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
