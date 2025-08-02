import { createClient } from '@sanity/client';

/**
 * Sanity client configuration
 *
 * The project ID and dataset are injected via environment variables. When
 * deployed to Netlify you can configure these in your project settings.
 * The `useCdn` flag tells the client to use Sanity’s CDN for faster
 * response times during build. You may disable it when previewing drafts.
 */
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-05-01',
  useCdn: true,
});

/**
 * Query helper
 *
 * A small helper that wraps the Sanity client’s `fetch` method for
 * brevity. It accepts a GROQ query and optional parameters.
 */
export async function sanityFetch(query, params = {}) {
  return sanityClient.fetch(query, params);
}