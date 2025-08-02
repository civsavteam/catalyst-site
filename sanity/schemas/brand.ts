import { defineField, defineType } from 'sanity';

/**
 * Brand schema
 *
 * Represents one of the media brands under the Catalyst umbrella. Each
 * brand can be associated with a market and include a short description
 * and an optional link or slug.
 */
export default defineType({
  name: 'brand',
  type: 'document',
  title: 'Brand',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Name', validation: (Rule) => Rule.required() }),
    defineField({ name: 'description', type: 'text', title: 'Description' }),
    defineField({ name: 'website', type: 'url', title: 'Website' }),
    defineField({ name: 'logo', type: 'image', title: 'Logo', options: { hotspot: true } }),
  ],
  preview: {
    select: { title: 'name', media: 'logo' },
  },
});