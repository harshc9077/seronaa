'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { setupScrollReveal, revealMask } from '@/lib/utils/animations';

export function TheHouse() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) setupScrollReveal(textRef.current, 'fadeInUp');
    if (imageRef.current) revealMask(imageRef.current, { direction: 'down', duration: 1.5 });
  }, []);

  return (
    <section className="bg-white py-[16vw] md:py-[10vw]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div ref={textRef} className="order-2 md:order-1 flex flex-col gap-8 items-start pl-0 md:pl-12">
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-charcoal">
              The House of Seronaa.
            </h2>
            <div className="space-y-6 font-body text-taupe text-lg md:text-xl font-light leading-relaxed mb-4">
              <p>
                Founded on the belief that luxury should be uncompromising in both beauty and ethics, Seronaa represents a new chapter in fine jewellery.
              </p>
              <p>
                We are dedicated to crafting exceptional pieces that celebrate life&apos;s most meaningful moments, designed with intention and created with respect for the world we share.
              </p>
            </div>
            <Link href="/about" passHref legacyBehavior>
              <Button as="a" variant="ghost" className="mt-4 border-b border-charcoal/30 pb-1 rounded-none hover:border-charcoal transition-colors">
                DISCOVER OUR STORY
              </Button>
            </Link>
          </div>
          
          {/* Abstract Editorial UI instead of photo */}
          <div ref={imageRef} className="order-1 md:order-2 w-full flex justify-center">
            <div className="aspect-[4/5] w-full max-w-[500px] relative overflow-hidden bg-cream/50 rounded-tl-full rounded-tr-full shadow-2xl shadow-cream/50 border border-white/50 backdrop-blur-sm">
              <div className="absolute top-[-10%] left-[-20%] w-[70%] h-[70%] bg-gradient-to-br from-gold/30 to-transparent rounded-full mix-blend-multiply filter blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] bg-gradient-to-tl from-taupe/20 to-transparent rounded-full mix-blend-multiply filter blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
              <div className="absolute inset-0 border border-white/40 rounded-tl-full rounded-tr-full m-4 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-heading text-6xl text-charcoal/10 tracking-[0.3em] rotate-[-90deg] uppercase whitespace-nowrap">SERONAA</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
