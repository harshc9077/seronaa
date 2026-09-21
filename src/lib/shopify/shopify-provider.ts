import { DataProvider } from './provider';
import { shopifyFetch } from './client';
import { 
  GET_PRODUCTS, GET_PRODUCT_BY_HANDLE, GET_COLLECTIONS, GET_COLLECTION_BY_HANDLE, 
  SEARCH_PRODUCTS, GET_CART, CREATE_CART, ADD_TO_CART, UPDATE_CART, REMOVE_FROM_CART 
} from './queries';
import { normalizeProduct, normalizeCollection, normalizeCart } from './normalize';
import { Product, Collection, Cart } from '@/types';
import { ShopifyProduct, ShopifyCollection, ShopifyCart } from './types';

export class ShopifyProvider implements DataProvider {
  async getProducts(first = 20): Promise<Product[]> {
    const res = await shopifyFetch<{ products: { edges: { node: ShopifyProduct }[] } }>(GET_PRODUCTS, { first });
    return res.products.edges.map(({ node }) => normalizeProduct(node));
  }

  async getProductByHandle(handle: string): Promise<Product | null> {
    const res = await shopifyFetch<{ product: ShopifyProduct | null }>(GET_PRODUCT_BY_HANDLE, { handle });
    if (!res.product) return null;
    return normalizeProduct(res.product);
  }

  async getCollections(): Promise<Collection[]> {
    const res = await shopifyFetch<{ collections: { edges: { node: ShopifyCollection }[] } }>(GET_COLLECTIONS);
    return res.collections.edges.map(({ node }) => normalizeCollection(node));
  }

  async getCollectionByHandle(handle: string): Promise<Collection | null> {
    const res = await shopifyFetch<{ collection: ShopifyCollection | null }>(GET_COLLECTION_BY_HANDLE, { handle });
    if (!res.collection) return null;
    return normalizeCollection(res.collection);
  }

  async getProductsByCollection(handle: string): Promise<Product[]> {
    const collection = await this.getCollectionByHandle(handle);
    return collection?.products || [];
  }

  async searchProducts(query: string): Promise<Product[]> {
    const res = await shopifyFetch<{ products: { edges: { node: ShopifyProduct }[] } }>(SEARCH_PRODUCTS, { query });
    return res.products.edges.map(({ node }) => normalizeProduct(node));
  }

  async getCart(id: string): Promise<Cart | null> {
    const res = await shopifyFetch<{ cart: ShopifyCart | null }>(GET_CART, { cartId: id });
    if (!res.cart) return null;
    return normalizeCart(res.cart);
  }

  async createCart(): Promise<Cart> {
    const res = await shopifyFetch<{ cartCreate: { cart: ShopifyCart } }>(CREATE_CART);
    return normalizeCart(res.cartCreate.cart);
  }

  async addToCart(cartId: string, variantId: string, quantity: number): Promise<Cart> {
    const res = await shopifyFetch<{ cartLinesAdd: { cart: ShopifyCart } }>(ADD_TO_CART, {
      cartId,
      lines: [{ merchandiseId: variantId, quantity }]
    });
    return normalizeCart(res.cartLinesAdd.cart);
  }

  async updateCart(cartId: string, lineId: string, quantity: number): Promise<Cart> {
    const res = await shopifyFetch<{ cartLinesUpdate: { cart: ShopifyCart } }>(UPDATE_CART, {
      cartId,
      lines: [{ id: lineId, quantity }]
    });
    return normalizeCart(res.cartLinesUpdate.cart);
  }

  async removeFromCart(cartId: string, lineIds: string[]): Promise<Cart> {
    const res = await shopifyFetch<{ cartLinesRemove: { cart: ShopifyCart } }>(REMOVE_FROM_CART, {
      cartId,
      lineIds
    });
    return normalizeCart(res.cartLinesRemove.cart);
  }
}
