'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/components/cart/CartProvider';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';

export default function CartPageClient() {
  const { cart } = useCart();

  if (!cart || cart.items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-6">
        <p className="text-taupe">Your bag is empty.</p>
        <Link 
          href="/collections/all" 
          className="text-[11px] tracking-[0.2em] uppercase text-charcoal border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
      {/* Items */}
      <div className="lg:col-span-8 flex flex-col space-y-8">
        <div className="hidden md:grid grid-cols-12 border-b border-taupe/20 pb-4 text-[11px] tracking-[0.2em] uppercase text-taupe">
          <div className="col-span-8">Product</div>
          <div className="col-span-4 text-right">Total</div>
        </div>
        
        {cart.items.map((item) => (
          <div key={item.id} className="border-b border-taupe/10 pb-8">
            <CartItem item={item} />
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="lg:col-span-4">
        <div className="bg-cream/50 p-8 rounded-sm sticky top-[120px]">
          <h2 className="text-xl font-heading text-charcoal mb-6">Order Summary</h2>
          <CartSummary cart={cart} />
        </div>
      </div>
    </div>
  );
}
