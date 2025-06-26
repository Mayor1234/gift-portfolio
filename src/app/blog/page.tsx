import Posts from '@/components/Posts';

export const metadata = {
  title: 'Blog Posts',
  description: 'A collection of blog posts',
};

export const dynamic = 'force-dynamic';
export const revalidate = 60;
export const fetchCache = 'force-no-store';
export const preferredRegion = 'auto';

export default async function BlogPage() {
  return (
    <main>
      <Posts />
    </main>
  );
}
