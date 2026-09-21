'use client';

import { useEffect, useRef } from 'react';
import { Container } from '@/components/ui/Container';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { revealMask, parallax, staggerFadeIn, prefersReducedMotion } from '@/lib/utils/animations';

gsap.registerPlugin(ScrollTrigger);

const CVD_STEPS = [
  'A thin diamond seed is placed in a specialized growth chamber.',
  'Carbon-rich gas is introduced into the chamber.',
  'The gas is heated to extreme temperatures, creating a plasma.',
  'Carbon atoms crystallize on the seed, layer by atom layer.',
  'Over several weeks, a rough diamond crystal grows.',
  'The rough is then cut and polished by master craftspeople.',
];

const FOUR_CS = [
  { title: 'Cut', desc: 'How well the diamond is shaped and faceted, determining its brilliance and fire.' },
  { title: 'Color', desc: 'Graded D (colorless) to Z. Seronaa exclusively uses D\u2013F color grades for maximum brilliance.' },
  { title: 'Clarity', desc: 'The presence of inclusions. Seronaa diamonds are meticulously selected for VS2 clarity and above.' },
  { title: 'Carat', desc: 'The weight and size of the diamond. Lab-grown diamonds offer larger carats for the same value.' },
];

const COMPARISON = [
  ['Chemical Composition', 'Pure Carbon', 'Pure Carbon'],
  ['Hardness', '10 (Mohs Scale)', '10 (Mohs Scale)'],
  ['Refractive Index', '2.42', '2.42'],
  ['Origin', 'Laboratory', 'Earth-Mined'],
  ['Time to Create', 'Weeks', 'Billions of Years'],
  ['Certification', 'GIA, IGI, etc.', 'GIA, IGI, etc.'],
];

