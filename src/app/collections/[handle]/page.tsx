import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { CollectionHeader } from '@/components/collections/CollectionHeader';
import { CollectionToolbar } from '@/components/collections/CollectionToolbar';
import { ProductGrid } from '@/components/products/ProductGrid';
import { getDataProvider } from '@/lib/shopify';

interface CollectionPageProps {
  params: {
    handle: string;
  };
}

export async function generateStaticParams() {
  const provider = getDataProvider();
  const collections = await provider.getCollections();
  
  return collections.map((collection) => ({
    handle: collection.handle,
  }));
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const provider = getDataProvider();
  const collection = await provider.getCollectionByHandle(params.handle);
  
  if (!collection) {
    return {
      title: 'Collection Not Found | SERONAA'
    };
  }

  return {
    title: `${collection.title} | SERONAA`,
    description: collection.description || `Explore the ${collection.title} collection by SERONAA.`,
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const provider = getDataProvider();
  const collection = await provider.getCollectionByHandle(params.handle);
  
  if (!collection) {
    notFound();
  }

  const products = await provider.getProductsByCollection(params.handle);

  return (
    <div className="min-h-screen bg-ivory pb-24 md:pb-32 pt-20">
      <CollectionHeader collection={collection} />
      
      <Container>
        <React.Suspense fallback={<div className="h-10" />}>
          <CollectionToolbar count={products.length} />
        </React.Suspense>
        
        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <div className="text-center py-24 text-taupe font-body text-sm">
            No pieces found in this collection.
          </div>
        )}
      </Container>
    </div>
  );
}
