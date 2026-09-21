'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useCart } from './CartProvider';
import CartItemComponent from './CartItem';
import CartSummary from './CartSummary';
import { cn } from '@/lib/utils/cn';

export default function CartDrawer() {
  const { cart, isOpen, closeCart } = useCart();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCart();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeCart]);

  return (
    <>
      {/* Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/30 z-50 transition-opacity duration-300",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div 
        ref={drawerRef}
        className={cn(
          "fixed right-0 top-0 h-full w-full max-w-md bg-ivory z-50 transform transition-transform duration-500 ease-in-out flex flex-col shadow-2xl",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-taupe/20">
          <h2 className="text-[11px] tracking-[0.2em] uppercase text-charcoal">Your Bag</h2>
          <button 
            onClick={closeCart}
            className="p-2 -mr-2 text-charcoal hover:text-taupe transition-colors"
            aria-label="Close cart"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {!cart || cart.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full space-y-6 text-center">
              <p className="text-taupe">Your bag is empty.</p>
              <Link 
                href="/collections/all" 
                onClick={closeCart}
                className="text-[11px] tracking-[0.2em] uppercase text-charcoal underline hover:text-gold transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="flex flex-col space-y-8">
              {cart.items.map((item) => (
                <CartItemComponent key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart && cart.items.length > 0 && (
          <div className="p-6 border-t border-taupe/20 bg-ivory sticky bottom-0">
            <CartSummary cart={cart} onCheckout={closeCart} />
          </div>
        )}
      </div>
    </>
  );
}
