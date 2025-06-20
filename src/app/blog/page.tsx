import Posts from '@/components/Posts';
import React from 'react';

const page = () => {
  return (
    <main>
      <Posts />
    </main>
  );
};

export default page;
export const metadata = {
  title: 'Blog Posts',
  description: 'A collection of blog posts',
};
export const dynamic = 'force-dynamic'; // This ensures the page is always revalidated
export const revalidate = 60; // Revalidate every 60 seconds
export const fetchCache = 'force-no-store'; // Disable caching for this page
export const runtime = 'edge'; // Use edge runtime for better performance
export const preferredRegion = 'auto'; // Automatically select the best region for deployment
// This configuration ensures that the page is always fresh and served from the edge,
// providing the best performance for users globally.
// export const fetchPolicy = 'no-cache'; // Ensure no caching at the fetch level
// export const next = {
//   revalidate: 60, // Revalidate every 60 seconds
//   cache: 'no-store', // Disable caching for this page
//   dynamic: 'force-dynamic', // Force dynamic rendering
//   runtime: 'edge', // Use edge runtime for better performance
//   preferredRegion: 'auto', // Automatically select the best region for deployment
//   fetchCache: 'force-no-store', // Disable caching for this page
//   fetchPolicy: 'no-cache', // Ensure no caching at the fetch level
//   metadata: {
//     title: 'Blog Posts',
//     description: 'A collection of blog posts',
//   },
// };
