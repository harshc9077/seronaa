import { Product, Collection, Cart, CartItem, ProductVariant, ProductImage, DiamondShape, Metal } from '@/types';
import { ShopifyProduct, ShopifyCollection, ShopifyCart, ShopifyImage } from './types';

function normalizeImage(image: ShopifyImage): ProductImage {
  return {
    id: image.id,
    url: image.url,
    altText: image.altText || '',
    width: image.width,
    height: image.height,
  };
}

export function normalizeProduct(shopifyProduct: ShopifyProduct): Product {
  const images = shopifyProduct.images.edges.map(({ node }) => normalizeImage(node));
  const variants: ProductVariant[] = shopifyProduct.variants.edges.map(({ node }) => ({
    id: node.id,
    title: node.title,
    availableForSale: node.availableForSale,
    price: parseFloat(node.price.amount),
    compareAtPrice: node.compareAtPrice ? parseFloat(node.compareAtPrice.amount) : null,
    selectedOptions: node.selectedOptions,
    image: node.image ? normalizeImage(node.image) : undefined,
  }));

  const price = shopifyProduct.priceRange?.minVariantPrice?.amount 
    ? parseFloat(shopifyProduct.priceRange.minVariantPrice.amount) 
    : 0;

  const compareAtPrice = shopifyProduct.compareAtPriceRange?.minVariantPrice?.amount
    ? parseFloat(shopifyProduct.compareAtPriceRange.minVariantPrice.amount)
    : null;

  const collections = shopifyProduct.collections?.edges.map(({ node }) => node.handle) || [];

  // Very basic tag parsing for shapes/metals, could be expanded
  let diamondShape: DiamondShape | null = null;
  let metal: Metal | null = null;
  
  const shapes: DiamondShape[] = ['round', 'oval', 'emerald', 'pear', 'marquise', 'cushion', 'radiant', 'princess'];
  const metals: Metal[] = ['white-gold', 'yellow-gold', 'rose-gold', 'platinum'];

  for (const tag of shopifyProduct.tags || []) {
    const t = tag.toLowerCase();
    if (shapes.includes(t as DiamondShape)) diamondShape = t as DiamondShape;
    if (metals.includes(t as Metal)) metal = t as Metal;
  }

  return {
    id: shopifyProduct.id,
    handle: shopifyProduct.handle,
    title: shopifyProduct.title,
    description: shopifyProduct.description,
    descriptionHtml: shopifyProduct.descriptionHtml,
    productType: shopifyProduct.productType,
    vendor: shopifyProduct.vendor,
    images,
    price,
    compareAtPrice,
    availableForSale: shopifyProduct.availableForSale,
    variants,
    options: shopifyProduct.options,
    tags: shopifyProduct.tags || [],
    diamondShape,
    metal,
    collections,
  };
}

export function normalizeCollection(shopifyCollection: ShopifyCollection): Collection {
  return {
    id: shopifyCollection.id,
    handle: shopifyCollection.handle,
    title: shopifyCollection.title,
    description: shopifyCollection.description,
    image: shopifyCollection.image ? normalizeImage(shopifyCollection.image) : null,
    products: shopifyCollection.products?.edges.map(({ node }) => normalizeProduct(node)) || [],
  };
}

export function normalizeCart(shopifyCart: ShopifyCart): Cart {
  const items: CartItem[] = shopifyCart.lines.edges.map(({ node }) => ({
    id: node.id,
    productId: node.merchandise.product.id,
    variantId: node.merchandise.id,
    title: node.merchandise.product.title,
    variantTitle: node.merchandise.title,
    price: parseFloat(node.cost.totalAmount.amount) / node.quantity,
    quantity: node.quantity,
    image: node.merchandise.image ? normalizeImage(node.merchandise.image) : null,
    handle: node.merchandise.product.handle,
  }));

  return {
    id: shopifyCart.id,
    items,
    totalQuantity: shopifyCart.totalQuantity,
    subtotal: parseFloat(shopifyCart.cost.subtotalAmount.amount),
    checkoutUrl: shopifyCart.checkoutUrl,
  };
}
