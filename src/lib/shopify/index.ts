import { DataProvider } from './provider';
import { MockProvider } from './mock-provider';
import { ShopifyProvider } from './shopify-provider';

export function getDataProvider(): DataProvider {
  const domain = process.env.SHOPIFY_STORE_DOMAIN;
  const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
  
  if (domain && token) {
    return new ShopifyProvider();
  }
  return new MockProvider();
}

export type { DataProvider };
export * from '@/types';
