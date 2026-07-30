"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section id="story" ref={containerRef} className="py-20 md:py-32 bg-luxury-beige overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start px-4 md:px-0">
            <div className="w-full max-w-md aspect-[3/4] relative rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl shadow-dark-chocolate/10 border-4 border-warm-cream/50">
              <Image 
                src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=2070&auto=format&fit=crop" 
                alt="Artisan baker kneading dough" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
              className="force-gpu"
            >
              <h4 className="font-poppins text-soft-brown uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
                Our Story
              </h4>
              <h2 className="font-playfair text-fluid-h2 text-dark-chocolate mb-6 md:mb-8 max-w-2xl">
                Handmade baking with <span className="text-golden-wheat italic">passion.</span>
              </h2>
              
              <div className="space-y-4 md:space-y-6 font-poppins text-dark-chocolate/80 text-fluid-p font-light">
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

              <div className="mt-10 md:mt-12 relative w-32 md:w-48 h-12 md:h-16">
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Signature_of_Ekta_Kapoor.svg" 
                  alt="Ekta Signature" 
                  fill
                  className="object-contain opacity-80 mix-blend-multiply filter contrast-200 sepia"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
