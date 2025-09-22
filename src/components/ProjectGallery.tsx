'use client';

import SanityImage from '@/components/SanityImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface GalleryImage {
  asset: { _ref: string; _type: 'reference' };
  alt: string;
}

interface ProjectGalleryProps {
  gallery: GalleryImage[];
}

const ProjectGallery = ({ gallery }: ProjectGalleryProps) => {
  if (!gallery || gallery.length === 0) {
    return null;
  }

  // If only one image, show without Swiper
  if (gallery.length === 1) {
    return (
      <SanityImage
        image={{ asset: gallery[0].asset }}
        alt={gallery[0].alt || 'Project image'}
        width={1074}
        height={500}
        className="rounded-lg aspect-video object-cover w-full"
        priority
      />
    );
  }

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="rounded-lg overflow-hidden"
        style={
          {
            '--swiper-navigation-color': '#374151',
            '--swiper-pagination-color': '#374151',
            '--swiper-navigation-size': '24px',
          } as React.CSSProperties
        }
      >
        {gallery.map((image, index) => (
          <SwiperSlide key={index}>
            <SanityImage
              image={{ asset: image.asset }}
              alt={image.alt || `Project image ${index + 1}`}
              width={1074}
              height={500}
              className="w-full aspect-video object-cover"
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          background: rgba(255, 255, 255, 0.8);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 0.95);
          transform: scale(1.1);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 16px;
          font-weight: bold;
        }

        .swiper-pagination {
          bottom: 12px !important;
        }

        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.7);
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background: white;
        }

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default ProjectGallery;
