import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Modern Waiting Room',
    category: 'Living Room',
    image: '/images/waiting_room.jpg',
    description: 'A contemporary cozy design.',
  },
  {
    id: 2,
    title: 'Minimalist Room',
    category: 'Room',
    image: '/images/room.jpg',
    description: 'Clean lines and natural light.',
  },
  {
    id: 3,
    title: 'Luxury Bedroom',
    category: 'Bedroom',
    image: '/images/bed_room3.JPG',
    description: 'Plush textures and ambient lighting.',
  },
];

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-5 md:px-0">
      <div>
        <h2 className="uppercase text-pry text-xl font-semibold font-jakarta mb-6">
          My Trendy Work
        </h2>
        <p className="text-gray-600 mb-10">
          Explore my latest projects that blend modern aesthetics with
          functional design.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg  overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-linear"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1074}
                height={100}
                className="w-full h-60 object-cover"
              />
              <div className="text-lg text-pry font-medium tracking-wide leading-snug transition-all duration-300 ease-linear group-hover:opacity-70 px-4 py-6">
                <h3 className="text-lg text-gray-800 font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 mb-4">{project.description}</p>
                <span className="text-sm text-pry bg-gray-200 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
