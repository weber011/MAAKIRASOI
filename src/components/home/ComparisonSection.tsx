"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisons = [
  { feature: "Flour Used", ordinary: "Refined Maida", premium: "Stone Ground, Millets & Whole Grains" },
  { feature: "Fermentation", ordinary: "Commercial Yeast (1-2 hrs)", premium: "Slow Fermented (18-24 hrs)" },
  { feature: "Additives", ordinary: "Chemicals & Preservatives", premium: "100% Natural, Zero Preservatives" },
  { feature: "Digestion", ordinary: "Bloating & Heavy", premium: "Light, Gut-Friendly & Easy to Digest" },
  { feature: "Nutrition", ordinary: "Empty Calories", premium: "Rich in Fiber, Protein & Nutrients" },
  { feature: "Freshness", ordinary: "Mass Produced, Sits on shelves", premium: "Baked fresh only after you order" },
];

export default function ComparisonSection() {
  return (
    <section className="py-32 bg-luxury-beige">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-poppins text-soft-brown uppercase tracking-[0.2em] text-sm mb-4"
          >
            The Difference
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl text-dark-chocolate"
          >
            Why Choose <span className="text-golden-wheat italic">Us?</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-warm-cream/50">
          {/* Header Row */}
          <div className="grid grid-cols-3 bg-dark-chocolate text-warm-cream p-6 md:p-8">
            <div className="font-playfair text-xl md:text-2xl font-semibold opacity-0">Feature</div>
            <div className="font-playfair text-xl md:text-2xl font-semibold text-center opacity-50">Ordinary Bread</div>
            <div className="font-playfair text-xl md:text-2xl font-semibold text-center text-golden-wheat">Maa Ki Rasoi</div>
          </div>

          {/* Comparison Rows */}
          <div className="flex flex-col">
            {comparisons.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`grid grid-cols-3 p-6 md:p-8 items-center ${
                  index !== comparisons.length - 1 ? 'border-b border-luxury-beige' : ''
                } hover:bg-warm-cream/50 transition-colors`}
              >
                <div className="font-poppins text-sm md:text-base font-medium text-dark-chocolate pr-4">
                  {item.feature}
                </div>
                <div className="font-poppins text-sm text-dark-chocolate/60 text-center flex flex-col items-center gap-2">
                  <X className="w-5 h-5 text-red-400" />
                  <span>{item.ordinary}</span>
                </div>
                <div className="font-poppins text-sm font-semibold text-olive-green text-center flex flex-col items-center gap-2">
                  <Check className="w-5 h-5 text-olive-green" />
                  <span>{item.premium}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
