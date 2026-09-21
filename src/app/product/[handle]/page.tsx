import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { ProductGallery } from '@/components/products/ProductGallery';
import { ProductDetails } from '@/components/products/ProductDetails';
import { ProductOptions } from '@/components/products/ProductOptions';
import { ProductAccordion } from '@/components/products/ProductAccordion';
import { ProductGrid } from '@/components/products/ProductGrid';
import { getDataProvider } from '@/lib/shopify';

interface ProductPageProps {
  params: {
    handle: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const provider = getDataProvider();
  const product = await provider.getProductByHandle(params.handle);

  if (!product) {
    return {
      title: 'Product Not Found | SERONAA',
    };
  }

  return {
    title: `${product.title} | SERONAA`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  const provider = getDataProvider();
  const products = await provider.getProducts();
  
  return products.map((product) => ({
    handle: product.handle,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const provider = getDataProvider();
  const product = await provider.getProductByHandle(params.handle);

  if (!product) {
    notFound();
  }

  // Fetch related products (mock logic: just get some products and exclude current)
  const allProducts = await provider.getProducts();
  const relatedProducts = allProducts
    .filter(p => p.handle !== product.handle)
    .slice(0, 4);

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 bg-ivory">
      <Container>
        {/* Main Product Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-32">
          {/* Gallery (Left on desktop) */}
          <div className="w-full lg:w-[55%] lg:sticky lg:top-32 lg:self-start">
            <ProductGallery images={product.images || []} />
          </div>

          {/* Details (Right on desktop) */}
          <div className="w-full lg:w-[45%] flex flex-col pt-4 lg:pt-12">
            <ProductDetails product={product} />
            <ProductOptions product={product} />
            
            <ProductAccordion 
              sections={[
                {
                  title: 'Description',
                  content: <p>{product.description}</p>
                },
                {
                  title: 'The Diamond',
                  content: <p>Ethically sourced and meticulously graded for brilliance, fire, and scintillation.</p>
                },
                {
                  title: 'Craftsmanship',
                  content: <p>Created by our master artisans using traditional techniques combined with modern precision.</p>
                },
                {
                  title: 'Delivery & Returns',
                  content: <p>Complimentary secure shipping on all orders. 30-day return policy for unblemished items.</p>
                },
                {
                  title: 'Care',
                  content: <p>To maintain the brilliance of your piece, gently clean with a soft brush and warm soapy water.</p>
                }
              ]}
            />
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="pt-24 border-t border-cream">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl text-charcoal">
                You May Also Like
              </h2>
            </div>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </Container>
    </div>
  );
}
