"use client";

import { motion } from "framer-motion";
import { Gift, Users, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="gifting" className="py-32 bg-dark-chocolate text-warm-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-poppins text-golden-wheat uppercase tracking-[0.2em] text-sm mb-4"
          >
            Special Occasions
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl"
          >
            Gifting & <span className="italic text-golden-wheat">Events</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gift Hampers */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative h-[600px] rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-dark-chocolate/40 group-hover:bg-dark-chocolate/20 transition-colors duration-500 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2040&auto=format&fit=crop" 
              alt="Luxury Gift Hampers" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end bg-gradient-to-t from-dark-chocolate via-dark-chocolate/60 to-transparent">
              <Gift className="w-10 h-10 text-golden-wheat mb-6" />
              <h3 className="font-playfair text-3xl md:text-4xl mb-4">Luxury Gift Hampers</h3>
              <p className="font-poppins text-warm-cream/80 font-light mb-8 max-w-md">
                Perfect for Birthdays, Anniversaries, Corporate Gifting, Festivals, and Wedding Return Gifts.
              </p>
              <button className="flex items-center gap-2 font-poppins uppercase tracking-widest text-sm hover:text-golden-wheat transition-colors w-fit pb-2 border-b border-golden-wheat">
                Inquire Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Party & Event Orders */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative h-[600px] rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-dark-chocolate/40 group-hover:bg-dark-chocolate/20 transition-colors duration-500 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1551105436-e8eeb055848e?q=80&w=2070&auto=format&fit=crop" 
              alt="Event Catering" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end bg-gradient-to-t from-dark-chocolate via-dark-chocolate/60 to-transparent">
              <Users className="w-10 h-10 text-golden-wheat mb-6" />
              <h3 className="font-playfair text-3xl md:text-4xl mb-4">Event Catering & Bulk Orders</h3>
              <p className="font-poppins text-warm-cream/80 font-light mb-8 max-w-md">
                Elevate your Family Gatherings, Corporate Events, High Teas, and Wedding Events with our artisan bakes.
              </p>
              <button className="flex items-center gap-2 font-poppins uppercase tracking-widest text-sm hover:text-golden-wheat transition-colors w-fit pb-2 border-b border-golden-wheat">
                Plan Your Event <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
