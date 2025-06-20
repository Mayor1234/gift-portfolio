import React from 'react';

function BlogBanner() {
  return (
    <div className="max-w-6xl mx-auto px-5 pt-10 md:pt-12 md:px-0 w-full">
      <div className='bg-[url("/images/blog-banner2.jpg")] bg-cover bg-top h-64 md:h-80 w-full md:w-6xl relative rounded-3xl'>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-90 rounded-3xl">
          <div className="h-full w-full flex flex-col items-center justify-center text-center z-10">
            <h2 className="text-2xl md:text-4xl font-jakarta font-semibold text-light">
              Design Insights to Transform Your Space
            </h2>
            <p className="text-lg md:text-2xl text-light font-inter font-medium mt-4">
              Discover Trends, Tips & Inspiration for Every Home
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogBanner;
