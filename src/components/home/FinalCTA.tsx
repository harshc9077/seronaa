'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { parallax, staggerFadeIn } from '@/lib/utils/animations';

export function FinalCTA() {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (contentRef.current) staggerFadeIn(contentRef.current, '.stagger-element', { stagger: 0.2, duration: 1.2 });
    if (imageRef.current) parallax(imageRef.current, { speed: 0.2 });
  }, []);

  return (
    <section className="bg-charcoal text-white relative overflow-hidden flex flex-col items-center">
      <div className="w-full h-[70vh] relative overflow-hidden flex items-center justify-center">
        <Image
          ref={imageRef}
          src="/images/extra_8.jpg"
          alt="SERONAA Collection"
          fill
          className="object-cover opacity-50 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
        
        <div className="absolute inset-0 flex items-center justify-center z-10 w-full mt-[10vh]">
          <Container>
            <div ref={contentRef} className="flex flex-col items-center text-center">
              <h2 className="stagger-element font-heading text-5xl md:text-7xl lg:text-8xl text-white mb-10 font-light tracking-wide">
                Find your brilliance.
              </h2>
              <div className="stagger-element">
                <Link href="/shop" passHref legacyBehavior>
                  <Button as="a" variant="ghost" className="border-b border-white/40 pb-2 text-white hover:border-white transition-colors text-sm md:text-base rounded-none tracking-widest">
                    EXPLORE THE COLLECTION
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