export default function LabGrownDiamondsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const whatRef = useRef<HTMLDivElement>(null);
  const cvdImageContainerRef = useRef<HTMLDivElement>(null);
  const cvdImageRef = useRef<HTMLImageElement>(null);
  const cvdStepsRef = useRef<HTMLDivElement>(null);
  const fourCsRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (heroRef.current) {
        staggerFadeIn(heroRef.current, '.stagger-element', { stagger: 0.2, duration: 1.4 });
      }

      if (whatRef.current) {
        gsap.fromTo(whatRef.current,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1, y: 0, duration: 1.2, ease: 'power2.out',
            scrollTrigger: { trigger: whatRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        );
      }

      if (cvdImageContainerRef.current) {
        revealMask(cvdImageContainerRef.current, { direction: 'right', duration: 1.5 });
      }
      if (cvdImageRef.current) {
        parallax(cvdImageRef.current, { speed: 0.12 });
      }
      if (cvdStepsRef.current) {
        const items = cvdStepsRef.current.querySelectorAll('.cvd-step');
        items.forEach((item, i) => {
          gsap.fromTo(item,
            { autoAlpha: 0, x: 30 },
            {
              autoAlpha: 1, x: 0, duration: 0.8, delay: i * 0.1, ease: 'power2.out',
              scrollTrigger: { trigger: item, start: 'top 90%', toggleActions: 'play none none reverse' },
            }
          );
        });
      }

      if (fourCsRef.current) {
        staggerFadeIn(fourCsRef.current, '.four-c-card', { stagger: 0.12, duration: 1 });
      }

      if (tableRef.current) {
        gsap.fromTo(tableRef.current,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1, y: 0, duration: 1, ease: 'power2.out',
            scrollTrigger: { trigger: tableRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-ivory">
      {/* ───────── Hero ───────── */}
      <section className="pt-[28vw] md:pt-[16vw] pb-[14vw] md:pb-[10vw] relative overflow-hidden">
        <div className="absolute top-[5%] right-[-10%] w-[50vw] h-[50vw] bg-gold/8 rounded-full blur-[140px] pointer-events-none" />
        <Container>
          <div ref={heroRef} className="max-w-4xl">
            <p className="stagger-element font-body text-xs tracking-[0.3em] uppercase text-taupe mb-6">
              The Science of Brilliance
            </p>
            <h1 className="stagger-element font-heading text-6xl md:text-8xl lg:text-9xl text-charcoal font-light leading-[0.95] mb-8">
              Lab-Grown<br />Diamonds
            </h1>
            <p className="stagger-element font-body text-lg md:text-xl text-taupe max-w-2xl leading-relaxed font-light">
              Identical in every way that matters, different only in origin. Pure carbon, extraordinary brilliance, conscious creation.
            </p>
          </div>
        </Container>
      </section>

      {/* ───────── What Are They? ───────── */}
      <section className="py-[10vw] md:py-[7vw] bg-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-taupe/20 to-transparent" />
        <Container>
          <div ref={whatRef} className="max-w-3xl mx-auto text-center">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-8">What Are They?</p>
            <p className="font-heading text-2xl md:text-4xl text-charcoal leading-[1.3] font-light">
              Lab-grown diamonds are real diamonds with the same physical, chemical, and optical properties as mined diamonds. They are not simulants — they are pure carbon, crystallized in the isometric system, created in laboratories rather than extracted from the earth.
            </p>
          </div>
        </Container>
      </section>

      {/* ───────── CVD Process ───────── */}
      <section className="py-[12vw] md:py-[8vw] bg-ivory relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-center">
            <div ref={cvdImageContainerRef} className="md:col-span-6">
              <div className="aspect-[3/4] relative overflow-hidden shadow-2xl shadow-charcoal/5">
                <Image
                  ref={cvdImageRef}
                  src="/images/extra_15.jpg"
                  alt="CVD Diamond Growth Process"
                  fill
                  className="object-cover scale-110"
                />
              </div>
            </div>

            <div ref={cvdStepsRef} className="md:col-span-6 md:col-start-7 md:pl-16 space-y-1">
              <p className="cvd-step font-body text-xs tracking-[0.3em] uppercase text-gold mb-8">
                The CVD Process
              </p>
              {CVD_STEPS.map((step, i) => (
                <div key={i} className="cvd-step flex items-start py-4 border-b border-taupe/10">
                  <span className="font-heading text-2xl text-gold/40 mr-5 leading-none mt-px">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="font-body text-charcoal text-base leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ───────── The 4Cs ───────── */}
      <section className="py-[12vw] md:py-[8vw] bg-white relative">
        <Container>
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">Quality Standards</p>
            <h2 className="font-heading text-4xl md:text-6xl text-charcoal font-light">The 4Cs</h2>
          </div>
          <div ref={fourCsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUR_CS.map(({ title, desc }) => (
              <div
                key={title}
                className="four-c-card group p-8 border border-taupe/10 hover:border-gold/30 transition-colors duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
                <h3 className="font-heading text-3xl text-charcoal mb-4">{title}</h3>
                <p className="text-taupe text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ───────── Comparison Table ───────── */}
      <section className="py-[12vw] md:py-[8vw] bg-ivory">
        <Container>
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">Side by Side</p>
            <h2 className="font-heading text-4xl md:text-6xl text-charcoal font-light">Lab-Grown vs Mined</h2>
          </div>
          <div ref={tableRef} className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 border-b border-taupe/30 pb-4 text-[11px] tracking-[0.2em] uppercase text-taupe mb-2">
              <div>Attribute</div>
              <div>Lab-Grown</div>
              <div>Mined</div>
            </div>
            {COMPARISON.map(([attr, lab, mined], i) => (
              <div key={i} className="grid grid-cols-3 py-5 border-b border-taupe/10 text-charcoal text-sm md:text-base">
                <div className="font-medium">{attr}</div>
                <div className="text-taupe">{lab}</div>
                <div className="text-taupe">{mined}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
