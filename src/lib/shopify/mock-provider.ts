import { DataProvider } from './provider';
import { Product, Collection, Cart, CartItem } from '@/types';
import { mockProducts } from '../data/mock-products';
import { mockCollections } from '../data/mock-collections';

// In-memory cart store for mock provider
const carts = new Map<string, Cart>();

export class MockProvider implements DataProvider {
  async getProducts(first = 20): Promise<Product[]> {
    return mockProducts.slice(0, first);
  }

  async getProductByHandle(handle: string): Promise<Product | null> {
    return mockProducts.find(p => p.handle === handle) || null;
  }

  async getCollections(): Promise<Collection[]> {
    return mockCollections;
  }

  async getCollectionByHandle(handle: string): Promise<Collection | null> {
    return mockCollections.find(c => c.handle === handle) || null;
  }

  async getProductsByCollection(handle: string): Promise<Product[]> {
    const collection = mockCollections.find(c => c.handle === handle);
    if (!collection || !collection.products) return [];
    return collection.products;
  }

  async searchProducts(query: string): Promise<Product[]> {
    const q = query.toLowerCase();
    return mockProducts.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.description.toLowerCase().includes(q)
    );
  }

  async getCart(id: string): Promise<Cart | null> {
    return carts.get(id) || null;
  }

  async createCart(): Promise<Cart> {
    const id = `mock_cart_${Math.random().toString(36).substring(2, 9)}`;
    const cart: Cart = {
      id,
      items: [],
      totalQuantity: 0,
      subtotal: 0,
      checkoutUrl: '/checkout/mock'
    };
    carts.set(id, cart);
    return cart;
  }

  async addToCart(cartId: string, variantId: string, quantity: number): Promise<Cart> {
    let cart = carts.get(cartId);
    if (!cart) {
      cart = await this.createCart();
      carts.set(cartId, cart);
    }

    const product = mockProducts.find(p => p.variants.some(v => v.id === variantId));
    if (!product) throw new Error('Product not found');
    
    const variant = product.variants.find(v => v.id === variantId);
    if (!variant) throw new Error('Variant not found');

    const existingItemIndex = cart.items.findIndex(item => item.variantId === variantId);
    if (existingItemIndex >= 0) {
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      const newItem: CartItem = {
        id: `line_${Math.random().toString(36).substring(2, 9)}`,
        productId: product.id,
        variantId: variant.id,
        title: product.title,
        variantTitle: variant.title,
        price: variant.price,
        quantity,
        image: variant.image || product.images[0] || null,
        handle: product.handle
      };
      cart.items.push(newItem);
    }

    this.recalculateCart(cart);
    return cart;
  }

  async updateCart(cartId: string, lineId: string, quantity: number): Promise<Cart> {
    const cart = carts.get(cartId);
    if (!cart) throw new Error('Cart not found');

    const item = cart.items.find(i => i.id === lineId);
    if (item) {
      if (quantity <= 0) {
        cart.items = cart.items.filter(i => i.id !== lineId);
      } else {
        item.quantity = quantity;
      }
      this.recalculateCart(cart);
    }
    return cart;
  }

  async removeFromCart(cartId: string, lineIds: string[]): Promise<Cart> {
    const cart = carts.get(cartId);
    if (!cart) throw new Error('Cart not found');

    cart.items = cart.items.filter(item => !lineIds.includes(item.id));
    this.recalculateCart(cart);
    return cart;
  }

  private recalculateCart(cart: Cart) {
    cart.totalQuantity = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    cart.subtotal = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
}
