import { defineField, defineType } from 'sanity';

/**
 * Post schema
 *
 * Represents a blog post or article. Slugs are generated from titles
 * automatically. The main image is optional but recommended for cards and
 * meta tags. Portable Text allows for rich content in the body.
 */
export default defineType({
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      description: 'Short summary used in previews and meta descriptions',
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      title: 'Main image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishedAt',
      media: 'mainImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : '',
        media,
      };
    },
  },
});