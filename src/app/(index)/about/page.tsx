import React from 'react';
import Image from 'next/image';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <div className="w-24 h-1 bg-pry mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Image */}
          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <div className="absolute inset-0 bg-indigo-100 flex items-center justify-center">
                <span className="text-4xl text-pry font-bold">
                  <Image
                    src={'/images/gift_pic.png'}
                    alt="about image"
                    width={200}
                    height={200}
                    className="h-60 md:h-full w-full object-cover object-center"
                  />
                </span>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Hi, I&apos;m{' '}
              <span className="text-pry">Monica Gift Thompson</span>, an
              interior designer and 3D visualizer who brings creative concepts
              to life through design and immersive visuals.
            </h2>

            <p className="text-gray-600 leading-relaxed">
              I specialize in creating interior spaces that are not just
              beautiful, but also functional and emotionally engaging. Whether
              I&apos;m working on a residential layout, commercial concept, or
              virtual visualization, my goal is always the same: to capture the
              mood, purpose, and personality of a space.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Technical Expertise
              </h3>
              <p className="text-gray-600 mb-4">
                With hands-on experience using Coohom, SketchUp, and 3Ds Max, I
                deliver clear, detailed, and photorealistic renderings that help
                clients, developers, and design teams make confident decisions
                before construction begins.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                  Coohom
                </span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                  SketchUp
                </span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                  3Ds Max
                </span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                  Photorealistic Rendering
                </span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              I&apos;ve worked on a variety of freelance interior design and
              visualization projects, collaborating with homeowners, small
              firms, and creative teams to bring their ideas to life. Each
              project has strengthened my eye for detail, spatial planning, and
              storytelling through design.
            </p>

            <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-pry">
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Current Availability
              </h3>
              <p className="text-gray-600">
                I&apos;m currently open to remote freelance projects and
                full-time design or visualization roles where I can contribute
                meaningfully, grow professionally, and create impactful
                environments.
              </p>
            </div>

            <div className="text-center md:text-left">
              <button className="px-6 py-3 bg-pry text-white font-medium rounded-3xl hover:opacity-70 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Let us Work Together
              </button>
              <div className="mt-4 space-y-1">
                <p className="text-gray-600">
                  <span className="font-medium">Email:</span>{' '}
                  giftthompson65@gmail.com
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Phone:</span> +234 8148554538
                </p>
              </div>
              <p className="mt-3 text-gray-500 italic">
                Let us turn your vision into a space that truly speaks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
