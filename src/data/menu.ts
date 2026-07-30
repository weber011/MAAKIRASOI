export type Category = {
  id: string;
  name: string;
  products: Product[];
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isBestSeller?: boolean;
  badges?: string[];
};

const IMAGES = {
  multigrain: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=800&auto=format&fit=crop",
  focaccia: "https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?q=80&w=800&auto=format&fit=crop",
  buns: "https://images.unsplash.com/photo-1549231804-0352ef2e63dd?q=80&w=800&auto=format&fit=crop",
  sourdough: "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?q=80&w=800&auto=format&fit=crop",
  baguette: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?q=80&w=800&auto=format&fit=crop",
  croissant: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop",
  rustic: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
  bagel: "https://images.unsplash.com/photo-1585238246321-df621e25e985?q=80&w=800&auto=format&fit=crop",
};

const COMMON_BADGES = ["No Maida", "No Preservatives", "Freshly Baked"];
const VEGAN_BADGES = [...COMMON_BADGES, "100% Vegan"];
const GF_BADGES = [...COMMON_BADGES, "Gluten Free"];
const SOURDOUGH_BADGES = [...COMMON_BADGES, "Slow Fermented", "100% Vegan"];

export const menuData: Category[] = [
  {
    id: "wellness",
    name: "Artisan Wellness Breads",
    products: [
      { id: "w1", name: "Seeded Multigrain Bread", description: "Packed with organic seeds and whole grains.", price: 195, image: "/images/seeded_multigrain_bread_1785430085429.jpg", badges: VEGAN_BADGES },
      { id: "w2", name: "Makhana Wellness Bread", description: "Light, nutritious fox nut bread.", price: 195, image: "/images/makhana_wellness_bread_1785430099237.jpg", badges: GF_BADGES },
      { id: "w3", name: "Ancient Ragi Bread", description: "Rich in calcium and iron.", price: 195, image: "/images/ancient_ragi_bread_1785430111468.jpg", badges: GF_BADGES },
      { id: "w4", name: "Oats Harvest Bread", description: "Soft textured with the goodness of oats.", price: 195, image: "/images/oats_harvest_bread_1785430123479.jpg", badges: COMMON_BADGES },
      { id: "w5", name: "Bruschetta Bread", description: "Perfectly crusted for toppings.", price: 215, image: "/images/bruschetta_bread_1785430135762.jpg", isBestSeller: true, badges: VEGAN_BADGES },
      { id: "w6", name: "Hot Dog Bread", description: "Soft, fluffy and preservative-free.", price: 210, image: "/images/hot_dog_bread_1785430147139.jpg", badges: COMMON_BADGES },
      { id: "w7", name: "Protein Power Bread", description: "High protein loaf for fitness enthusiasts.", price: 205, image: "/images/protein_power_bread_1785430162255.jpg", isBestSeller: true, badges: [...GF_BADGES, "Sugar Free"] },
    ],
  },
  {
    id: "indulgent",
    name: "Indulgent Breads",
    products: [
      { id: "i1", name: "Golden Onion Swirls", description: "Savory swirls packed with caramelized onions.", price: 199, image: "/images/golden_onion_swirls_1785430190338.jpg", badges: VEGAN_BADGES },
      { id: "i2", name: "Herbed Olive Focaccia", description: "Classic Italian flatbread with premium olives.", price: 250, image: "/images/herbed_olive_focaccia_1785430202867.jpg", badges: VEGAN_BADGES },
      { id: "i3", name: "Pav Bun", description: "The classic Indian favorite, made healthy.", price: 190, image: "/images/pav_bun_1785430215218.jpg", badges: COMMON_BADGES },
      { id: "i4", name: "Desi Masala Millet Loaf", description: "Spiced millet loaf with a desi twist.", price: 260, image: "/images/desi_masala_millet_loaf_1785430226291.jpg", badges: GF_BADGES },
      { id: "i5", name: "Rustic Garlic Millet Loaf", description: "A fragrant garlic loaf packed with health benefits.", price: 210, image: "/images/rustic_garlic_millet_loaf_1785430237989.jpg", badges: GF_BADGES },
    ],
  },
  {
    id: "healthy-buns",
    name: "Healthy Buns",
    products: [
      { id: "h1", name: "Burger Buns (4 pcs)", description: "Soft, healthy buns for the perfect burger.", price: 199, image: "/images/burger_buns_1785430265163.jpg", badges: COMMON_BADGES },
    ],
  }
];
