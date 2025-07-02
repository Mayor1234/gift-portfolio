import { DocumentTextIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 3,
      description: 'Short summary for cards or previews',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    // defineField({
    //   name: 'mainImage',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    //   fields: [
    //     defineField({
    //       name: 'alt',
    //       type: 'string',
    //       title: 'Alternative text',
    //     }),
    //   ],
    // }),
    defineField({
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'caption',
              type: 'string',
              title: 'Caption / Description',
            }),
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              description: 'Important for accessibility',
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: { type: 'category' } })],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    prepare({ title, media }) {
      return {
        title,
        media,
        subtitle: 'Project entry',
      };
    },
  },
});
