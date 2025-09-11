// import Image from 'next/image';

// const HeroSection = () => {
//   return (
//     <section className="relative z-20 flex flex-col items-center justify-center bg-gradient-to-b from-sec via-sec to-secondary text-gray-700 min-h-[60vh] md:min-h-[75vh] px-6 md:px-0">
//       {/* Grid Overlay */}
//       <div className="absolute -z-20 inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_2px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_2px,transparent_1px)] bg-[size:110px_110px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

//       <div className="max-w-6xl mx-auto flex flex-col items-center  md:flex-row w-full h-full">
//         <div className="py-10 text-start text-[#fafafa] md:max-w-3xl h-full w-full md:py-0">
//           <p className="text-sm md:text-lg font-jakarta leading-tight drop-shadow-md mb-4 border text-light border-light w-fit px-5 py-2 rounded-full">
//             Interior designer
//           </p>
//           <h1 className="text-3xl md:text-5xl font-bold font-poppins leading-snug drop-shadow-md mb-4">
//             I Help Breathe Life
//             <br className="hidden md:block" /> Into Spaces, By Elevating{' '}
//             <br className="hidden md:block" />
//             Lifestyles
//           </h1>
//           <div className="mt-8">
//             <button className="bg-[#fff2e6] text-[#994C12] text-lg font-semibold font-jakarta border border-button px-5 py-2 rounded-full shadow hover:bg-[#f7e0c9] transition-all duration-300 ease-linear cursor-pointer md:py-2.5 md:px-8 md:text-xl">
//               Contact Me
//             </button>
//           </div>
//         </div>
//         <div>
//           <Image
//             src="/images/gift_pic.png"
//             width={700}
//             height={500}
//             alt="Hero image"
//             priority
//             className="object-top"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

'use client';

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';

// const HeroSection = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setIsLoaded(true);

//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100,
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <section className="relative z-20 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-gray-100 min-h-[60vh] md:min-h-[75vh] px-6 md:px-0 overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Floating Orbs */}
//         <div
//           className="absolute w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"
//           style={{
//             top: '10%',
//             left: `${20 + mousePosition.x * 0.02}%`,
//             transform: `translate(-50%, -50%) scale(${1 + mousePosition.x * 0.001})`,
//             transition: 'all 0.3s ease-out',
//           }}
//         />
//         <div
//           className="absolute w-64 h-64 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"
//           style={{
//             top: '60%',
//             right: `${10 + mousePosition.y * 0.02}%`,
//             transform: `translate(50%, -50%) scale(${1 + mousePosition.y * 0.001})`,
//             transition: 'all 0.3s ease-out',
//             animationDelay: '1s',
//           }}
//         />

//         {/* Animated Grid */}
//         <div
//           className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:120px_120px]"
//           style={{
//             transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
//             transition: 'transform 0.3s ease-out',
//           }}
//         />

//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
//       </div>

//       {/* Floating Particles */}
//       {[...Array(6)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute w-2 h-2 bg-white/20 rounded-full animate-bounce"
//           style={{
//             top: `${20 + i * 15}%`,
//             left: `${10 + i * 12}%`,
//             animationDelay: `${i * 0.5}s`,
//             animationDuration: `${3 + i * 0.5}s`,
//           }}
//         />
//       ))}

//       <div className="max-w-6xl mx-auto flex flex-col items-center md:flex-row w-full h-full relative z-10">
//         <div
//           className={`py-10 text-start text-white md:max-w-3xl h-full w-full md:py-0 transform transition-all duration-1000 ease-out ${
//             isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
//           }`}
//         >
//           {/* Badge */}
//           <div className="relative mb-6">
//             <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur opacity-30 animate-pulse" />
//             <p className="relative text-sm md:text-lg font-jakarta leading-tight mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent border border-white/20 backdrop-blur-sm w-fit px-6 py-3 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-default">
//               ✨ Interior Designer
//             </p>
//           </div>

//           {/* Main Headline */}
//           <h1
//             className={`text-3xl md:text-6xl font-bold font-poppins leading-tight mb-6 transform transition-all duration-1200 ease-out ${
//               isLoaded
//                 ? 'translate-y-0 opacity-100'
//                 : 'translate-y-10 opacity-0'
//             }`}
//           >
//             <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent animate-pulse">
//               I Help Breathe Life
//             </span>
//             <br className="hidden md:block" />
//             <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
//               Into Spaces, By Elevating
//             </span>
//             <br className="hidden md:block" />
//             <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
//               Lifestyles
//             </span>
//           </h1>

