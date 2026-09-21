import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const mainImage = product.images?.[0]?.url;

  return (
    <Link 
      href={`/product/${product.handle}`} 
      className={cn("group flex flex-col gap-4", className)}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-cream">
        {mainImage ? (
          <Image
            src={mainImage}
            alt={product.images[0]?.altText || product.title}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-cream to-ivory transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
        )}
      </div>

      <div className="flex flex-col items-center text-center">
        <h3 className="font-heading text-lg md:text-xl text-charcoal">{product.title}</h3>
        
        {product.diamondShape && (
          <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-taupe">
            {product.diamondShape}
          </p>
        )}
        
        <p className="mt-2 font-body text-sm text-charcoal">
          {formatPrice(product.price)}
        </p>

        <span className="mt-4 text-[10px] uppercase tracking-[0.2em] text-charcoal underline decoration-taupe/40 underline-offset-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View Piece
        </span>
      </div>
    </Link>
  );
}
