'use client';

import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

interface SanityImageProps {
  image: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function SanityImage({
  image,
  alt,
  width,
  height,
  className,
}: SanityImageProps) {
  const imageUrl = urlFor(image)
    .width(width || 1200)
    .quality(80)
    .auto('format')
    .url();

  return (
    <Image
      src={imageUrl || ''}
      alt={alt || ''}
      width={width}
      height={height}
      className={className}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
      placeholder="blur"
      blurDataURL={urlFor(image).width(20).quality(20).blur(10).url()}
    />
  );
}
