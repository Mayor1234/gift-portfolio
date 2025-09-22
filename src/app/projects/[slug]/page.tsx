import { getProjectBySlug } from '@/app/services';
import ProjectGallery from '@/components/ProjectGallery';
import { client } from '@/sanity/lib/client';
import BackButtion from '@/utils/BackButtion';
import { type Metadata } from 'next';
import { groq } from 'next-sanity';

export const revalidate = 60;

interface ProjectType {
  title: string;
  slug: { current: string };
  description: string;
  categories: {
    _id: string;
    title: string;
    description: string;
  }[];
  gallery: { asset: { _ref: string; _type: 'reference' }; alt: string }[];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const project = await getProjectBySlug(slug);
    if (!project) {
      return {
        title: 'Not Found',
        description: "The page you're looking for does not exist",
      };
    }
    return {
      title: project.title,
      description: project.description,
    };
  } catch {
    return {
      title: 'Not Found',
      description: "The page you're looking for does not exist",
    };
  }
}

// Generate Static Path
export async function generateStaticParams() {
  const query = groq`
      *[_type=='project']{
          slug
      }
      `;

  const project = await client.fetch(query);
  const paths = project.map(
    (project: { slug: { current: string } }) => project.slug.current
  );

  return paths.map((slug: string) => ({
    slug,
  }));
}

const ProjectDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const project: ProjectType = await getProjectBySlug(slug);

  return (
    <div className="max-w-6xl mx-auto px-5 md:px-0">
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Back Button */}
        <BackButtion />
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {project.title}
          </h1>
          {project.categories && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.categories.map((category, index: number) => (
                <span
                  key={index}
                  className="inline-block text-sm py-1 px-2 bg-pry text-light tracking-wide  rounded-full mr-2 font-inter font-medium shadow-md"
                >
                  {category && category.title}
                </span>
              ))}
            </div>
          )}
          <p className="text-base text-gray-500 max-w-2xl font-poppins">
            {project.description}
          </p>
        </div>

        {/* Image Gallery with Swiper */}
        <div className="rounded-2xl shadow-lg mb-8">
          {project.gallery && project.gallery.length > 0 && (
            <ProjectGallery gallery={project.gallery} />
          )}
        </div>
      </main>
    </div>
  );
};

export default ProjectDetailPage;
