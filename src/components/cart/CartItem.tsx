'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CartItem as CartItemType } from '@/types';
import { useCart } from './CartProvider';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateItem, removeItem, isLoading } = useCart();

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateItem(item.id, item.quantity - 1);
    } else {
      removeItem(item.id);
    }
  };

  const handleIncrease = () => {
    updateItem(item.id, item.quantity + 1);
  };

  return (
    <div className="flex space-x-4">
      {/* Image Placeholder */}
      <Link href={`/product/${item.handle}`} className="flex-shrink-0 relative w-20 h-20 aspect-square bg-cream group overflow-hidden">
        {item.image ? (
          <Image 
            src={item.image.url}
            alt={item.image.altText || item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-taupe/30 text-xs">
            No Image
          </div>
        )}
      </Link>

      <div className="flex flex-col flex-1 justify-between py-1">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <Link href={`/product/${item.handle}`} className="font-heading text-base text-charcoal hover:text-gold transition-colors">
              {item.title}
            </Link>
            <span className="text-taupe text-xs mt-1">{item.variantTitle}</span>
          </div>
          <span className="text-sm font-body tracking-wider text-charcoal">
            ${item.price.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center border border-taupe/30">
            <button 
              onClick={handleDecrease}
              disabled={isLoading}
              className="px-3 py-1 text-taupe hover:text-charcoal disabled:opacity-50 transition-colors"
            >
              -
            </button>
            <span className="px-2 text-sm text-charcoal">{item.quantity}</span>
            <button 
              onClick={handleIncrease}
              disabled={isLoading}
              className="px-3 py-1 text-taupe hover:text-charcoal disabled:opacity-50 transition-colors"
            >
              +
            </button>
          </div>
          <button 
            onClick={() => removeItem(item.id)}
            disabled={isLoading}
            className="text-[10px] uppercase tracking-widest text-taupe underline hover:text-burgundy transition-colors disabled:opacity-50"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
