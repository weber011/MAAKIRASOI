"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuData, Product } from "@/data/menu";
import { Heart, ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";

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
        const y = element.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      return;
    }
    setActiveTab(id);
  };

  const products = getFilteredProducts();

  return (
    <section id="menu" className="py-20 md:py-32 bg-luxury-beige relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-poppins text-soft-brown uppercase tracking-[0.2em] text-xs md:text-sm mb-4"
          >
            Explore Our Creations
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-fluid-h2 text-dark-chocolate mb-8 md:mb-10"
          >
            The Premium <span className="text-golden-wheat italic">Collection</span>
          </motion.h2>

          {/* Swipeable Filter Buttons on Mobile */}
          <div className="flex overflow-x-auto no-scrollbar md:flex-wrap justify-start md:justify-center gap-3 max-w-5xl mx-auto pb-4 px-2 -mx-2 snap-x">
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => handleTabChange(filter.id)}
                className={`snap-center shrink-0 font-poppins text-[10px] md:text-xs uppercase tracking-wider px-5 py-3 md:px-6 min-h-[48px] flex items-center justify-center transition-all duration-300 rounded-full border force-gpu active:scale-95 ${
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
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-12 min-h-[600px] content-start"
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
      <div className="w-full mt-20 md:mt-24 bg-dark-chocolate relative overflow-hidden force-gpu">
        <Image 
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
          alt="Bakery background"
          fill
          className="object-cover opacity-10 mix-blend-overlay"
        />
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 text-center flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-fluid-h2 text-warm-cream leading-tight mb-8 max-w-3xl"
          >
            Handcrafted with Love. <br/><span className="text-golden-wheat italic">Freshly Baked for You.</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button className="bg-golden-wheat hover:bg-white text-dark-chocolate px-8 min-h-[56px] w-full sm:w-auto rounded-full font-poppins uppercase tracking-wider text-sm font-semibold transition-all shadow-lg active:scale-95 force-gpu flex items-center justify-center">
              Order on WhatsApp
            </button>
            <button className="border border-warm-cream/30 text-warm-cream px-8 min-h-[56px] w-full sm:w-auto rounded-full font-poppins uppercase tracking-wider text-sm transition-all glass-panel active:scale-95 force-gpu flex items-center justify-center">
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
      className="group relative bg-white/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-golden-wheat/10 transition-all duration-500 border border-white/50 hover:border-golden-wheat flex flex-col h-full force-gpu"
    >
      {/* Image Container */}
      <div className="relative h-[250px] md:h-[280px] overflow-hidden bg-warm-cream w-full force-gpu">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} className="w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </motion.div>
        
        {/* Badges Overlay */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {product.isBestSeller && (
            <span className="bg-golden-wheat text-dark-chocolate text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded shadow-sm">
              Best Seller
            </span>
          )}
        </div>
        
        <div className="absolute top-4 right-4 z-10">
          <button className="bg-white/70 backdrop-blur-md text-dark-chocolate w-10 h-10 flex items-center justify-center rounded-full active:scale-90 active:bg-golden-wheat active:text-white lg:hover:bg-golden-wheat lg:hover:text-white transition-all shadow-sm force-gpu">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2 gap-4">
          <h3 className="font-playfair text-xl md:text-2xl text-dark-chocolate leading-tight">
            {product.name}
          </h3>
          <span className="font-poppins text-lg md:text-xl font-semibold text-soft-brown shrink-0">
            ₹{product.price}
          </span>
        </div>
        
        <p className="font-poppins text-[13px] md:text-sm text-dark-chocolate/70 mb-6 font-light">
          {product.description}
        </p>

        {/* Premium Badges */}
        {product.badges && product.badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {product.badges.map((badge, i) => (
              <span key={i} className="text-[9px] font-poppins uppercase tracking-wider bg-dark-chocolate/5 text-dark-chocolate/80 border border-dark-chocolate/10 px-2 py-1 rounded">
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Order Button */}
        <button className="w-full mt-auto min-h-[48px] bg-transparent border border-dark-chocolate text-dark-chocolate font-poppins text-xs md:text-sm uppercase tracking-widest active:scale-[0.98] lg:hover:bg-dark-chocolate lg:hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn rounded force-gpu">
          <ShoppingBag className="w-4 h-4 lg:group-hover/btn:-translate-y-1 transition-transform" />
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
    <div id="gift-hampers-section" className="container mx-auto px-4 md:px-6 mt-20 md:mt-32">
      <div className="bg-warm-cream rounded-3xl p-6 sm:p-8 md:p-16 relative overflow-hidden border border-golden-wheat/20 shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-golden-wheat/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-soft-brown/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center relative z-10">
          
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl force-gpu"
            >
              <Image 
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2040&auto=format&fit=crop" 
                alt="Luxurious Gift Hampers"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-chocolate/80 via-transparent to-transparent"></div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-poppins text-soft-brown uppercase tracking-[0.2em] text-xs md:text-sm mb-4"
            >
              Gifting Collection
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-playfair text-fluid-h2 text-dark-chocolate mb-6 md:mb-8"
            >
              Luxurious <span className="text-golden-wheat italic">Gift Hampers</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 md:mb-10"
            >
              {hampers.map((hamper, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-golden-wheat shrink-0"></div>
                  <span className="font-poppins text-[13px] md:text-sm text-dark-chocolate/80">{hamper}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-dark-chocolate text-warm-cream w-full sm:w-auto px-8 min-h-[56px] rounded-full font-poppins uppercase tracking-wider text-sm active:scale-95 transition-transform force-gpu flex items-center justify-center gap-2 shadow-lg shadow-dark-chocolate/20"
            >
              Customize Your Hamper <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
