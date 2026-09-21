import React from 'react';
import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { ProductFilters } from '@/components/products/ProductFilters';
import { ProductToolbar } from '@/components/products/ProductToolbar';
import { ProductGrid } from '@/components/products/ProductGrid';
import { getDataProvider } from '@/lib/shopify';

export const metadata: Metadata = {
  title: 'Shop | SERONAA',
  description: 'Explore the SERONAA collection of luxury fine jewellery.',
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const provider = getDataProvider();
  
  // Await the products if getProducts is async. Assume it returns an array of Products.
  let products = await provider.getProducts();

  // Basic mock filtering logic based on search params
  const sort = searchParams.sort as string;
  const category = searchParams.category;
  
  // Note: in a real app, this filtering and sorting would ideally happen on the server/DB side.
  // For demonstration with mock data, we filter locally if needed.
  if (sort === 'price-asc') {
    products = [...products].sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    products = [...products].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 min-h-screen bg-ivory">
      <Container>
        <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
            All Jewellery
          </h1>
          <p className="font-body text-taupe leading-relaxed">
            Discover our curated collection of timeless fine jewellery, crafted with exceptional artistry and the finest materials.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Filters Sidebar */}
          <aside className="w-full md:w-64 shrink-0">
            <React.Suspense fallback={<div className="h-full min-h-[400px]" />}>
              <ProductFilters />
            </React.Suspense>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <React.Suspense fallback={<div className="h-10" />}>
              <ProductToolbar resultCount={products.length} />
            </React.Suspense>
            <ProductGrid products={products} />
          </div>
        </div>
      </Container>
    </div>
  );
}
