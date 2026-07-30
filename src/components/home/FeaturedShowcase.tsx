"use client";

import { motion } from "framer-motion";
import { menuData } from "@/data/menu";
import { ArrowRight } from "lucide-react";

export default function FeaturedShowcase() {
  // Get all featured products from all categories
  const featuredProducts = menuData.flatMap(cat => cat.products).filter(p => p.isBestSeller).slice(0, 3);

  return (
    <section className="py-32 bg-dark-chocolate text-warm-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-poppins text-golden-wheat uppercase tracking-[0.2em] text-sm mb-4"
            >
              Chef's Selection
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-playfair text-4xl md:text-6xl text-white"
            >
              Signature <span className="text-golden-wheat italic">Bakes</span>
            </motion.h2>
          </div>
          
          <motion.button 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-2 font-poppins uppercase tracking-widest text-sm hover:text-golden-wheat transition-colors pb-2 border-b border-golden-wheat"
          >
            View All Signatures <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[500px] overflow-hidden rounded-xl mb-8">
                <div className="absolute inset-0 bg-dark-chocolate/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Floating Price Tag */}
                <div className="absolute top-6 right-6 z-20 bg-luxury-beige/90 backdrop-blur text-dark-chocolate px-4 py-2 rounded-full font-poppins font-semibold text-sm transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                  ₹{product.price}
                </div>
              </div>

              <h3 className="font-playfair text-3xl mb-3 group-hover:text-golden-wheat transition-colors">
                {product.name}
              </h3>
              <p className="font-poppins text-warm-cream/70 font-light line-clamp-2">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <button className="md:hidden mt-12 w-full flex items-center justify-center gap-2 font-poppins uppercase tracking-widest text-sm hover:text-golden-wheat transition-colors pb-4 border-b border-golden-wheat">
          View All Signatures <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
