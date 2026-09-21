export interface ShopifyImage {
  id: string;
  url: string;
  altText: string;
  width: number;
  height: number;
}

export interface ShopifyMoney {
  amount: string;
  currencyCode: string;
}

export interface ShopifyProductOption {
  id: string;
  name: string;
  values: string[];
}

export interface ShopifyProductVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  price: ShopifyMoney;
  compareAtPrice: ShopifyMoney | null;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  image?: ShopifyImage;
}

export interface ShopifyProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  productType: string;
  vendor: string;
  availableForSale: boolean;
  tags: string[];
  options: ShopifyProductOption[];
  priceRange: {
    maxVariantPrice: ShopifyMoney;
    minVariantPrice: ShopifyMoney;
  };
  compareAtPriceRange?: {
    maxVariantPrice: ShopifyMoney;
    minVariantPrice: ShopifyMoney;
  };
  variants: {
    edges: {
      node: ShopifyProductVariant;
    }[];
  };
  images: {
    edges: {
      node: ShopifyImage;
    }[];
  };
  collections: {
    edges: {
      node: {
        handle: string;
      };
    }[];
  };
}

export interface ShopifyCollection {
  id: string;
  handle: string;
  title: string;
  description: string;
  image: ShopifyImage | null;
  products: {
    edges: {
      node: ShopifyProduct;
    }[];
  };
}

export interface ShopifyCartLine {
  id: string;
  quantity: number;
  cost: {
    totalAmount: ShopifyMoney;
  };
  merchandise: {
    id: string;
    title: string;
    product: {
      id: string;
      handle: string;
      title: string;
    };
    image?: ShopifyImage;
  };
}

export interface ShopifyCart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: {
    subtotalAmount: ShopifyMoney;
  };
  lines: {
    edges: {
      node: ShopifyCartLine;
    }[];
  };
}
