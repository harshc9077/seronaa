'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import Image from 'next/image';
import { cn } from '@/lib/utils/cn';
import { setupScrollReveal } from '@/lib/utils/animations';

interface ShapeEntry {
  id: string;
  name: string;
  desc: string;
  viewBox: string;
  path: React.ReactNode;
}

const shapes: ShapeEntry[] = [
  {
    id: 'ROUND',
    name: 'ROUND',
    desc: 'The most brilliant of all diamond shapes. 58 facets of pure fire and light, creating maximum scintillation.',
    viewBox: '0 0 100 100',
    path: (
      <>
        <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="1.2"/>
        <circle cx="50" cy="50" r="24" stroke="currentColor" strokeWidth="0.8"/>
        {[0,45,90,135,180,225,270,315].map((a,i) => { const r=(a*Math.PI)/180; return <line key={i} x1={50+24*Math.cos(r)} y1={50+24*Math.sin(r)} x2={50+44*Math.cos(r)} y2={50+44*Math.sin(r)} stroke="currentColor" strokeWidth="0.7"/>; })}
        {[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5].map((a,i) => { const r=(a*Math.PI)/180; return <line key={i+8} x1={50+24*Math.cos(r)} y1={50+24*Math.sin(r)} x2={50+44*Math.cos(r)} y2={50+44*Math.sin(r)} stroke="currentColor" strokeWidth="0.7"/>; })}
      </>
    ),
  },
  {
    id: 'OVAL',
    name: 'OVAL',
    desc: 'An elongated silhouette that flatters the finger with exceptional brilliance and a larger appearance.',
    viewBox: '0 0 80 110',
    path: (
      <>
        <ellipse cx="40" cy="55" rx="36" ry="50" stroke="currentColor" strokeWidth="1.2"/>
        <ellipse cx="40" cy="55" rx="18" ry="26" stroke="currentColor" strokeWidth="0.8"/>
        {[0,45,90,135,180,225,270,315].map((a,i) => { const r=(a*Math.PI)/180; return <line key={i} x1={40+18*Math.cos(r)} y1={55+26*Math.sin(r)} x2={40+36*Math.cos(r)} y2={55+50*Math.sin(r)} stroke="currentColor" strokeWidth="0.7"/>; })}
        {[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5].map((a,i) => { const r=(a*Math.PI)/180; return <line key={i+8} x1={40+18*Math.cos(r)} y1={55+26*Math.sin(r)} x2={40+36*Math.cos(r)} y2={55+50*Math.sin(r)} stroke="currentColor" strokeWidth="0.7"/>; })}
      </>
    ),
  },
  {
    id: 'EMERALD',
    name: 'EMERALD',
    desc: 'A hall-of-mirrors effect through step-cut facets, creating deep, elegant flashes of pure white light.',
    viewBox: '0 0 80 110',
    path: (
      <>
        <polygon points="14,6 66,6 74,14 74,96 66,104 14,104 6,96 6,14" stroke="currentColor" strokeWidth="1.2"/>
        <rect x="20" y="20" width="40" height="70" stroke="currentColor" strokeWidth="0.8"/>
        <rect x="13" y="13" width="54" height="84" stroke="currentColor" strokeWidth="0.6"/>
        <line x1="14" y1="6" x2="20" y2="20" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="66" y1="6" x2="60" y2="20" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="74" y1="14" x2="67" y2="20" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="74" y1="96" x2="60" y2="90" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="66" y1="104" x2="60" y2="90" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="14" y1="104" x2="20" y2="90" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="6" y1="96" x2="13" y2="90" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="6" y1="14" x2="13" y2="20" stroke="currentColor" strokeWidth="0.7"/>
      </>
    ),
  },
  {
    id: 'PEAR',
    name: 'PEAR',
    desc: 'A teardrop of light. Graceful and distinctive, worn with the point toward the heart.',
    viewBox: '0 0 80 120',
    path: (
      <>
        <path d="M40,6 C60,6 74,22 74,42 C74,68 57,92 40,114 C23,92 6,68 6,42 C6,22 20,6 40,6 Z" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M40,24 C53,24 62,34 62,46 C62,64 52,82 40,96 C28,82 18,64 18,46 C18,34 27,24 40,24 Z" stroke="currentColor" strokeWidth="0.8"/>
        <line x1="40" y1="6" x2="40" y2="24" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="6" y1="42" x2="18" y2="46" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="74" y1="42" x2="62" y2="46" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="13" y1="24" x2="23" y2="32" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="67" y1="24" x2="57" y2="32" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="11" y1="60" x2="22" y2="62" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="69" y1="60" x2="58" y2="62" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="20" y1="80" x2="29" y2="78" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="60" y1="80" x2="51" y2="78" stroke="currentColor" strokeWidth="0.7"/>
      </>
    ),
  },
  {
    id: 'MARQUISE',
    name: 'MARQUISE',
    desc: 'An eye-shaped cut inspired by the smile of the Marquise de Pompadour, maximising carat weight.',
    viewBox: '0 0 130 60',
    path: (
      <>
        <path d="M8,30 C8,30 40,4 65,4 C90,4 122,30 122,30 C122,30 90,56 65,56 C40,56 8,30 8,30 Z" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M28,30 C28,30 44,18 65,18 C86,18 102,30 102,30 C102,30 86,42 65,42 C44,42 28,30 28,30 Z" stroke="currentColor" strokeWidth="0.8"/>
        <line x1="8" y1="30" x2="28" y2="30" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="122" y1="30" x2="102" y2="30" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="65" y1="4" x2="65" y2="18" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="65" y1="56" x2="65" y2="42" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="25" y1="13" x2="36" y2="22" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="105" y1="13" x2="94" y2="22" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="25" y1="47" x2="36" y2="38" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="105" y1="47" x2="94" y2="38" stroke="currentColor" strokeWidth="0.7"/>
      </>
    ),
  },
  {
    id: 'CUSHION',
    name: 'CUSHION',
    desc: 'Soft, rounded corners with large facets that enhance clarity and produce a pillow-like silhouette.',
    viewBox: '0 0 100 100',
    path: (
      <>
        <rect x="8" y="8" width="84" height="84" rx="20" stroke="currentColor" strokeWidth="1.2"/>
        <rect x="24" y="24" width="52" height="52" rx="8" stroke="currentColor" strokeWidth="0.8"/>
        <line x1="19" y1="15" x2="28" y2="27" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="81" y1="15" x2="72" y2="27" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="85" y1="19" x2="72" y2="27" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="85" y1="81" x2="72" y2="73" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="81" y1="85" x2="72" y2="73" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="19" y1="85" x2="28" y2="73" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="15" y1="81" x2="28" y2="73" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="15" y1="19" x2="28" y2="27" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="50" y1="8" x2="50" y2="24" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="92" y1="50" x2="76" y2="50" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="50" y1="92" x2="50" y2="76" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="8" y1="50" x2="24" y2="50" stroke="currentColor" strokeWidth="0.7"/>
      </>
    ),
  },
  {
    id: 'RADIANT',
    name: 'RADIANT',
    desc: "Rectangular brilliance — the perfect marriage of the emerald shape and the round brilliant's fire.",
    viewBox: '0 0 80 110',
    path: (
      <>
        <polygon points="15,5 65,5 75,15 75,95 65,105 15,105 5,95 5,15" stroke="currentColor" strokeWidth="1.2"/>
        <rect x="20" y="22" width="40" height="66" stroke="currentColor" strokeWidth="0.8"/>
        <line x1="15" y1="5" x2="20" y2="22" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="65" y1="5" x2="60" y2="22" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="75" y1="15" x2="60" y2="22" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="75" y1="95" x2="60" y2="88" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="65" y1="105" x2="60" y2="88" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="15" y1="105" x2="20" y2="88" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="5" y1="95" x2="20" y2="88" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="5" y1="15" x2="20" y2="22" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="40" y1="5" x2="40" y2="22" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="75" y1="55" x2="60" y2="55" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="40" y1="105" x2="40" y2="88" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="5" y1="55" x2="20" y2="55" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="20" y1="22" x2="40" y2="55" stroke="currentColor" strokeWidth="0.4"/>
        <line x1="60" y1="22" x2="40" y2="55" stroke="currentColor" strokeWidth="0.4"/>
        <line x1="60" y1="88" x2="40" y2="55" stroke="currentColor" strokeWidth="0.4"/>
        <line x1="20" y1="88" x2="40" y2="55" stroke="currentColor" strokeWidth="0.4"/>
      </>
    ),
  },
  {
    id: 'PRINCESS',
    name: 'PRINCESS',
    desc: 'A modern square silhouette with exceptional brilliance and razor-sharp, contemporary edges.',
    viewBox: '0 0 100 100',
    path: (
      <>
        <rect x="8" y="8" width="84" height="84" stroke="currentColor" strokeWidth="1.2"/>
        <rect x="24" y="24" width="52" height="52" stroke="currentColor" strokeWidth="0.8"/>
        <line x1="8" y1="8" x2="24" y2="24" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="92" y1="8" x2="76" y2="24" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="92" y1="92" x2="76" y2="76" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="8" y1="92" x2="24" y2="76" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="50" y1="8" x2="50" y2="24" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="92" y1="50" x2="76" y2="50" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="50" y1="92" x2="50" y2="76" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="8" y1="50" x2="24" y2="50" stroke="currentColor" strokeWidth="0.7"/>
        <line x1="24" y1="24" x2="76" y2="76" stroke="currentColor" strokeWidth="0.4"/>
        <line x1="76" y1="24" x2="24" y2="76" stroke="currentColor" strokeWidth="0.4"/>
        <line x1="50" y1="24" x2="24" y2="50" stroke="currentColor" strokeWidth="0.4"/>
        <line x1="50" y1="24" x2="76" y2="50" stroke="currentColor" strokeWidth="0.4"/>
        <line x1="50" y1="76" x2="24" y2="50" stroke="currentColor" strokeWidth="0.4"/>
        <line x1="50" y1="76" x2="76" y2="50" stroke="currentColor" strokeWidth="0.4"/>
      </>
    ),
  },
];

