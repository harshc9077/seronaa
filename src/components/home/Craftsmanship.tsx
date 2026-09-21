'use client';

import { useEffect, useRef } from 'react';
import { Container } from '@/components/ui/Container';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { revealMask, parallax, prefersReducedMotion } from '@/lib/utils/animations';

gsap.registerPlugin(ScrollTrigger);

export function Craftsmanship() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (imageContainerRef.current) {
        revealMask(imageContainerRef.current, { direction: 'up', duration: 1.6 });
      }
      if (imageRef.current) {
        parallax(imageRef.current, { speed: 0.15 });
      }

      // Scrub heading — it translates up as you scroll through the section
      if (headingRef.current) {
        gsap.fromTo(headingRef.current,
          { autoAlpha: 0, y: 60 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (bodyRef.current) {
        gsap.fromTo(bodyRef.current,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            delay: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bodyRef.current,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-ivory pb-[16vw] md:pb-[10vw] relative overflow-hidden">
      {/* Abstract orb accent */}
      <div className="absolute bottom-0 left-[-15%] w-[40vw] h-[40vw] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div
        ref={imageContainerRef}
        className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden relative mb-16 md:mb-24 bg-charcoal"
      >
        <div
          ref={imageRef}
          className="absolute top-[-20%] left-0 right-0 bottom-[-20%] bg-charcoal"
        >
          <Image
            src="/images/craft_luxury_2.jpg"
            alt="SERONAA Craftsmanship"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <Container>
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <h2
            ref={headingRef}
            className="font-heading text-5xl md:text-7xl text-charcoal mb-8 font-light leading-[1.05]"
          >
            India meets tomorrow.
          </h2>
          <p
            ref={bodyRef}
            className="font-body text-taupe text-base md:text-lg leading-relaxed font-light max-w-2xl"
          >
            Rooted in India&apos;s rich heritage of fine jewellery making, we bring generations of masterful craftsmanship to the modern era of lab-grown diamonds. Every piece is meticulously crafted by artisans who understand that perfection takes time, blending traditional techniques with cutting-edge diamond technology to create heirlooms for the future.
          </p>
        </div>
      </Container>
    </section>
  );
}
