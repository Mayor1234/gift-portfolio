import Link from 'next/link';
import { getAllPosts } from '../app/services/index';
import SanityImage from './SanityImage';

interface Post {
  _id: string;
  publishedAt: string;
  createdAt: string;
  title: string;
  author: {
    name: string;
    image: string;
  };
  description: string;
  mainImage: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt: string;
    _type: string;
  };
  categories: {
    title: string;
    description: string;
  };
  slug: {
    current: string;
    _type: string;
  };
  body: [object];
}

const Posts = async () => {
  const posts: Post[] = await getAllPosts();

  if (!posts) return <div>Post not found</div>;
  return (
    <section className="max-w-6xl mx-auto my-20 px-5 md:px-0">
      <div className="grid grid-cols-1 gap-10 md:gap-5 md:grid-cols-2 lg:grid-cols-3 w-full h-full">
        {posts?.map((post, index) => (
          <div key={index} className="group">
            <Link href={`blog/post/${post.slug.current}`}>
              <div>
                <SanityImage
                  image={{ asset: post.mainImage.asset }}
                  alt={post.mainImage.alt}
                  width={1074}
                  height={100}
                  className="rounded-lg shadow-xl object-cover w-full h-60"
                  priority
                />
              </div>
              <div className="pt-4 w-full md:px-0">
                <p className="pb-3 text-lg text-pry font-medium tracking-wide leading-snug transition-all duration-300 ease-linear group-hover:opacity-70">
                  {post?.title}
                </p>

                <div className="flex text-sm font-light text-gray-600 capitalize">
                  <p className="pr-2">
                    by{' '}
                    <span className="text-gray-700 font-medium">
                      {post?.author?.name}
                    </span>
                  </p>
                  <span className='before:content-["\a·\a"]'>
                    {new Date(post?.publishedAt).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Posts;
