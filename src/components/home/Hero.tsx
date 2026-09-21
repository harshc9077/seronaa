'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '@/lib/utils/animations';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const reducedMotion = prefersReducedMotion();

    const ctx = gsap.context(() => {
      // Background slow zoom
      if (bgRef.current && !reducedMotion) {
        gsap.fromTo(bgRef.current,
          { scale: 1.15 },
          { scale: 1.0, duration: 2.5, ease: 'power2.out' }
        );
      }

      // Headline — clip-path reveal from bottom
      if (headlineRef.current) {
        if (reducedMotion) {
          gsap.set(headlineRef.current, { autoAlpha: 1, clipPath: 'inset(0% 0% 0% 0%)' });
        } else {
          gsap.fromTo(headlineRef.current,
            { autoAlpha: 1, clipPath: 'inset(100% 0% 0% 0%)' },
            { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, delay: 0.6, ease: 'power3.inOut' }
          );
        }
      }

      // Subline — simple fade
      if (sublineRef.current) {
        if (reducedMotion) {
          gsap.set(sublineRef.current, { autoAlpha: 1 });
        } else {
          gsap.fromTo(sublineRef.current,
            { autoAlpha: 0, y: 10 },
            { autoAlpha: 1, y: 0, duration: 1, delay: 1.4, ease: 'power2.out' }
          );
        }
      }

      // CTA buttons
      if (actionsRef.current) {
        if (reducedMotion) {
          gsap.set(actionsRef.current, { autoAlpha: 1 });
        } else {
          gsap.fromTo(actionsRef.current,
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.8, delay: 1.8, ease: 'power2.out' }
          );
        }
      }

      // Scroll indicator pulse
      if (scrollIndicatorRef.current && !reducedMotion) {
        gsap.fromTo(scrollIndicatorRef.current,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.6, delay: 2.4, ease: 'power2.out' }
        );
        gsap.to(scrollIndicatorRef.current, {
          y: 8,
          repeat: -1,
          yoyo: true,
          duration: 1.5,
          ease: 'sine.inOut',
          delay: 3,
        });
      }

      // Parallax — background moves slower than content on scroll
      if (bgRef.current && !reducedMotion) {
        gsap.to(bgRef.current, {
          y: '20%',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen flex items-end overflow-hidden bg-charcoal">
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 bg-charcoal"
      >
        <Image
          src="/images/hero_ring.jpg"
          alt="SERONAA Luxury Diamonds"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-[5vw] md:px-[6vw] pb-[12vh] md:pb-[10vh]">
        <div className="max-w-4xl">
          <h1
            ref={headlineRef}
            className="font-heading text-6xl md:text-8xl lg:text-9xl text-white font-light leading-[0.95] mb-6 opacity-0"
          >
            Brilliance,<br />Evolved.
          </h1>
          <p
            ref={sublineRef}
            className="font-body text-sm md:text-base text-white/60 tracking-[0.25em] uppercase mb-12 opacity-0 max-w-lg"
          >
            Lab-grown diamond jewellery, purely conceived.
          </p>
          <div
            ref={actionsRef}
            className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 opacity-0"
          >
            <Link href="/shop" passHref legacyBehavior>
              <Button as="a" variant="primary" className="bg-white text-charcoal hover:bg-white/90">
                SHOP THE COLLECTION
              </Button>
            </Link>
            <Link href="/lab-grown-diamonds" passHref legacyBehavior>
              <Button as="a" variant="ghost" className="border-b border-white/40 text-white pb-1 rounded-none hover:border-white transition-colors">
                DISCOVER LAB-GROWN
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-0 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] text-white/40 tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/20" />
      </div>
    </section>
  );
}
