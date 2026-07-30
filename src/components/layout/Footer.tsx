import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-chocolate text-warm-cream pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex flex-col">
              <span className="font-playfair text-3xl font-bold tracking-wide text-golden-wheat">
                Maa Ki Rasoi
              </span>
              <span className="font-poppins text-xs uppercase tracking-[0.2em] text-warm-cream/70">
                by Ekta
              </span>
            </Link>
            <p className="font-poppins text-sm text-warm-cream/80 leading-relaxed">
              Where Wellness Meets Taste. Artisan handcrafted breads, slow-fermented, gluten-free, and made with love in small batches.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-playfair text-xl text-golden-wheat">Quick Links</h4>
            <ul className="flex flex-col gap-3 font-poppins text-sm text-warm-cream/80">
              <li><Link href="#menu" className="hover:text-golden-wheat transition-colors">Our Menu</Link></li>
              <li><Link href="#story" className="hover:text-golden-wheat transition-colors">Our Story</Link></li>
              <li><Link href="#gifting" className="hover:text-golden-wheat transition-colors">Gift Hampers</Link></li>
              <li><Link href="#faq" className="hover:text-golden-wheat transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="font-playfair text-xl text-golden-wheat">Get in Touch</h4>
            <ul className="flex flex-col gap-4 font-poppins text-sm text-warm-cream/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-golden-wheat shrink-0" />
                <span>Available for delivery & pickup across the city</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-golden-wheat shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-golden-wheat shrink-0" />
                <span>hello@maakirasoi.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6">
            <h4 className="font-playfair text-xl text-golden-wheat">Newsletter</h4>
            <p className="font-poppins text-sm text-warm-cream/80">
              Subscribe to get updates on seasonal bakes and special offers.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-transparent border border-warm-cream/30 text-warm-cream px-4 py-2 font-poppins text-sm w-full focus:outline-none focus:border-golden-wheat transition-colors"
              />
              <button className="bg-golden-wheat text-dark-chocolate px-4 py-2 font-poppins text-sm font-medium hover:bg-white transition-colors">
                Join
              </button>
            </form>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-warm-cream/30 flex items-center justify-center text-warm-cream hover:bg-golden-wheat hover:text-dark-chocolate hover:border-golden-wheat transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-warm-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-poppins text-xs text-warm-cream/50">
          <p>© {new Date().getFullYear()} Maa Ki Rasoi by Ekta. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-warm-cream transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-warm-cream transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
