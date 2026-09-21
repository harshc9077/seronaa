'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NavLink } from './NavLink';
import { MobileMenu } from './MobileMenu';
import { cn } from '@/lib/utils/cn';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial scroll

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkBackground = pathname === '/' || pathname.startsWith('/collections/');
  const variant = (isScrolled || isMobileMenuOpen || !isDarkBackground) ? 'dark' : 'light';

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
          isScrolled ? "bg-ivory/95 backdrop-blur-sm border-b border-charcoal/10" : "bg-transparent"
        )}
      >
        <div className="flex h-16 lg:h-20 items-center justify-between px-[5vw] lg:px-[6vw]">
          {/* Mobile Left */}
          <div className="flex lg:hidden flex-1">
            <Link 
              href="/" 
              className={cn(
                "font-heading text-2xl tracking-[0.3em] transition-colors duration-300",
                variant === 'light' ? "text-cream" : "text-charcoal"
              )}
            >
              SERONAA
            </Link>
          </div>

          {/* Desktop Left */}
          <nav className="hidden lg:flex flex-1 items-center gap-8">
            <NavLink href="/shop" variant={variant}>SHOP</NavLink>
            <NavLink href="/collections" variant={variant}>COLLECTIONS</NavLink>
            <NavLink href="/lab-grown-diamonds" variant={variant}>DIAMONDS</NavLink>
            <NavLink href="/about" variant={variant}>THE HOUSE</NavLink>
          </nav>

          {/* Desktop Center */}
          <div className="hidden lg:flex justify-center">
            <Link 
              href="/" 
              className={cn(
                "font-heading text-3xl tracking-[0.3em] transition-colors duration-300",
                variant === 'light' ? "text-cream" : "text-charcoal"
              )}
            >
              SERONAA
            </Link>
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex flex-1 items-center justify-end gap-8">
            <button 
              className={cn(
                "text-[11px] tracking-[0.2em] uppercase font-body transition-colors duration-300",
                variant === 'light' ? "text-cream hover:text-white" : "text-charcoal hover:text-charcoal/70"
              )}
              onClick={() => console.log('Search clicked')}
            >
              SEARCH
            </button>
            <NavLink href="/cart" variant={variant}>BAG</NavLink>
          </div>

          {/* Mobile Right */}
          <div className="flex lg:hidden flex-1 justify-end items-center gap-6">
            <NavLink href="/cart" variant={variant}>BAG</NavLink>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "text-[11px] tracking-[0.2em] uppercase font-body transition-colors duration-300 z-50 relative",
                isMobileMenuOpen ? "text-charcoal" : (variant === 'light' ? "text-cream" : "text-charcoal")
              )}
            >
              {isMobileMenuOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
