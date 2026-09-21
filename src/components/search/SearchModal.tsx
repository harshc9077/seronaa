'use client';

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils/cn';
import SearchResults from './SearchResults';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery(''); // Reset query when closed
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div 
      className={cn(
        "fixed inset-0 bg-ivory/98 z-50 transition-opacity duration-300 flex flex-col items-center pt-[15vh] px-[5vw]",
        isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      )}
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-4 text-charcoal hover:text-taupe transition-colors"
        aria-label="Close search"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className="w-full max-w-3xl flex flex-col">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search jewellery..."
          className="w-full bg-transparent border-b border-taupe/30 pb-4 text-4xl md:text-6xl font-heading text-charcoal placeholder:text-taupe/50 focus:outline-none focus:border-charcoal transition-colors"
        />
        
        <div className="mt-12 w-full h-[60vh] overflow-y-auto">
          {debouncedQuery.length > 1 ? (
            <SearchResults query={debouncedQuery} onClose={onClose} />
          ) : (
            <div className="text-center text-taupe mt-12">
              <p>Type to search for products, collections, and more.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
