import { defineField, defineType } from 'sanity';

/**
 * Market schema
 *
 * Defines a market served by Catalyst with a title, slug, description and image.
 */
export default defineType({
  name: 'market',
  type: 'document',
  title: 'Market',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'description', type: 'text', title: 'Description' }),
    defineField({ name: 'image', type: 'image', title: 'Image', options: { hotspot: true } }),
  ],
  preview: {
    select: { title: 'title', media: 'image' },
  },
});