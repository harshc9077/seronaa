export const PRODUCT_FRAGMENT = `
  fragment ProductFragment on Product {
    id
    handle
    title
    description
    descriptionHtml
    productType
    vendor
    availableForSale
    tags
    options {
      id
      name
      values
    }
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    compareAtPriceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 250) {
      edges {
        node {
          id
          title
          availableForSale
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          selectedOptions {
            name
            value
          }
          image {
            id
            url
            altText
            width
            height
          }
        }
      }
    }
    images(first: 20) {
      edges {
        node {
          id
          url
          altText
          width
          height
        }
      }
    }
    collections(first: 10) {
      edges {
        node {
          handle
        }
      }
    }
  }
`;

export const COLLECTION_FRAGMENT = `
  fragment CollectionFragment on Collection {
    id
    handle
    title
    description
    image {
      id
      url
      altText
      width
      height
    }
  }
`;

export const CART_FRAGMENT = `
  fragment CartFragment on Cart {
    id
    checkoutUrl
    totalQuantity
    cost {
      subtotalAmount {
        amount
        currencyCode
      }
    }
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          cost {
            totalAmount {
              amount
              currencyCode
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              title
              product {
                id
                handle
                title
              }
              image {
                id
                url
                altText
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCTS = `
  query getProducts($first: Int = 20) {
    products(first: $first) {
      edges {
        node {
          ...ProductFragment
        }
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`;

export const GET_PRODUCT_BY_HANDLE = `
  query getProductByHandle($handle: String!) {
    product(handle: $handle) {
      ...ProductFragment
    }
  }
  ${PRODUCT_FRAGMENT}
`;

export const GET_COLLECTIONS = `
  query getCollections($first: Int = 20) {
    collections(first: $first) {
      edges {
        node {
          ...CollectionFragment
        }
      }
    }
  }
  ${COLLECTION_FRAGMENT}
`;

export const GET_COLLECTION_BY_HANDLE = `
  query getCollectionByHandle($handle: String!) {
    collection(handle: $handle) {
      ...CollectionFragment
      products(first: 50) {
        edges {
          node {
            ...ProductFragment
          }
        }
      }
    }
  }
  ${COLLECTION_FRAGMENT}
  ${PRODUCT_FRAGMENT}
`;

export const SEARCH_PRODUCTS = `
  query searchProducts($query: String!, $first: Int = 20) {
    products(first: $first, query: $query) {
      edges {
        node {
          ...ProductFragment
        }
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`;

export const GET_CART = `
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      ...CartFragment
    }
  }
  ${CART_FRAGMENT}
`;

export const CREATE_CART = `
  mutation createCart {
    cartCreate {
      cart {
        ...CartFragment
      }
    }
  }
  ${CART_FRAGMENT}
`;

export const ADD_TO_CART = `
  mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...CartFragment
      }
    }
  }
  ${CART_FRAGMENT}
`;

export const UPDATE_CART = `
  mutation updateCart($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...CartFragment
      }
    }
  }
  ${CART_FRAGMENT}
`;

export const REMOVE_FROM_CART = `
  mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...CartFragment
      }
    }
  }
  ${CART_FRAGMENT}
`;
