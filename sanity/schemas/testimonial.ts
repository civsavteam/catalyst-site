import { defineField, defineType } from 'sanity';

/**
 * Testimonial schema
 *
 * Stores a client quote along with their name, title and portrait. These
 * documents can be referenced in the home page or other pages.
 */
export default defineType({
  name: 'testimonial',
  type: 'document',
  title: 'Testimonial',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Name', validation: (Rule) => Rule.required() }),
    defineField({ name: 'company', type: 'string', title: 'Company/Title' }),
    defineField({ name: 'quote', type: 'text', title: 'Quote', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Portrait',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'company', media: 'image' },
  },
});