import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { CollectionGrid } from '@/components/collections/CollectionGrid';
import { getDataProvider } from '@/lib/shopify';

export const metadata: Metadata = {
  title: 'Collections | SERONAA',
  description: 'Explore our curated collections of luxury jewellery.',
};

export default async function CollectionsPage() {
  const provider = getDataProvider();
  const collections = await provider.getCollections();

  return (
    <div className="min-h-screen bg-ivory pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24 space-y-6">
          <h1 className="font-heading text-4xl md:text-6xl text-charcoal font-light tracking-wide">
            Collections
          </h1>
          <p className="font-body text-sm md:text-base text-taupe">
            Curated stories in light and stone.
          </p>
        </div>
        
        <CollectionGrid collections={collections} />
      </Container>
    </div>
  );
}
