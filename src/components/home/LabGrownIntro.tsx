'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { revealMask, parallax, staggerFadeIn } from '@/lib/utils/animations';

export function LabGrownIntro() {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageContainerRef.current) revealMask(imageContainerRef.current, { direction: 'down', duration: 1.5 });
    if (imageRef.current) parallax(imageRef.current, { speed: 0.1 });
    if (contentRef.current) staggerFadeIn(contentRef.current, '.stagger-element', { stagger: 0.15, duration: 1.2, delay: 0.2 });
  }, []);

  return (
    <section className="bg-cream py-[16vw] md:py-[12vw] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-ivory/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <Container>
        <div className="relative flex flex-col items-center">
          
          <div ref={imageContainerRef} className="w-full md:w-[80%] aspect-[4/3] md:aspect-[21/9] bg-dark relative overflow-hidden shadow-2xl">
            <Image
              ref={imageRef}
              src="/images/lab_grown_clean.jpg"
              alt="Lab Grown Diamond"
              fill
              className="object-cover scale-110"
            />
          </div>
          
          <div ref={contentRef} className="md:absolute md:bottom-[-4rem] md:right-[10%] w-full md:w-[60%] lg:w-[50%] bg-white/80 backdrop-blur-md border border-white p-8 md:p-12 shadow-xl flex flex-col items-start mt-[-2rem] md:mt-0 z-10">
            <h2 className="stagger-element font-heading text-4xl md:text-5xl text-charcoal mb-6 font-light">
              Real diamonds.<br />A different origin.
            </h2>
            <p className="stagger-element font-body text-taupe text-base md:text-lg mb-8 leading-relaxed font-light">
              Lab-grown diamonds are real diamonds. They are physically, chemically, and optically identical to mined diamonds. Grown in a highly controlled laboratory environment using advanced technology, they offer the exact same brilliance, fire, and durability without the environmental toll of traditional mining.
            </p>
            <div className="stagger-element">
              <Link href="/lab-grown-diamonds" passHref legacyBehavior>
                <Button as="a" variant="ghost" className="border-b border-charcoal/30 pb-1 rounded-none hover:border-charcoal transition-colors">
                  DISCOVER LAB-GROWN DIAMONDS
                </Button>
              </Link>
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
