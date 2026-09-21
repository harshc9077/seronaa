'use client';

import { useState } from 'react';
import { Product, ProductOption, ProductVariant } from '@/types';
import { VariantSelector } from './VariantSelector';
import { Button } from '@/components/ui/Button';

interface ProductOptionsProps {
  product: Product;
}

export function ProductOptions({ product }: ProductOptionsProps) {
  // Initialize selected options with the first available variant's options
  const defaultVariant = product.variants?.[0];
  const initialOptions: Record<string, string> = {};
  
  product.options?.forEach(option => {
    initialOptions[option.name] = option.values[0];
  });

  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(initialOptions);

  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [optionName]: value
    }));
  };

  // Find the variant that matches the selected options
  const selectedVariant = product.variants?.find(variant => {
    return variant.selectedOptions.every(
      opt => selectedOptions[opt.name] === opt.value
    );
  }) || defaultVariant;

  const isAvailable = selectedVariant?.availableForSale ?? product.availableForSale;

  const handleAddToCart = () => {
    if (!selectedVariant || !isAvailable) return;
    // Handle add to cart logic here
    console.log('Adding to cart:', selectedVariant);
  };

  return (
    <div className="flex flex-col gap-8 mb-12">
      {product.options?.map(option => (
        <VariantSelector
          key={option.name}
          option={option}
          selected={selectedOptions[option.name]}
          onChange={(value) => handleOptionChange(option.name, value)}
        />
      ))}

      <div className="pt-4">
        <Button 
          variant="primary" 
          size="lg" 
          className="w-full"
          disabled={!isAvailable}
          onClick={handleAddToCart}
        >
          {isAvailable ? 'ADD TO BAG' : 'OUT OF STOCK'}
        </Button>
      </div>
    </div>
  );
}
