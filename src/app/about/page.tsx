'use client';

import { useEffect, useRef } from 'react';
import { Container } from '@/components/ui/Container';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { revealMask, staggerFadeIn, parallax, prefersReducedMotion } from '@/lib/utils/animations';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const originRef = useRef<HTMLDivElement>(null);
  const craftImageContainerRef = useRef<HTMLDivElement>(null);
  const craftImageRef = useRef<HTMLImageElement>(null);
  const craftTextRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Hero text stagger
      if (heroRef.current) {
        staggerFadeIn(heroRef.current, '.stagger-element', { stagger: 0.2, duration: 1.4 });
      }

      // Origin section — scrub text opacity on scroll
      if (originRef.current) {
        const paragraphs = originRef.current.querySelectorAll('.scrub-paragraph');
        paragraphs.forEach((p) => {
          gsap.fromTo(p,
            { autoAlpha: 0, y: 40 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: p,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      }

      // Craftsmanship image reveal
      if (craftImageContainerRef.current) {
        revealMask(craftImageContainerRef.current, { direction: 'left', duration: 1.6 });
      }
      if (craftImageRef.current) {
        parallax(craftImageRef.current, { speed: 0.12 });
      }
      if (craftTextRef.current) {
        staggerFadeIn(craftTextRef.current, '.stagger-element', { stagger: 0.15, duration: 1.2 });
      }

      // Vision section
      if (visionRef.current) {
        gsap.fromTo(visionRef.current,
          { autoAlpha: 0, scale: 0.96 },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 1.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: visionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-ivory">
      {/* ───────── Hero ───────── */}
      <section className="pt-[28vw] md:pt-[16vw] pb-[12vw] md:pb-[8vw] relative overflow-hidden">
        {/* Abstract floating orbs */}
        <div className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30vw] h-[30vw] bg-taupe/10 rounded-full blur-[100px] pointer-events-none" />

        <Container>
          <div ref={heroRef} className="max-w-4xl">
            <p className="stagger-element font-body text-xs tracking-[0.3em] uppercase text-taupe mb-6">
              Our Story
            </p>
            <h1 className="stagger-element font-heading text-6xl md:text-8xl lg:text-9xl text-charcoal font-light leading-[0.95] mb-10">
              The House<br />of Seronaa
            </h1>
            <p className="stagger-element font-body text-lg md:text-xl text-taupe max-w-2xl leading-relaxed font-light">
              Founded on the belief that luxury should be uncompromising in both beauty and ethics, Seronaa represents a new chapter in fine jewellery — where science meets artistry.
            </p>
          </div>
        </Container>
      </section>

      {/* ───────── Origin & Philosophy — editorial text scroll ───────── */}
      <section className="py-[12vw] md:py-[8vw] bg-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-taupe/20 to-transparent" />

        <Container>
          <div ref={originRef} className="max-w-3xl mx-auto space-y-16 md:space-y-24">
            {/* Origin */}
            <div>
              <p className="scrub-paragraph font-body text-xs tracking-[0.3em] uppercase text-gold mb-8">
                Origin
              </p>
              <p className="scrub-paragraph font-heading text-3xl md:text-5xl text-charcoal leading-[1.2] font-light">
                Seronaa was born with a singular vision: to redefine luxury jewellery for the modern era.
              </p>
              <p className="scrub-paragraph font-body text-lg text-taupe leading-relaxed mt-8 max-w-xl">
                By embracing the marvels of science, we create timeless pieces that honor the legacy of fine jewellery while looking toward the future. We believe that true brilliance should not compromise our principles.
              </p>
            </div>

            {/* Divider */}
            <div className="w-16 h-px bg-taupe/30 mx-auto" />

            {/* Philosophy */}
            <div>
              <p className="scrub-paragraph font-body text-xs tracking-[0.3em] uppercase text-gold mb-8">
                Philosophy
              </p>
              <p className="scrub-paragraph font-heading text-3xl md:text-5xl text-charcoal leading-[1.2] font-light">
                Modern luxury is conscious luxury. Beauty and responsibility are not opposing forces.
              </p>
              <p className="scrub-paragraph font-body text-lg text-taupe leading-relaxed mt-8 max-w-xl">
                We design for those who appreciate the finest quality and craftsmanship, and who also seek transparency and intention in everything they acquire.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ───────── Craftsmanship — offset image + text ───────── */}
      <section className="py-[14vw] md:py-[10vw] bg-ivory relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-center">
            {/* Image — spans 7 columns, offset */}
            <div ref={craftImageContainerRef} className="md:col-span-7 md:col-start-1">
              <div className="aspect-[4/5] md:aspect-[3/4] relative overflow-hidden shadow-2xl shadow-charcoal/5">
                <Image
                  ref={craftImageRef}
                  src="/images/craft_luxury_1.jpg"
                  alt="Seronaa Master Craftsmanship"
                  fill
                  className="object-cover scale-110"
                />
              </div>
            </div>

            {/* Text — overlaps the image on desktop */}
            <div
              ref={craftTextRef}
              className="md:col-span-6 md:col-start-7 md:-ml-12 bg-white/90 backdrop-blur-lg p-8 md:p-14 shadow-xl relative z-10"
            >
              <p className="stagger-element font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">
                Craftsmanship
              </p>
              <h2 className="stagger-element font-heading text-4xl md:text-5xl text-charcoal font-light leading-[1.1] mb-8">
                Where heritage<br />meets precision.
              </h2>
              <p className="stagger-element font-body text-taupe text-base md:text-lg leading-relaxed mb-6">
                Every Seronaa piece is designed and crafted with uncompromising precision. The rich Indian heritage of fine jewellery making meets cutting-edge technology. Our master artisans hand-set each diamond, ensuring that every facet catches the light flawlessly.
              </p>
              <p className="stagger-element font-body text-taupe text-base md:text-lg leading-relaxed">
                Our state-of-the-art CVD laboratories represent the pinnacle of diamond cultivation — a precise, controlled environment that allows us to grow diamonds of exceptional purity, combined with advanced cutting techniques for unmatched brilliance.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ───────── Vision — full-width statement ───────── */}
      <section className="py-[16vw] md:py-[12vw] bg-charcoal relative overflow-hidden">
        {/* Abstract accent */}
        <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

        <Container>
          <div ref={visionRef} className="max-w-4xl mx-auto text-center">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold/70 mb-10">
              Our Vision
            </p>
            <p className="font-heading text-3xl md:text-5xl lg:text-6xl text-white leading-[1.15] font-light">
              To become the world&apos;s most admired lab-grown diamond jewellery house, shaping the future of luxury with elegance and purpose.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