export function DiamondShapes() {
  const [activeShape, setActiveShape] = useState(shapes[0]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (sectionRef.current) setupScrollReveal(sectionRef.current, 'fadeInUp');
  }, []);

  const handleShapeChange = (shape: ShapeEntry) => {
    if (shape.id === activeShape.id) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveShape(shape);
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <section ref={sectionRef} className="py-[16vw] md:py-[12vw] bg-white">
      <Container>
        <h2 className="font-heading text-3xl md:text-5xl text-charcoal text-center mb-12 md:mb-16 font-light">
          Every shape tells a story.
        </h2>

        {/* Shape selector */}
        <div className="flex overflow-x-auto hide-scrollbar gap-4 md:gap-8 justify-start md:justify-center mb-16 pb-6 border-b border-cream">
          {shapes.map((shape) => (
            <button
              key={shape.id}
              onClick={() => handleShapeChange(shape)}
              className={cn(
                "flex flex-col items-center min-w-[64px] gap-3 transition-all duration-300 group",
                activeShape.id === shape.id ? "text-charcoal" : "text-taupe/50 hover:text-taupe"
              )}
            >
              <div className="h-9 w-9 flex items-center justify-center">
                <svg
                  viewBox={shape.viewBox}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  {shape.path}
                </svg>
              </div>
              <span className={cn(
                "text-[9px] tracking-[0.15em] uppercase font-body relative transition-colors duration-300",
              )}>
                {shape.name}
                {activeShape.id === shape.id && (
                  <span className="absolute -bottom-4 left-0 right-0 h-px bg-charcoal" />
                )}
              </span>
            </button>
          ))}
        </div>

        {/* Featured display */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
          {/* Large SVG */}
          <div className={cn(
            "flex-shrink-0 w-52 h-52 md:w-64 md:h-64 text-charcoal transition-all duration-300",
            isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
          )}>
            <svg
              viewBox={activeShape.viewBox}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {activeShape.path}
            </svg>
          </div>

          <div className={cn(
            "flex flex-col items-center md:items-start text-center md:text-left transition-opacity duration-300",
            isTransitioning ? "opacity-0" : "opacity-100"
          )}>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-taupe mb-4">The Cut</p>
            <h3 className="font-heading text-5xl md:text-6xl text-charcoal mb-5 font-light">{activeShape.name}</h3>
            <div className="w-8 h-px bg-taupe/30 mb-5" />
            <p className="font-body text-taupe text-base md:text-lg font-light leading-relaxed max-w-sm">
              {activeShape.desc}
            </p>
            <Link
              href={`/shop?shape=${activeShape.id.toLowerCase()}`}
              className="mt-8 inline-block text-[11px] tracking-[0.25em] uppercase font-body text-charcoal border-b border-charcoal/20 pb-0.5 hover:border-charcoal transition-colors duration-300"
            >
              SHOP {activeShape.name} CUT
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}


