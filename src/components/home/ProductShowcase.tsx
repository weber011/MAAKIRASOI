"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuData, Product } from "@/data/menu";
import { Heart, ShoppingBag, ArrowRight } from "lucide-react";

const FILTERS = [
  { label: "All", id: "all" },
  { label: "Wellness Breads", id: "wellness" },
  { label: "Indulgent Breads", id: "indulgent" },
  { label: "Healthy Buns", id: "healthy-buns" },
  { label: "Best Sellers", id: "best-sellers" },
  { label: "Gift Hampers", id: "gift-hampers" },
];

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState("all");

  const getFilteredProducts = () => {
    if (activeTab === "all") {
      return menuData.flatMap(cat => cat.products);
    }
    if (activeTab === "best-sellers") {
      return menuData.flatMap(cat => cat.products).filter(p => p.isBestSeller);
    }
    const category = menuData.find(cat => cat.id === activeTab);
    return category ? category.products : [];
  };

  const handleTabChange = (id: string) => {
    if (id === "gift-hampers") {
      const element = document.getElementById("gift-hampers-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }
    setActiveTab(id);
  };

  const products = getFilteredProducts();

  return (
    <section id="menu" className="py-32 bg-luxury-beige relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-poppins text-soft-brown uppercase tracking-[0.2em] text-sm mb-4"
          >
            Explore Our Creations
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl md:text-6xl text-dark-chocolate mb-10"
          >
            The Premium <span className="text-golden-wheat italic">Collection</span>
          </motion.h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => handleTabChange(filter.id)}
                className={`font-poppins text-xs md:text-sm uppercase tracking-wider px-6 py-3 transition-all duration-300 rounded-full border ${
                  activeTab === filter.id && filter.id !== "gift-hampers"
                    ? "bg-dark-chocolate text-warm-cream border-dark-chocolate shadow-lg shadow-dark-chocolate/20"
                    : "bg-transparent text-dark-chocolate border-dark-chocolate/20 hover:border-golden-wheat hover:text-golden-wheat"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 min-h-[600px] content-start"
        >
          <AnimatePresence mode="popLayout">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Luxurious Gift Hampers Section */}
      <GiftHampersSection />

      {/* Full-width CTA Banner */}
      <div className="w-full mt-24 bg-dark-chocolate relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 py-24 relative z-10 text-center flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-6xl text-warm-cream leading-tight mb-8"
          >
            Handcrafted with Love. <br/><span className="text-golden-wheat italic">Freshly Baked for You.</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <button className="bg-golden-wheat hover:bg-white text-dark-chocolate px-10 py-4 font-poppins uppercase tracking-wider text-sm font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Order on WhatsApp
            </button>
            <button className="border border-warm-cream/30 hover:border-golden-wheat text-warm-cream hover:text-golden-wheat px-10 py-4 font-poppins uppercase tracking-wider text-sm transition-all glass-panel hover:-translate-y-1">
              Explore Collection
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group relative bg-white/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-golden-wheat/10 transition-all duration-500 border border-white/50 hover:border-golden-wheat flex flex-col h-full"
    >
      {/* Image Container with Hover Zoom */}
      <div className="relative h-[280px] overflow-hidden bg-warm-cream w-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        
        {/* Badges Overlay */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {product.isBestSeller && (
            <span className="bg-golden-wheat text-dark-chocolate text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded shadow-sm">
              Best Seller
            </span>
          )}
        </div>
        
        <div className="absolute top-4 right-4 z-10">
          <button className="bg-white/70 backdrop-blur-md text-dark-chocolate p-2 rounded-full hover:bg-golden-wheat hover:text-white transition-all shadow-sm">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3 gap-4">
          <h3 className="font-playfair text-2xl text-dark-chocolate leading-tight">
            {product.name}
          </h3>
          <span className="font-poppins text-xl font-semibold text-soft-brown shrink-0">
            ₹{product.price}
          </span>
        </div>
        
        <p className="font-poppins text-sm text-dark-chocolate/70 mb-6 font-light">
          {product.description}
        </p>

        {/* Premium Badges */}
        {product.badges && product.badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8 mt-auto">
            {product.badges.map((badge, i) => (
              <span key={i} className="text-[9px] font-poppins uppercase tracking-wider bg-dark-chocolate/5 text-dark-chocolate/80 border border-dark-chocolate/10 px-2 py-1 rounded">
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Order Button */}
        <button className="w-full mt-auto py-4 bg-transparent border border-dark-chocolate text-dark-chocolate font-poppins text-sm uppercase tracking-widest hover:bg-dark-chocolate hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn rounded">
          <ShoppingBag className="w-4 h-4 group-hover/btn:-translate-y-1 transition-transform" />
          Order Now
        </button>
      </div>
    </motion.div>
  );
}

function GiftHampersSection() {
  const hampers = [
    "Birthday Hampers",
    "Anniversary Gifts",
    "Corporate Hampers",
    "Party Orders",
    "Kitty Party Hampers",
    "Custom Gift Boxes"
  ];

  return (
    <div id="gift-hampers-section" className="container mx-auto px-6 mt-32">
      <div className="bg-warm-cream rounded-3xl p-8 md:p-16 relative overflow-hidden border border-golden-wheat/20 shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-golden-wheat/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-soft-brown/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
          
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2040&auto=format&fit=crop" 
                alt="Luxurious Gift Hampers"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-chocolate/80 via-transparent to-transparent"></div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-poppins text-soft-brown uppercase tracking-[0.2em] text-sm mb-4"
            >
              Gifting Collection
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-playfair text-4xl md:text-5xl text-dark-chocolate mb-8"
            >
              Luxurious <span className="text-golden-wheat italic">Gift Hampers</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4 mb-10"
            >
              {hampers.map((hamper, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-golden-wheat"></div>
                  <span className="font-poppins text-sm text-dark-chocolate/80">{hamper}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-dark-chocolate text-warm-cream px-10 py-4 font-poppins uppercase tracking-wider text-sm hover:bg-soft-brown transition-colors w-fit flex items-center gap-2 rounded shadow-lg shadow-dark-chocolate/20"
            >
              Customize Your Hamper <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
