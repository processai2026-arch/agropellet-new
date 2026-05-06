import {defineType, defineField} from 'sanity'

export const testimonialSchema = defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Client Name', type: 'string'}),
    defineField({name: 'role', title: 'Role / Company', type: 'string'}),
    defineField({name: 'quote', title: 'Testimonial Quote', type: 'text', rows: 4}),
    defineField({
      name: 'stars',
      title: 'Star Rating',
      type: 'number',
      description: '1–5',
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({name: 'order', title: 'Sort Order', type: 'number'}),
  ],
  preview: {select: {title: 'name', subtitle: 'role'}},
})
