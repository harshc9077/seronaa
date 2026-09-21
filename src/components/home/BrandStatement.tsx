'use client';

import { useEffect, useRef } from 'react';
import { Container } from '@/components/ui/Container';
import Image from 'next/image';
import { revealMask, parallax, staggerFadeIn } from '@/lib/utils/animations';

export function BrandStatement() {
  const textContainerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (textContainerRef.current) {
      staggerFadeIn(textContainerRef.current, '.stagger-element', { stagger: 0.15, duration: 1.2 });
    }
    if (imageContainerRef.current) {
      revealMask(imageContainerRef.current, { direction: 'up', duration: 1.5 });
    }
    if (imageRef.current) {
      parallax(imageRef.current, { speed: 0.15 });
    }
  }, []);

  return (
    <section className="bg-ivory py-[16vw] md:py-[10vw]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 items-center">
          <div ref={imageContainerRef} className="order-1 md:order-2 w-full">
            <div className="aspect-[3/4] bg-cream relative overflow-hidden shadow-2xl shadow-charcoal/5">
              <Image
                ref={imageRef}
                src="/images/brand_statement_1789488242004.jpg"
                alt="SERONAA Diamond Detail"
                fill
                className="object-cover scale-110"
              />
            </div>
          </div>
          <div ref={textContainerRef} className="order-2 md:order-1 flex flex-col gap-8 md:pr-12">
            <h2 className="stagger-element font-heading text-5xl md:text-7xl font-light text-charcoal leading-[1.1]">
              Jewellery,<br />reimagined.
            </h2>
            <div className="space-y-6 font-body text-taupe text-lg md:text-xl font-light leading-relaxed">
              <p className="stagger-element">
                At Seronaa, we believe that true luxury lies in conscious creation. Our lab-grown diamonds possess the exact physical, chemical, and optical properties as their mined counterparts.
              </p>
              <p className="stagger-element">
                Identical in every way that matters, different only in origin. We combine cutting-edge technology with time-honored Indian craftsmanship to create pieces of enduring beauty and uncompromising quality.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
