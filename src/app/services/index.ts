import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

export async function getPost() {
  /**
   * Fetches all posts from Sanity.
   * @returns {Promise<Array>} An array of posts.
   */
  const query = groq`*[_type=='post']{
    ...,
    author->{image, name},
    categories[]->,
  } | order(_createdAt desc)[0...3] 
  `;
  const data = await client.fetch(query);
  return data;
}

export async function getPostBySlug(slug: string) {
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      author->{image, name},
      categories[]->,
      mainImage {
        asset -> {
          _ref,
          _type
        },
        alt
      },

      body[] {
        ...,
        _type == "image" => {
          ...,
          asset-> {
            _ref,
            _type,
            metadata { dimensions }
          }
        }
      },
      publishedAt,

    }`;

  const data = await client.fetch(query, { slug });
  return data;
}

export async function getAllPosts() {
  /**
   * Fetches all posts from Sanity.
   * @returns {Promise<Array>} An array of all posts.
   */
  const query = groq`*[_type=='post']{
    ...,
    author->{image, name},
    categories[]->,
  } | order(publishedAt desc)`;
  const data = await client.fetch(query);
  return data;
}

export async function getAllPostsSlugs() {
  /**
   * Fetches all post slugs from Sanity.
   * @returns {Promise<Array>} An array of objects containing post slugs.
   */
  const query = groq`*[_type=='post']{
    'slug': slug.current
  }`;
  const data = await client.fetch(query);
  return data;
}

export async function getPostsByCategory(category: string) {
  /**
   * Fetches posts by category from Sanity.
   * @param {string}
   category - The category to filter posts by.
   * @returns {Promise<Array>} An array of posts in the specified category.
   */
  const query = groq`*[_type=='post' && $category in categories[]->title]{
    ...,
    author->{image, name},
    categories[]->,
  } | order(publishedAt desc)`;
  const data = await client.fetch(query, { category });
  return data;
}

export async function getRecentPosts() {
  const query = groq`*[_type=='post'] | order(publishedAt desc)[0...3] {
  ...,
  author->{image, name},
  categories[]->,
} | order(publishedAt desc)`;
  const data = await client.fetch(query);
  return data;
}

// Projects Query

// get all projects
export async function getAllProjects() {
  /**
   * Fetches all posts from Sanity.
   * @returns {Promise<Array>} An array of all posts.
   */
  const query = groq`*[_type=='project']{
    ...,
    categories[]->,
  } | order(publishedAt desc)`;
  const data = await client.fetch(query);
  return data;
}

// Get Home Projects
export async function getHomeProjects() {
  /**
   * Fetches all posts from Sanity.
   * @returns {Promise<Array>} An array of posts.
   */
  const query = groq`*[_type=='project'] | order(publishedAt desc)[0...3] {
    ...,
    categories[]->,
  } | order(publishedAt desc)`;
  const data = await client.fetch(query);
  return data;
}

export async function getProjectBySlug(slug: string) {
  const query = groq`*[_type == "project" && slug.current == $slug][0]{
    ...,
    categories[]->,
    publishedAt,

  }`;

  const data = await client.fetch(query, { slug });
  return data;
}
