'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils/cn';

interface FilterGroupProps {
  title: string;
  options: { label: string; value: string }[];
  selected: string[];
  onChange: (value: string) => void;
}

function FilterGroup({ title, options, selected, onChange }: FilterGroupProps) {
  return (
    <div className="py-6 border-b border-cream last:border-b-0">
      <h4 className="text-[11px] uppercase tracking-[0.15em] text-taupe mb-4">{title}</h4>
      <div className="flex flex-col gap-3">
        {options.map((option) => (
          <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
            <div className={cn(
              "w-4 h-4 border transition-colors flex items-center justify-center",
              selected.includes(option.value) 
                ? "border-charcoal bg-charcoal" 
                : "border-taupe/30 group-hover:border-taupe"
            )}>
              {selected.includes(option.value) && (
                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className={cn(
              "text-sm font-body transition-colors",
              selected.includes(option.value) ? "text-charcoal" : "text-taupe group-hover:text-charcoal"
            )}>
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

export function ProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const current = params.getAll(name);
    
    if (current.includes(value)) {
      params.delete(name);
      current.filter(v => v !== value).forEach(v => params.append(name, v));
    } else {
      params.append(name, value);
    }
    
    return params.toString();
  };

  const handleFilterChange = (type: string, value: string) => {
    const queryString = createQueryString(type, value);
    router.push(`/shop?${queryString}`, { scroll: false });
  };

  const clearFilters = () => {
    router.push('/shop', { scroll: false });
  };

  const getSelected = (name: string) => searchParams.getAll(name);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="md:hidden flex items-center gap-2 text-[11px] uppercase tracking-widest text-charcoal mb-8"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
        Filters
      </button>

      <div className={cn(
        "fixed inset-0 z-50 bg-ivory md:bg-transparent md:static md:block md:w-64 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <div className="h-full overflow-y-auto px-5 py-8 md:p-0 md:overflow-visible">
          <div className="flex items-center justify-between mb-8 md:hidden">
            <h3 className="font-heading text-xl">Filters</h3>
            <button onClick={() => setIsOpen(false)} className="p-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-between mb-2">
            <h3 className="hidden md:block font-heading text-2xl text-charcoal">Filters</h3>
            {Array.from(searchParams.entries()).length > 0 && (
              <button 
                onClick={clearFilters}
                className="text-[10px] uppercase tracking-widest text-taupe hover:text-charcoal transition-colors underline underline-offset-4"
              >
                Clear All
              </button>
            )}
          </div>

          <FilterGroup
            title="Category"
            options={[
              { label: 'All Jewellery', value: 'all' },
              { label: 'Rings', value: 'rings' },
              { label: 'Earrings', value: 'earrings' },
              { label: 'Necklaces', value: 'necklaces' },
              { label: 'Bracelets', value: 'bracelets' },
            ]}
            selected={getSelected('category')}
            onChange={(val) => handleFilterChange('category', val)}
          />

          <FilterGroup
            title="Price"
            options={[
              { label: 'Under $3,000', value: 'under-3000' },
              { label: '$3,000–$5,000', value: '3000-5000' },
              { label: '$5,000–$8,000', value: '5000-8000' },
              { label: 'Over $8,000', value: 'over-8000' },
            ]}
            selected={getSelected('price')}
            onChange={(val) => handleFilterChange('price', val)}
          />

          <FilterGroup
            title="Diamond Shape"
            options={[
              { label: 'Round', value: 'round' },
              { label: 'Oval', value: 'oval' },
              { label: 'Emerald', value: 'emerald' },
              { label: 'Pear', value: 'pear' },
              { label: 'Marquise', value: 'marquise' },
              { label: 'Cushion', value: 'cushion' },
            ]}
            selected={getSelected('shape')}
            onChange={(val) => handleFilterChange('shape', val)}
          />

          <FilterGroup
            title="Metal"
            options={[
              { label: 'White Gold', value: 'white-gold' },
              { label: 'Yellow Gold', value: 'yellow-gold' },
              { label: 'Rose Gold', value: 'rose-gold' },
              { label: 'Platinum', value: 'platinum' },
            ]}
            selected={getSelected('metal')}
            onChange={(val) => handleFilterChange('metal', val)}
          />
        </div>
      </div>
    </>
  );
}
