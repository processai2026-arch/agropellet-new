import {defineType, defineField} from 'sanity'

export const productSchema = defineType({
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Product Name', type: 'string'}),
    defineField({name: 'description', title: 'Product Description', type: 'text', rows: 2}),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
  ],
  preview: {select: {title: 'name', media: 'image'}},
  orderings: [
    {
      title: 'Sort Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})
