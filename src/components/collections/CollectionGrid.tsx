import { Collection } from '@/types';
import { CollectionCard } from './CollectionCard';
import { cn } from '@/lib/utils/cn';

interface CollectionGridProps {
  collections: Collection[];
  className?: string;
}

export function CollectionGrid({ collections, className }: CollectionGridProps) {
  if (!collections?.length) {
    return null;
  }

  return (
    <div className={cn("flex flex-col space-y-16 md:space-y-32", className)}>
      {collections.map((collection, index) => (
        <div 
          key={collection.handle} 
          className={cn(
            "w-full md:w-5/6",
            index % 2 === 0 ? "mr-auto" : "ml-auto"
          )}
        >
          <CollectionCard collection={collection} />
        </div>
      ))}
    </div>
  );
}
