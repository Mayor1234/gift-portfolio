import PortableTexComponent from '@/components/PortableText';
import SanityImage from '@/components/SanityImage';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { type Metadata } from 'next';

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const query = groq`
      *[_type=='post' && slug.current == $slug][0]{
          ...,
          author->{image, name},
          categories[]->
      }
      `;
    const post = await client.fetch(query, { slug });

    if (!post) {
      return {
        title: 'Not Found',
        description: "The page you're looking for does not exist",
      };
    }
    return {
      title: post.title,
      description: post.description,
    };
  } catch {
    return {
      title: 'Not Found',
      description: "The page you're looking for does not exist",
    };
  }
}

export async function generateStaticParams() {
  const query = groq`
      *[_type=='post']{
          slug
      }
      `;

  const posts = await client.fetch(query);
  const paths = posts.map(
    (post: { slug: { current: string } }) => post.slug.current
  );

  return paths.map((slug: string) => ({
    slug,
  }));
}

const PostDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const query = groq`
    *[_type=='post' && slug.current == $slug][0]{
        ...,
        author->{image, name},
        categories[]->,

    }
    `;
  const post = await client.fetch(query, { slug });

  if (!post) {
    return <div className="py-20 text-center">Post not found</div>;
  }

  return (
    <section className="max-w-6xl mx-auto my-10 flex flex-col lg:flex-row">
      <article className="max-w-3xl px-5 h-full lg:flex-[3]">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-2xl  lg:text-3xl font-medium pb-4">
            {post.title}
          </h2>
          <p className="pb-3">{post.description}</p>
          <div className="flex text-sm font-light text-gray-600 uppercase pb-3">
            <p className="pr-2">by {post.author.name}</p>
            <span className='before:content-["\a·\a"]'>
              {new Date(post._createdAt).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </div>
          {post.mainImage && (
            <SanityImage
              image={post.mainImage.asset}
              alt={post.mainImage.alt || post.title}
              width={1074}
              height={100}
              className="rounded-lg mb-8 aspect-video"
              priority
            />
          )}
          <p className="text-gray-600 text-sm mb-4">
            {post.categories.map((category: { _id: string; title: string }) => (
              <span
                key={category._id}
                className="bg-pry text-light tracking-wide px-2 py-1 rounded-full mr-2 font-inter font-medium shadow-md"
              >
                {category.title}
              </span>
            ))}
          </p>
          <div className="prose max-w-none leading-relaxed text-gray-600 font-roboto">
            {/* Render portable text content */}
            {post.body && <PortableTexComponent value={post.body} />}
          </div>
        </div>
      </article>
    </section>
  );
};

export default PostDetail;
