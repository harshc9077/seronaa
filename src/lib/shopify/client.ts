const domain = process.env.SHOPIFY_STORE_DOMAIN;
const accessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const endpoint = `https://${domain}/api/2024-01/graphql.json`;

export async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  if (!domain || !accessToken) {
    throw new Error('Shopify domain or token is missing');
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': accessToken,
      },
      body: JSON.stringify({ query, variables }),
      cache: 'no-store'
    });

    const body = await response.json();

    if (body.errors) {
      throw new Error(body.errors[0].message || 'Error fetching from Shopify');
    }

    return body.data;
  } catch (error) {
    console.error('Error fetching from Shopify:', error);
    throw error;
  }
}
