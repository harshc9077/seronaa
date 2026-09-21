export interface ProductImage {
  id: string;
  url: string;
  altText: string;
  width: number;
  height: number;
}

export interface ProductOption {
  id: string;
  name: string; // e.g. 'Size', 'Metal'
  values: string[];
}

export interface ProductVariant {
  id: string;
  title: string;
  price: number;
  compareAtPrice: number | null;
  availableForSale: boolean;
  selectedOptions: { name: string; value: string }[];
  image?: ProductImage;
}

export type DiamondShape = 'round' | 'oval' | 'emerald' | 'pear' | 'marquise' | 'cushion' | 'radiant' | 'princess';
export type Metal = 'white-gold' | 'yellow-gold' | 'rose-gold' | 'platinum';

export interface Product {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  productType: string;
  vendor: string;
  images: ProductImage[];
  price: number;
  compareAtPrice: number | null;
  availableForSale: boolean;
  variants: ProductVariant[];
  options: ProductOption[];
  tags: string[];
  diamondShape: DiamondShape | null;
  metal: Metal | null;
  collections: string[];
}

export interface Collection {
  id: string;
  handle: string;
  title: string;
  description: string;
  image: ProductImage | null;
  products?: Product[];
}

export interface CartItem {
  id: string; // line item ID
  productId: string;
  variantId: string;
  title: string;
  variantTitle: string;
  price: number;
  quantity: number;
  image: ProductImage | null;
  handle: string;
}

export interface Cart {
  id: string;
  items: CartItem[];
  totalQuantity: number;
  subtotal: number;
  checkoutUrl: string;
}

export interface SearchResult {
  products: Product[];
  totalCount: number;
}
