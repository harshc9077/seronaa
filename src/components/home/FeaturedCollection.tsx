'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { setupScrollReveal } from '@/lib/utils/animations';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const mockProducts = [
  { name: 'Eternal Radiance Solitaire', shape: 'Round Brilliant', price: 4200, handle: 'eternal-radiance-solitaire' },
  { name: 'Aurora Halo Ring', shape: 'Oval', price: 5800, handle: 'aurora-halo-ring' },
  { name: 'Luminous Drop Earrings', shape: 'Pear', price: 3600, handle: 'luminous-drop-earrings' },
  { name: 'Soleil Pendant', shape: 'Cushion', price: 4800, handle: 'soleil-pendant' }
];

export function FeaturedCollection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (headerRef.current) setupScrollReveal(headerRef.current, 'fadeInUp');
    
    productsRef.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(el,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-[16vw] md:py-[12vw] bg-white">
      <Container>
        <div ref={headerRef} className="mb-12 md:mb-20">
          <SectionHeading eyebrow="THE COLLECTION" title="Signature Pieces" align="center" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16">
          {/* First product: Large */}
          <div 
            ref={el => { productsRef.current[0] = el; }} 
            className="md:col-span-7 flex flex-col group"
          >
            <Link href={`/product/${mockProducts[0].handle}`} className="block relative aspect-[3/4] bg-cream mb-6 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-taupe/5 transition-opacity duration-500 group-hover:opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 rounded-full border-2 border-taupe/20 opacity-50" />
              </div>
            </Link>
            <div className="flex flex-col">
              <span className="text-taupe text-xs uppercase tracking-widest mb-1">{mockProducts[0].shape}</span>
              <h3 className="font-heading text-xl md:text-2xl text-charcoal mb-2">{mockProducts[0].name}</h3>
              <span className="font-body text-charcoal mb-4">${mockProducts[0].price.toLocaleString()}</span>
              <Link href={`/product/${mockProducts[0].handle}`} className="text-xs tracking-widest text-charcoal underline underline-offset-4 hover:text-gold transition-colors">VIEW PIECE</Link>
            </div>
          </div>

          {/* Second and Third products: Stacked */}
          <div className="md:col-span-5 flex flex-col gap-8 md:gap-12">
            {[mockProducts[1], mockProducts[2]].map((product, idx) => (
              <div 
                key={product.handle}
                ref={el => { productsRef.current[idx + 1] = el; }}
                className="flex flex-col group"
              >
                <Link href={`/product/${product.handle}`} className="block relative aspect-[4/5] bg-cream mb-4 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-taupe/5 transition-opacity duration-500 group-hover:opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-12 h-16 rounded-full border-2 border-taupe/20 opacity-50" />
                  </div>
                </Link>
                <div className="flex flex-col">
                  <span className="text-taupe text-xs uppercase tracking-widest mb-1">{product.shape}</span>
                  <h3 className="font-heading text-lg md:text-xl text-charcoal mb-1">{product.name}</h3>
                  <span className="font-body text-charcoal text-sm mb-3">${product.price.toLocaleString()}</span>
                  <Link href={`/product/${product.handle}`} className="text-xs tracking-widest text-charcoal underline underline-offset-4 hover:text-gold transition-colors">VIEW PIECE</Link>
                </div>
              </div>
            ))}
          </div>

          {/* Fourth product: Full width */}
          <div 
            ref={el => { productsRef.current[3] = el; }}
            className="md:col-span-12 flex flex-col group mt-4 md:mt-8"
          >
            <Link href={`/product/${mockProducts[3].handle}`} className="block relative aspect-[16/9] md:aspect-[2/1] bg-cream mb-6 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-taupe/5 transition-opacity duration-500 group-hover:opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-20 h-20 rounded-md border-2 border-taupe/20 opacity-50 rotate-45" />
              </div>
            </Link>
            <div className="flex flex-col items-center text-center">
              <span className="text-taupe text-xs uppercase tracking-widest mb-1">{mockProducts[3].shape}</span>
              <h3 className="font-heading text-xl md:text-2xl text-charcoal mb-2">{mockProducts[3].name}</h3>
              <span className="font-body text-charcoal mb-4">${mockProducts[3].price.toLocaleString()}</span>
              <Link href={`/product/${mockProducts[3].handle}`} className="text-xs tracking-widest text-charcoal underline underline-offset-4 hover:text-gold transition-colors">VIEW PIECE</Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/shop" className="text-sm font-body tracking-widest text-charcoal border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors">
            VIEW ALL PIECES
          </Link>
        </div>
      </Container>
    </section>
  );
}
