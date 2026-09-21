'use client';

import { ProductOption } from '@/types';
import { cn } from '@/lib/utils/cn';

interface VariantSelectorProps {
  option: ProductOption;
  selected: string;
  onChange: (value: string) => void;
}

export function VariantSelector({ option, selected, onChange }: VariantSelectorProps) {
  const isSize = option.name.toLowerCase() === 'size';
  
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <span className="text-[11px] uppercase tracking-widest text-taupe">
          {option.name}
        </span>
        {isSize && (
          <button className="text-[10px] uppercase tracking-widest text-charcoal underline underline-offset-4 decoration-taupe/40">
            Size Guide
          </button>
        )}
      </div>

      <div className={cn(
        "flex flex-wrap gap-3",
        isSize && "gap-2"
      )}>
        {option.values.map((value) => {
          const isSelected = selected === value;
          
          if (isSize) {
            return (
              <button
                key={value}
                onClick={() => onChange(value)}
                className={cn(
                  "h-10 min-w-[2.5rem] px-2 flex items-center justify-center border text-sm font-body transition-colors",
                  isSelected 
                    ? "border-charcoal bg-charcoal text-white" 
                    : "border-cream bg-transparent text-charcoal hover:border-taupe"
                )}
              >
                {value}
              </button>
            );
          }

          return (
            <button
              key={value}
              onClick={() => onChange(value)}
              className={cn(
                "px-5 py-2.5 border text-xs tracking-widest uppercase transition-colors",
                isSelected
                  ? "border-charcoal bg-charcoal text-white"
                  : "border-cream bg-transparent text-charcoal hover:border-taupe"
              )}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}
