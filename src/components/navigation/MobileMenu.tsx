'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  { label: 'COLLECTIONS', href: '/collections' },
  { label: 'SHOP', href: '/shop' },
  { label: 'DIAMONDS', href: '/lab-grown-diamonds' },
  { label: 'THE HOUSE', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      const tl = gsap.timeline();
      
      if (!prefersReducedMotion.current) {
        tl.to(containerRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out',
          display: 'flex',
        }).fromTo(
          linksRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out' },
          '-=0.2'
        );
      } else {
        gsap.set(containerRef.current, { display: 'flex', opacity: 1, y: 0 });
        gsap.set(linksRef.current, { opacity: 1, y: 0 });
      }

    } else {
      document.body.style.overflow = '';
      
      if (!prefersReducedMotion.current) {
        gsap.to(containerRef.current, {
          y: '-100%',
          opacity: 0,
          duration: 0.4,
          ease: 'power3.in',
          onComplete: () => {
            if (containerRef.current) {
              containerRef.current.style.display = 'none';
            }
          },
        });
      } else {
        if (containerRef.current) {
          gsap.set(containerRef.current, { display: 'none', opacity: 0 });
        }
      }
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-40 hidden flex-col bg-ivory pt-24 px-[5vw]"
      style={{ transform: 'translateY(-100%)', opacity: 0 }}
      role="dialog"
      aria-modal="true"
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-[5vw] p-2 text-charcoal font-body text-sm tracking-widest uppercase"
        aria-label="Close menu"
      >
        Close
      </button>

      <nav className="flex flex-col gap-8 mt-12">
        {links.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="text-4xl font-heading text-charcoal"
            ref={(el) => {
              if (el) linksRef.current[i] = el;
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
