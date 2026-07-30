"use client";

import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Heart, Sparkles, WheatOff, CandyOff, Droplets, Clock } from "lucide-react";

const promises = [
  { icon: WheatOff, title: "No Maida", desc: "100% whole grains and millets" },
  { icon: ShieldCheck, title: "No Preservatives", desc: "Pure, natural ingredients only" },
  { icon: Droplets, title: "No Processed Oils", desc: "Cold-pressed healthy fats" },
  { icon: Leaf, title: "Gluten Free", desc: "Safe for sensitive guts" },
  { icon: CandyOff, title: "Sugar Free", desc: "Naturally sweetened" },
  { icon: Heart, title: "100% Vegan Options", desc: "Plant-based goodness" },
  { icon: Sparkles, title: "Stone Ground Flour", desc: "Maximum nutrient retention" },
  { icon: Clock, title: "Fresh Batch", desc: "Baked only after you order" },
];

export default function PromiseSection() {
  return (
    <section className="py-32 bg-warm-cream relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-poppins text-soft-brown uppercase tracking-[0.2em] text-sm mb-4"
          >
            Our Promise
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl text-dark-chocolate"
          >
            Uncompromising <span className="text-golden-wheat italic">Quality</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {promises.map((promise, index) => {
            const Icon = promise.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-luxury-beige rounded-2xl p-8 border border-soft-brown/10 hover:border-golden-wheat/50 transition-colors shadow-sm hover:shadow-xl hover:shadow-golden-wheat/10 flex flex-col items-center text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-golden-wheat/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-16 h-16 rounded-full bg-warm-cream flex items-center justify-center mb-6 text-golden-wheat group-hover:scale-110 transition-transform duration-500 shadow-inner">
                  <Icon className="w-8 h-8 stroke-[1.5]" />
                </div>
                
                <h3 className="font-playfair text-xl text-dark-chocolate mb-3">{promise.title}</h3>
                <p className="font-poppins text-sm text-dark-chocolate/70 font-light">{promise.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
