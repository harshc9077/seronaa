import Link from 'next/link';
import Image from 'next/image';
import { Collection } from '@/types';
import { cn } from '@/lib/utils/cn';

interface CollectionCardProps {
  collection: Collection;
  className?: string;
}

export function CollectionCard({ collection, className }: CollectionCardProps) {
  return (
    <Link 
      href={`/collections/${collection.handle}`}
      className={cn("group block w-full space-y-6", className)}
    >
      <div className="relative w-full aspect-[16/9] md:aspect-[3/2] overflow-hidden bg-gradient-to-br from-taupe/20 to-charcoal/20">
        {/* Use generated collections banner image if no actual image provided by backend */}
        {collection.image && (
          <Image 
            src={collection.image.url}
            alt={collection.image.altText || collection.title}
            fill
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/10" />
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
          <h3 className="font-heading text-3xl md:text-5xl text-white font-light tracking-wide">
            {collection.title}
          </h3>
        </div>
      </div>
      
      <div className="space-y-4 px-2">
        {collection.description && (
          <p className="font-body text-sm text-taupe max-w-xl leading-relaxed line-clamp-2">
            {collection.description}
          </p>
        )}
        <div className="inline-block text-[11px] tracking-[0.2em] uppercase text-charcoal underline underline-offset-4 decoration-1 decoration-taupe/30 group-hover:decoration-charcoal transition-colors duration-300">
          Explore Collection
        </div>
      </div>
    </Link>
  );
}
