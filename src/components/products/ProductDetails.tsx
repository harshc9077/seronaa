import { Product } from '@/types';

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="flex flex-col">
      <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-charcoal mb-4">
        {product.title}
      </h1>
      
      <div className="flex items-center gap-4 mb-6">
        <span className="font-body text-lg text-charcoal">
          {formatPrice(product.price)}
        </span>
        {product.compareAtPrice && product.compareAtPrice > product.price && (
          <span className="font-body text-sm text-taupe line-through">
            {formatPrice(product.compareAtPrice)}
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        {product.diamondShape && (
          <span className="px-3 py-1 bg-cream text-[10px] uppercase tracking-widest text-charcoal">
            {product.diamondShape}
          </span>
        )}
        {product.metal && (
          <span className="px-3 py-1 bg-cream text-[10px] uppercase tracking-widest text-charcoal">
            {product.metal}
          </span>
        )}
        <span className="px-3 py-1 bg-cream text-[10px] uppercase tracking-widest text-charcoal">
          {product.availableForSale ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>

      <div className="font-body text-sm text-taupe leading-relaxed mb-8">
        <p>{product.description}</p>
      </div>
    </div>
  );
}
