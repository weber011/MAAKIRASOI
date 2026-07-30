import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Poppins } from "next/font/google";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maa Ki Rasoi | Premium Artisan Bakery",
  description: "Where Wellness Meets Taste. Slow Fermented, Gluten Free, Vegan options.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${poppins.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-luxury-beige text-dark-chocolate selection:bg-golden-wheat selection:text-white">
        <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
      </body>
    </html>
  );
}
