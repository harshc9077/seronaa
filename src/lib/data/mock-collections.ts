import { Collection } from '@/types';
import { mockProducts } from './mock-products';

const getProductsByHandles = (handles: string[]) => 
  mockProducts.filter(p => handles.includes(p.handle));

export const mockCollections: Collection[] = [
  {
    id: 'gid://shopify/Collection/1',
    handle: 'signature',
    title: 'Signature',
    description: 'Our definitive collection, where timeless design meets modern luxury.',
    image: null,
    products: getProductsByHandles([
      'eternal-radiance-solitaire',
      'aurora-halo-ring',
      'luminous-drop-earrings',
      'constellation-studs',
      'soleil-pendant',
      'riviere-bracelet'
    ])
  },
  {
    id: 'gid://shopify/Collection/2',
    handle: 'bridal',
    title: 'Bridal',
    description: 'For life\'s most precious moment. Lab-grown diamonds of extraordinary brilliance.',
    image: null,
    products: getProductsByHandles([
      'eternal-radiance-solitaire',
      'celestial-three-stone-ring',
      'whisper-band',
      'infinite-grace-necklace'
    ])
  },
  {
    id: 'gid://shopify/Collection/3',
    handle: 'new-arrivals',
    title: 'New Arrivals',
    description: 'The latest from the House of Seronaa.',
    image: null,
    products: getProductsByHandles([
      'aurora-halo-ring',
      'cascade-chandelier-earrings',
      'ethereal-choker',
      'serenity-bangle'
    ])
  },
  {
    id: 'gid://shopify/Collection/4',
    handle: 'celestial',
    title: 'Celestial',
    description: 'Inspired by the night sky. A collection of celestial brilliance.',
    image: null,
    products: getProductsByHandles([
      'celestial-three-stone-ring',
      'constellation-studs',
      'cascade-chandelier-earrings',
      'ethereal-choker'
    ])
  }
];
