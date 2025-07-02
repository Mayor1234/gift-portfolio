import Link from 'next/link';
import React from 'react';
import { getAllProjects } from '../services';
import SanityImage from '@/components/SanityImage';

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

const page = async () => {
  const projects: ProjectType[] = await getAllProjects();
  if (!projects) {
    return <div className="py-20 text-center">Projects not found</div>;
  }
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-0">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-10">Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Link
              key={i}
              href={`/projects/${project.slug.current}`}
              className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-linear"
            >
              <div className="h-64 overflow-hidden">
                <SanityImage
                  image={{ asset: project.gallery[0].asset }}
                  alt={project.gallery[0].alt}
                  width={1074}
                  height={100}
                  className="rounded-t-lg shadow-xl object-cover w-full h-60 group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              <div className="bg-white dark:bg-gray-900 p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>
                {project.categories?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((cat, i: number) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full"
                      >
                        {cat.title}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default page;
