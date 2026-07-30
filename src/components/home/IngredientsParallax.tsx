"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ingredients = [
  { name: "Ragi", desc: "Rich in calcium", speed: 1.2, top: "20%", left: "10%" },
  { name: "Millets", desc: "High fiber", speed: 0.8, top: "60%", left: "15%" },
  { name: "Makhana", desc: "Light & nutritious", speed: 1.5, top: "30%", left: "40%" },
  { name: "Quinoa", desc: "Complete protein", speed: 0.9, top: "70%", left: "45%" },
  { name: "Seeds", desc: "Omega 3 power", speed: 1.3, top: "20%", left: "70%" },
  { name: "Oats", desc: "Heart healthy", speed: 0.7, top: "50%", left: "80%" },
  { name: "Almond Flour", desc: "Low carb", speed: 1.1, top: "80%", left: "75%" },
  { name: "Stone Ground Flour", desc: "Maximum nutrients", speed: 1.4, top: "40%", left: "25%" },
];

export default function IngredientsParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="py-32 bg-olive-green text-warm-cream relative overflow-hidden min-h-screen flex items-center">
      {/* Background Texture/Overlay */}
      <div className="absolute inset-0 bg-dark-chocolate mix-blend-overlay opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.h4 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-poppins text-golden-wheat uppercase tracking-[0.2em] text-sm mb-4"
        >
          Nature's Best
        </motion.h4>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-playfair text-4xl md:text-6xl mb-8"
        >
          Clean, <span className="italic text-luxury-beige">Organic</span> Ingredients
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-poppins text-lg text-warm-cream/80 font-light"
        >
          Every ingredient is carefully sourced and selected for its nutritional profile. 
          We believe that true wellness starts with what nature provides, untouched by chemicals or preservatives.
        </motion.p>
      </div>

      {/* Floating Ingredients */}
      {ingredients.map((item, index) => {
        const y = useTransform(scrollYProgress, [0, 1], [0, -150 * item.speed]);
        
        return (
          <motion.div
            key={index}
            style={{ 
              y, 
              top: item.top, 
              left: item.left 
            }}
            className="absolute hidden md:flex flex-col items-center justify-center p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg"
          >
            <span className="font-playfair text-xl text-golden-wheat mb-1">{item.name}</span>
            <span className="font-poppins text-[10px] uppercase tracking-wider text-warm-cream">{item.desc}</span>
          </motion.div>
        );
      })}
    </section>
  );
}
