'use client';

import getYouTubeId from 'get-youtube-id';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { PortableTextBlock } from '@portabletext/types';
import { PortableText } from '@portabletext/react';
import SanityImage from './SanityImage';

interface ImageType {
  _key: string;
  _type: 'image';
  asset?: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  caption?: string;
}

const components = {
  types: {
    image: ({ value }: { value: ImageType }) => {
      if (!value?.asset?._ref) return null;

      const dimensions = value.asset._ref.match(/-(\d+)x(\d+)-/);
      const width = dimensions ? parseInt(dimensions[1]) : 1200;
      const height = dimensions ? parseInt(dimensions[2]) : 500;

      return (
        <figure className="my-6" key={value._key}>
          <SanityImage
            image={{ asset: value.asset }}
            alt={value.alt || ''}
            width={width}
            height={height}
            className="rounded-lg w-full max-h-[500px]"
          />

          {value.caption && (
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },

    youtube: (node: { value: { url: string } }) => {
      const url = node.value.url;
      const id = getYouTubeId(url) as string;

      return (
        <div className="py-12 rounded-lg overflow-hidden">
          <LiteYouTubeEmbed id={id} title="Youtube video" />
        </div>
      );
    },
  },

  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="ml-10 py-5 list-disc space-y-3">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="ml-10 py-5 list-decimal space-y-3">{children}</ol>
    ),
  },

  block: {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="text-4xl md:text-5xl py-6 text-gray-800 font-bold">
        {children}
      </h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-3xl md:text-4xl py-5 text-gray-800 font-bold">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-2xl md:text-3xl pt-4 pb-3 text-gray-800 font-bold">
        {children}
      </h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="text-xl md:text-2xl py-3 text-gray-800 font-semibold">
        {children}
      </h4>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="py-2 text-gray-700 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 my-6 italic text-gray-600">
        {children}
      </blockquote>
    ),
  },

  marks: {
    link: ({
      children,
      value,
    }: {
      children: React.ReactNode;
      value?: { slug?: { current: string } };
    }) => {
      const href = value?.slug?.current ? `/${value.slug.current}` : '#';
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
  },
};

export default function PortableTexComponent({
  value,
}: {
  value: PortableTextBlock[];
}) {
  console.log(value);
  return (
    <div>
      <PortableText value={value} components={components} />
    </div>
  );
}
