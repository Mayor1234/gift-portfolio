import AboutMe from '@/components/AboutMe';
import HeroSection from '@/components/headers/HeroSection';
import ProjectSection from '@/components/projects/Projects';

import RecentPosts from '@/components/RecentPosts';

export default function Home() {
  return (
    <div className="flex flex-col items-stretch justify-between min-h-screen  bg-gray-100">
      <HeroSection />
      <AboutMe />
      <ProjectSection />
      <RecentPosts />
    </div>
  );
}
