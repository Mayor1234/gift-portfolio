import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative z-20 flex flex-col items-center justify-center bg-gradient-to-b from-sec via-sec to-secondary text-gray-700 min-h-[75vh] px-6 md:px-0">
      {/* Grid Overlay */}
      <div className="absolute -z-20 inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_2px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_2px,transparent_1px)] bg-[size:110px_110px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between md:flex-row w-full h-full">
        <div className="py-10 text-start text-[#fafafa] md:max-w-3xl h-full w-full md:py-0">
          <p className="text-sm md:text-lg font-jakarta leading-tight drop-shadow-md mb-4 border text-light border-light w-fit px-5 py-2 rounded-full">
            Interior designer
          </p>
          <h1 className="text-2xl md:text-5xl font-bold font-poppins leading-tight drop-shadow-md mb-4">
            I Help Breathe Life
            <br className="hidden md:block" /> Into Spaces, By Elevating{' '}
            <br className="hidden md:block" />
            Lifestyles
          </h1>
          <div className="mt-8">
            <button className="bg-[#fff2e6] text-[#994C12] text-lg font-semibold font-jakarta border border-button px-3 py-2.5 rounded-full shadow hover:bg-[#f7e0c9] transition-all duration-300 ease-linear cursor-pointer md:py-3 md:px-5 md:text-xl">
              Let’s Design Together
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 xl:w-3/5 2xl:w-3/4 h-full flex items-center justify-center">
          <Image
            src="/images/gift_pic.png"
            width={700}
            height={500}
            alt="Hero image"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
// This component defines a hero section with a gradient background, a title, a subtitle, and a button.
