import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  // token: process.env.SANITY_API_READ_TOKEN,
  // Use a token if you need to read unpublished documents
  // or if you need to read documents from a private dataset
  // If you don't need to read unpublished documents, you can remove the token
  // and use the default public dataset
  // ignoreBrowserTokenWarning: true, // Ignore the warning about using a token in the browser
  // This is useful if you are using a token for reading unpublished documents
});
