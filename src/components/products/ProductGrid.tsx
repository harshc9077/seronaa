import { Product } from '@/types';
import { ProductCard } from './ProductCard';
import { cn } from '@/lib/utils/cn';

interface ProductGridProps {
  products: Product[];
  className?: string;
}

export function ProductGrid({ products, className }: ProductGridProps) {
  if (!products?.length) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <p className="font-heading text-2xl text-charcoal">No products found</p>
        <p className="mt-4 text-sm text-taupe">Try adjusting your filters or search criteria.</p>
      </div>
    );
  }

  return (
    <div className={cn("grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:gap-x-6 md:gap-y-12 xl:grid-cols-4", className)}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
