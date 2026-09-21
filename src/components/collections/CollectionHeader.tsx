import { Collection } from '@/types';
import { cn } from '@/lib/utils/cn';
import { Container } from '@/components/ui/Container';
import Image from 'next/image';

interface CollectionHeaderProps {
  collection: Collection;
  className?: string;
}

export function CollectionHeader({ collection, className }: CollectionHeaderProps) {
  return (
    <div className={cn("w-full mb-16 md:mb-24", className)}>
      <div className="relative w-full aspect-[21/9] md:aspect-[3/1] bg-gradient-to-br from-charcoal to-taupe/80 overflow-hidden">
        {collection.image && (
          <Image 
            src={collection.image.url}
            alt={collection.image.altText || collection.title}
            fill
            className="object-cover mix-blend-overlay opacity-60"
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white font-light tracking-wide">
            {collection.title}
          </h1>
        </div>
      </div>
      
      {collection.description && (
        <Container>
          <div className="max-w-2xl mx-auto text-center mt-12 md:mt-16">
            <p className="font-body text-sm md:text-base text-taupe leading-relaxed">
              {collection.description}
            </p>
          </div>
        </Container>
      )}
    </div>
  );
}
