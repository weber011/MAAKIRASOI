"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MousePointerClick, CreditCard, ChefHat, Package, Truck } from "lucide-react";

const timeline = [
  { icon: MousePointerClick, title: "Choose Your Bake", desc: "Browse our premium artisan collection and select your favorites." },
  { icon: CreditCard, title: "Place Order", desc: "Seamless checkout process to confirm your request." },
  { icon: ChefHat, title: "Fresh Baking", desc: "We start baking your order fresh, ensuring maximum quality." },
  { icon: Package, title: "Eco-Packaging", desc: "Carefully packed in sustainable, premium packaging." },
  { icon: Truck, title: "Delivery", desc: "Delivered fresh to your doorstep." },
];

export default function OrderTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-32 bg-warm-cream">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-poppins text-soft-brown uppercase tracking-[0.2em] text-sm mb-4"
          >
            How It Works
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl text-dark-chocolate"
          >
            From Our Oven to <span className="text-golden-wheat italic">Your Home</span>
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Animated Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-dark-chocolate/10 md:-translate-x-1/2" />
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-8 md:left-1/2 top-0 w-[2px] bg-golden-wheat md:-translate-x-1/2 origin-top"
          />

          {timeline.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className="relative flex items-center mb-16 last:mb-0">
                {/* Center Icon */}
                <div className="absolute left-8 md:left-1/2 w-12 h-12 bg-luxury-beige border-2 border-golden-wheat rounded-full flex items-center justify-center -translate-x-1/2 z-10 shadow-lg">
                  <Icon className="w-5 h-5 text-dark-chocolate" />
                </div>

                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-warm-cream/50 hover:border-golden-wheat transition-colors hover:shadow-xl">
                    <h3 className="font-playfair text-xl text-dark-chocolate mb-2">{step.title}</h3>
                    <p className="font-poppins text-sm text-dark-chocolate/70 font-light">{step.desc}</p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
