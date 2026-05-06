import {defineType, defineField} from 'sanity'

export const industrySchema = defineType({
  name: 'industry',
  title: 'Industries',
  type: 'document',
  fields: [
    defineField({
      name: 'iconName',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon: Factory | UtensilsCrossed | Shirt | Blocks | Droplets | Wheat',
    }),
    defineField({name: 'name', title: 'Industry Name', type: 'string'}),
    defineField({name: 'description', title: 'Short Description', type: 'text', rows: 2}),
    defineField({name: 'order', title: 'Sort Order', type: 'number'}),
  ],
  preview: {select: {title: 'name', subtitle: 'description'}},
})
