'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';

// Mock search function
const searchMockProducts = async (query: string): Promise<Product[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 400));
  
  // Return some mock results for any query for now
  return ([
    {
      id: '1',
      handle: 'classic-solitaire',
      title: 'Classic Solitaire Ring',
      description: 'A beautiful classic.',
      descriptionHtml: '<p>A beautiful classic.</p>',
      productType: 'Ring',
      vendor: 'Seronaa',
      images: [],
      price: 1200,
      compareAtPrice: null,
      availableForSale: true,
      variants: [],
      options: [],
      tags: [],
      diamondShape: 'round',
      metal: 'white-gold',
      collections: []
    },
    {
      id: '2',
      handle: 'eternity-band',
      title: 'Eternity Diamond Band',
      description: 'Sparkle forever.',
      descriptionHtml: '<p>Sparkle forever.</p>',
      productType: 'Ring',
      vendor: 'Seronaa',
      images: [],
      price: 2500,
      compareAtPrice: null,
      availableForSale: true,
      variants: [],
      options: [],
      tags: [],
      diamondShape: null,
      metal: 'yellow-gold',
      collections: []
    }
  ] as Product[]).filter(p => p.title.toLowerCase().includes(query.toLowerCase()));
};

interface SearchResultsProps {
  query: string;
  onClose: () => void;
}

export default function SearchResults({ query, onClose }: SearchResultsProps) {
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    
    // Using setTimeout to defer the loading state update to avoid synchronous state update warning
    const timer = setTimeout(() => {
      if (active) setLoading(true);
    }, 0);
    
    searchMockProducts(query).then(data => {
      if (active) {
        clearTimeout(timer);
        setResults(data);
        setLoading(false);
      }
    });
    
    return () => { 
      active = false; 
      clearTimeout(timer);
    };
  }, [query]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <span className="text-[11px] uppercase tracking-[0.2em] text-taupe animate-pulse">Searching...</span>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center text-taupe py-12">
        <p>No results found for &quot;{query}&quot;.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {results.map(product => (
        <Link 
          key={product.id} 
          href={`/product/${product.handle}`}
          onClick={onClose}
          className="group flex items-center space-x-4 border-b border-taupe/10 pb-4 hover:border-taupe/30 transition-colors"
        >
          <div className="w-16 h-16 relative bg-cream flex-shrink-0">
            {product.images && product.images[0] ? (
              <Image 
                src={product.images[0].url} 
                alt={product.images[0].altText || product.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-[8px] text-taupe/30">
                No Img
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <h3 className="font-heading text-lg text-charcoal group-hover:text-gold transition-colors">{product.title}</h3>
            <span className="text-sm font-body text-taupe">${product.price.toLocaleString()}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
