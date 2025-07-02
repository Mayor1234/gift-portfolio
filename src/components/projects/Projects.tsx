import { getHomeProjects } from '@/app/services';
import SanityImage from '../SanityImage';
import Link from 'next/link';

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

const ProjectSection = async () => {
  const projects: ProjectType[] = await getHomeProjects();
  if (!projects) return <div>Project not found</div>;

  return (
    <div className="max-w-6xl mx-auto px-5 md:px-0">
      <div>
        <h2 className="uppercase text-pry text-xl font-semibold font-jakarta mb-5">
          My Recent Work
        </h2>
        <p className="text-gray-600 mb-8">
          Explore my latest projects that blend modern aesthetics with
          functional design.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
          {projects.map((project, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden transition-shadow duration-300 ease-linear"
            >
              <Link href={`/projects/${project.slug.current}`}>
                <div>
                  <SanityImage
                    image={{ asset: project.gallery[0].asset }}
                    alt={project.gallery[0].alt}
                    width={1074}
                    height={100}
                    className="rounded-lg shadow-xl object-cover w-full h-60"
                    priority
                  />
                </div>
                <div className="text-lg text-pry font-medium leading-snug transition-all duration-300 ease-linear my-3">
                  <h3 className="text-lg text-gray-800 font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex flex-wrap  gap-2 w-full">
                    {project.categories.map(
                      (category: { _id: string; title: string }) => (
                        <span
                          key={category._id}
                          className="bg-pry text-light tracking-wide px-2 py-1 rounded-full mr-2 font-inter font-medium shadow-md"
                        >
                          {category.title}
                        </span>
                      )
                    )}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