//           {/* CTA Button */}
//           <div
//             className={`mt-8 transform transition-all duration-1400 ease-out ${
//               isLoaded
//                 ? 'translate-y-0 opacity-100'
//                 : 'translate-y-10 opacity-0'
//             }`}
//           >
//             <div className="relative group">
//               <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-300 group-hover:duration-200 animate-pulse" />
//               <button className="relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg font-semibold font-jakarta px-8 py-3 md:px-10 md:py-4 md:text-xl rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out backdrop-blur-sm border border-white/10">
//                 <span className="relative z-10 flex items-center gap-2">
//                   Contact Me
//                   <svg
//                     className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M17 8l4 4m0 0l-4 4m4-4H3"
//                     />
//                   </svg>
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div
//           className={`relative transform transition-all duration-1000 ease-out ${
//             isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
//           }`}
//         >
//           {/* Floating Frame Effect */}
//           <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl animate-pulse" />

//           {/* Image Container */}
//           <div className="relative group">
//             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
//             <Image
//               src="/images/gift_pic.png"
//               width={700}
//               height={500}
//               alt="Hero image"
//               priority
//               className="object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500 ease-out"
//             />

//             {/* Overlay Glow */}
//             <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400/10 via-transparent to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//           </div>

//           {/* Floating Elements around Image */}
//           <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping" />
//           <div
//             className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce"
//             style={{ animationDelay: '0.5s' }}
//           />
//           <div
//             className="absolute top-1/2 -left-6 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse"
//             style={{ animationDelay: '1s' }}
//           />
//         </div>
//       </div>

//       {/* Bottom Gradient Fade */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
//     </section>
//   );
// };

// export default HeroSection;

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative z-20 flex flex-col items-center justify-center bg-gradient-to-br from-sec via-sec to-secondary text-gray-100 min-h-[60vh] md:min-h-[75vh] px-6 md:px-0 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-white/20 to-secondary/20 rounded-full blur-3xl animate-pulse"
          style={{
            top: '10%',
            left: `${20 + mousePosition.x * 0.02}%`,
            transform: `translate(-50%, -50%) scale(${1 + mousePosition.x * 0.001})`,
            transition: 'all 0.3s ease-out',
          }}
        />
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"
          style={{
            top: '60%',
            right: `${10 + mousePosition.y * 0.02}%`,
            transform: `translate(50%, -50%) scale(${1 + mousePosition.y * 0.001})`,
            transition: 'all 0.3s ease-out',
            animationDelay: '1s',
          }}
        />

        {/* Animated Grid */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:120px_120px]"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
      </div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full animate-bounce"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 12}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + i * 0.5}s`,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto flex flex-col items-center md:flex-row w-full h-full relative z-10">
        <div
          className={`py-10 text-start text-white md:max-w-3xl h-full w-full md:py-0 transform transition-all duration-1000 ease-out ${
            isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}
        >
          {/* Badge */}
          <div className="relative mb-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-sec to-secondary rounded-full blur opacity-30 animate-pulse" />
            <p className="relative text-sm md:text-lg font-jakarta leading-tight mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent border border-white/20 backdrop-blur-sm w-fit px-6 py-3 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-default">
              ✨ Interior Designer
            </p>
          </div>

          {/* Main Headline */}
          <h1
            className={`text-3xl md:text-5xl font-bold font-poppins leading-tight mb-6 transform transition-all duration-1200 ease-out ${
              isLoaded
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="bg-gradient-to-r from-[#fff] via-[#f6f7f8] to-[#f3f4f5] bg-clip-text text-transparent animate-pulse">
              I Help Breathe Life
            </span>
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-pry via-[#fff] to-pry bg-clip-text text-transparent">
              Into Spaces, By Elevating
            </span>
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#fff] via-[#fff] to-[#f6f7f8] bg-clip-text text-transparent">
              Lifestyles
            </span>
          </h1>

          {/* CTA Button */}
          <div
            className={`mt-8 transform transition-all duration-1400 ease-out ${
              isLoaded
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-sec rounded-full blur opacity-30 group-hover:opacity-100 transition duration-300 group-hover:duration-200 animate-pulse" />
              <button className="relative bg-gradient-to-r from-secondary to-secondary hover:from-secondary hover:to-sec text-white text-lg font-semibold font-jakarta px-8 py-3 md:px-10 md:py-4 md:text-xl rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out backdrop-blur-sm border border-white/10">
                <span className="relative z-10 flex items-center gap-2">
                  Contact Me
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div
          className={`relative transform transition-all duration-1000 ease-out ${
            isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}
        >
          {/* Floating Frame Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-secondary/20 rounded-3xl blur-xl animate-pulse" />

          {/* Image Container */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            <Image
              src="/images/gift_pic.png"
              width={800}
              height={500}
              alt="Hero image"
              priority
              className="object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500 ease-out"
            />

            {/* Overlay Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/10 via-transparent to-pry/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Floating Elements around Image */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#fff] to-secondary rounded-full animate-ping" />
          <div
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-sec to-secondary rounded-full animate-bounce"
            style={{ animationDelay: '0.5s' }}
          />
          <div
            className="absolute top-1/2 -left-6 w-4 h-4 bg-gradient-to-r from-[#fff] to-secondary rounded-full animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary to-transparent" />
    </section>
  );
};

export default HeroSection;
