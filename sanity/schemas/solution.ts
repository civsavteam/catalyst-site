import { defineField, defineType } from 'sanity';

/**
 * Solution schema
 *
 * Outlines a service offering, such as advertising, data insights or
 * creative services. You can extend this with more fields like call
 * to action links or case studies.
 */
export default defineType({
  name: 'solution',
  type: 'document',
  title: 'Solution',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title', validation: (Rule) => Rule.required() }),
    defineField({ name: 'description', type: 'text', title: 'Description' }),
    defineField({ name: 'image', type: 'image', title: 'Image', options: { hotspot: true } }),
  ],
  preview: {
    select: { title: 'title', media: 'image' },
  },
});