'use client';

import React from 'react';
import Link from 'next/link';
import { Cart } from '@/types';
import { Button } from '@/components/ui/Button';

interface CartSummaryProps {
  cart: Cart;
  onCheckout?: () => void;
}

export default function CartSummary({ cart, onCheckout }: CartSummaryProps) {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between items-end mb-2">
        <span className="text-sm uppercase tracking-widest text-charcoal">Subtotal</span>
        <span className="font-body tracking-wider text-lg text-charcoal">
          ${cart.subtotal.toLocaleString()}
        </span>
      </div>
      
      <p className="text-xs text-taupe">Shipping calculated at checkout.</p>
      
      <Button 
        variant="primary" 
        className="w-full justify-center"
        onClick={() => {
          if (onCheckout) onCheckout();
          if (cart.checkoutUrl) window.location.href = cart.checkoutUrl;
        }}
      >
        CHECKOUT
      </Button>
      
      <div className="text-center mt-4">
        <Link 
          href="/collections/all"
          className="text-[11px] tracking-[0.2em] uppercase text-taupe underline hover:text-charcoal transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
