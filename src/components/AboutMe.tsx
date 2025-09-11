// import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

const HomeAboutSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-6 flex-1">
            <h2 className="text-gray-900 text-xl md:text-3xl font-semibold font-jakarta mb-6 capitalize">
              Crafting <span className="text-pry">aesthetically</span> pleasing
              and functional spaces
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              I help clients and design teams bring their ideas to life, through
              thoughtful interior design and high-quality 3D visualization.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-5 w-5 bg-indigo-100 rounded-full flex items-center justify-center">
                    <div className="h-2 w-2 bg-pry rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600">
                  Specializing in residential and commercial spaces that balance
                  beauty with practicality
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-5 w-5 bg-indigo-100 rounded-full flex items-center justify-center">
                    <div className="h-2 w-2 bg-pry rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600">
                  Creating photorealistic renderings that help visualize the
                  final space
                </p>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-lg font-medium text-gray-700">
                I&apos;m open to remote freelance projects as well as full time
                design and visualization roles.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="bg-pry text-[#fff] px-5 py-2 rounded-full font-jakarta font-medium cursor-pointer"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          {/* Image Section - Replace with your actual image */}
          {/* <div className="h-full rounded-3xl overflow-hidden shadow-md shadow-pry/10 flex-1">
            <div className="flex items-center justify-center">
              <Image
                src="/images/gift_pic.png"
                width={500}
                height={500}
                alt="Hero image"
                priority
                className="h-full object-center object-cover"
              />
            </div>
          </div> */}
          {/* <div className="md:col-span-1 flex justify-center h-full">
            <div className="relative w-64 h-64 md:w-80 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <div className="absolute inset-0 bg-indigo-100 flex items-center justify-center h-full">
                <Image
                  src={'/images/gift-pic.png'}
                  alt="about image"
                  width={200}
                  height={200}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;
