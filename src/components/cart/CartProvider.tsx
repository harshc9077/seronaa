'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Cart, CartItem } from '@/types';

interface CartContextType {
  cart: Cart | null;
  isOpen: boolean;
  isLoading: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (variantId: string, quantity?: number) => Promise<void>;
  updateItem: (lineId: string, quantity: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Mock Cart State
  const [cart, setCart] = useState<Cart | null>({
    id: 'mock-cart-1',
    items: [],
    totalQuantity: 0,
    subtotal: 0,
    checkoutUrl: '/checkout'
  });

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addItem = async (variantId: string, quantity = 1) => {
    setIsLoading(true);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setCart(prev => {
      if (!prev) return prev;
      
      const existingItemIndex = prev.items.findIndex(item => item.variantId === variantId);
      const newItems = [...prev.items];
      
      if (existingItemIndex >= 0) {
        newItems[existingItemIndex].quantity += quantity;
      } else {
        // Add a mock item
        newItems.push({
          id: `line-${Date.now()}`,
          productId: 'mock-prod',
          variantId,
          title: 'Mock Product',
          variantTitle: 'Mock Variant',
          price: 1500,
          quantity,
          image: null,
          handle: 'mock-product'
        });
      }
      
      return calculateTotals({ ...prev, items: newItems });
    });
    
    setIsLoading(false);
    openCart();
  };

  const updateItem = async (lineId: string, quantity: number) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 300));
    
    setCart(prev => {
      if (!prev) return prev;
      const newItems = prev.items.map(item => 
        item.id === lineId ? { ...item, quantity: Math.max(1, quantity) } : item
      );
      return calculateTotals({ ...prev, items: newItems });
    });
    
    setIsLoading(false);
  };

  const removeItem = async (lineId: string) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 300));
    
    setCart(prev => {
      if (!prev) return prev;
      const newItems = prev.items.filter(item => item.id !== lineId);
      return calculateTotals({ ...prev, items: newItems });
    });
    
    setIsLoading(false);
  };

  const calculateTotals = (cartData: Cart): Cart => {
    const totalQuantity = cartData.items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cartData.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    return { ...cartData, totalQuantity, subtotal };
  };

  return (
    <CartContext.Provider value={{
      cart,
      isOpen,
      isLoading,
      openCart,
      closeCart,
      addItem,
      updateItem,
      removeItem
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
