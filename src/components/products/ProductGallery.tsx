'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils/cn';
import { ProductImage } from '@/types';

interface ProductGalleryProps {
  images: ProductImage[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images?.length) {
    return (
      <div className="aspect-[3/4] w-full bg-gradient-to-br from-cream to-ivory" />
    );
  }

  const activeImage = images[activeIndex];

  return (
    <div className="flex flex-col gap-4 md:flex-row-reverse md:gap-6 lg:gap-8">
      {/* Main Image */}
      <div className="relative aspect-[3/4] w-full flex-1 overflow-hidden bg-cream">
        <Image
          src={activeImage.url}
          alt={activeImage.altText || 'Product image'}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center transition-opacity duration-500"
          key={activeImage.url} // Forces re-mount on change for simple crossfade effect if using CSS, but here Next/Image handles it smoothly
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide md:w-20 lg:w-24 shrink-0">
          {images.map((image, index) => (
            <button
              key={image.url}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative aspect-[3/4] w-20 md:w-full shrink-0 overflow-hidden bg-cream transition-opacity",
                activeIndex === index ? "opacity-100 ring-1 ring-charcoal ring-offset-2 ring-offset-ivory" : "opacity-60 hover:opacity-100"
              )}
            >
              <Image
                src={image.url}
                alt={image.altText || `Thumbnail ${index + 1}`}
                fill
                sizes="(max-width: 768px) 80px, 96px"
                className="object-cover object-center"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
