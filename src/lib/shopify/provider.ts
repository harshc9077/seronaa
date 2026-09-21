export interface DataProvider {
  getProducts(first?: number): Promise<import('@/types').Product[]>;
  getProductByHandle(handle: string): Promise<import('@/types').Product | null>;
  getCollections(): Promise<import('@/types').Collection[]>;
  getCollectionByHandle(handle: string): Promise<import('@/types').Collection | null>;
  getProductsByCollection(handle: string): Promise<import('@/types').Product[]>;
  searchProducts(query: string): Promise<import('@/types').Product[]>;
  getCart(id: string): Promise<import('@/types').Cart | null>;
  createCart(): Promise<import('@/types').Cart>;
  addToCart(cartId: string, variantId: string, quantity: number): Promise<import('@/types').Cart>;
  updateCart(cartId: string, lineId: string, quantity: number): Promise<import('@/types').Cart>;
  removeFromCart(cartId: string, lineIds: string[]): Promise<import('@/types').Cart>;
}
