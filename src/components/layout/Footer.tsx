import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export function Footer() {
  return (
    <footer className="bg-dark text-cream pt-20 lg:pt-32 pb-10 border-t border-charcoal">
      <Container>
        <div className="flex flex-col gap-16 lg:gap-24">
          <div className="flex justify-center">
            <h2 className="font-heading text-4xl lg:text-6xl tracking-[0.3em]">SERONAA</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <div className="flex flex-col gap-6">
              <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-cream/50">SHOP</h3>
              <nav className="flex flex-col gap-4 text-sm">
                <Link href="/shop" className="text-cream/80 hover:text-cream transition-colors duration-300">All Jewellery</Link>
                <Link href="/shop/rings" className="text-cream/80 hover:text-cream transition-colors duration-300">Rings</Link>
                <Link href="/shop/earrings" className="text-cream/80 hover:text-cream transition-colors duration-300">Earrings</Link>
                <Link href="/shop/necklaces" className="text-cream/80 hover:text-cream transition-colors duration-300">Necklaces</Link>
                <Link href="/shop/bracelets" className="text-cream/80 hover:text-cream transition-colors duration-300">Bracelets</Link>
              </nav>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-cream/50">COLLECTIONS</h3>
              <nav className="flex flex-col gap-4 text-sm">
                <Link href="/collections/signature" className="text-cream/80 hover:text-cream transition-colors duration-300">Signature</Link>
                <Link href="/collections/bridal" className="text-cream/80 hover:text-cream transition-colors duration-300">Bridal</Link>
                <Link href="/collections/new-arrivals" className="text-cream/80 hover:text-cream transition-colors duration-300">New Arrivals</Link>
                <Link href="/collections/celestial" className="text-cream/80 hover:text-cream transition-colors duration-300">Celestial</Link>
              </nav>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-cream/50">THE HOUSE</h3>
              <nav className="flex flex-col gap-4 text-sm">
                <Link href="/about" className="text-cream/80 hover:text-cream transition-colors duration-300">Our Story</Link>
                <Link href="/lab-grown-diamonds" className="text-cream/80 hover:text-cream transition-colors duration-300">Lab-Grown Diamonds</Link>
                <Link href="/craftsmanship" className="text-cream/80 hover:text-cream transition-colors duration-300">Craftsmanship</Link>
                <Link href="/contact" className="text-cream/80 hover:text-cream transition-colors duration-300">Contact</Link>
              </nav>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-cream/50">CONNECT</h3>
              <nav className="flex flex-col gap-4 text-sm">
                <a href="#" className="text-cream/80 hover:text-cream transition-colors duration-300">Instagram</a>
                <a href="#" className="text-cream/80 hover:text-cream transition-colors duration-300">Pinterest</a>
                <a href="#" className="text-cream/80 hover:text-cream transition-colors duration-300">Email</a>
              </nav>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-10 border-t border-cream/10 text-xs text-cream/50 font-body">
            <p>&copy; {new Date().getFullYear()} Seronaa. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-cream transition-colors duration-300">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-cream transition-colors duration-300">Terms</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
