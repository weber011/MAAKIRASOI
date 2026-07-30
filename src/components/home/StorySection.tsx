"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="story" ref={containerRef} className="py-32 bg-luxury-beige overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Images */}
          <div className="w-full lg:w-1/2 flex gap-6 h-[600px] relative">
            <motion.div style={{ y: y1 }} className="w-1/2 h-[80%] mt-[20%] relative rounded-t-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=2070&auto=format&fit=crop" 
                alt="Artisan baker kneading dough" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div style={{ y: y2 }} className="w-1/2 h-[90%] relative rounded-b-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1589367920969-ab8e050bfc54?q=80&w=1974&auto=format&fit=crop" 
                alt="Freshly baked artisan bread" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h4 className="font-poppins text-soft-brown uppercase tracking-[0.2em] text-sm mb-4">
                Our Story
              </h4>
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-dark-chocolate mb-8 leading-tight">
                Handmade baking with <span className="text-golden-wheat italic">passion.</span>
              </h2>
              
              <div className="space-y-6 font-poppins text-dark-chocolate/80 text-base md:text-lg leading-relaxed font-light">
                <p>
                  It started with a simple belief: bread should be nourishing, wholesome, and crafted with love. At Maa Ki Rasoi by Ekta, we've returned to the roots of artisan baking.
                </p>
                <p>
                  Every loaf is slow-fermented, allowing nature to do its work. We refuse to use commercial yeast, preservatives, or refined flour. Instead, we select only the finest organic grains and stone-ground flours.
                </p>
                <p className="font-medium text-dark-chocolate">
                  This isn't just baking. It's a commitment to your wellness, disguised as an indulgent, unforgettable taste.
                </p>
              </div>

              <div className="mt-12">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Signature_of_Ekta_Kapoor.svg" 
                  alt="Ekta Signature" 
                  className="h-12 opacity-80 mix-blend-multiply filter contrast-200 sepia"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
