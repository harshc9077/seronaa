'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils/cn';

interface CollectionToolbarProps {
  count: number;
  className?: string;
}

const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low-High', value: 'price-asc' },
  { label: 'Price: High-Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
];

export function CollectionToolbar({ count, className }: CollectionToolbarProps) {
  const [sort, setSort] = useState('featured');

  return (
    <div className={cn("flex flex-row items-center justify-between py-4 border-b border-taupe/20 mb-8 md:mb-12", className)}>
      <div className="text-[11px] uppercase tracking-widest text-taupe">
        {count} {count === 1 ? 'Piece' : 'Pieces'}
      </div>
      
      <div className="flex items-center space-x-2">
        <label htmlFor="sort" className="text-[11px] uppercase tracking-widest text-taupe hidden sm:block">
          Sort
        </label>
        <select
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="text-[11px] uppercase tracking-widest text-charcoal bg-transparent border-none outline-none cursor-pointer focus:ring-0"
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
