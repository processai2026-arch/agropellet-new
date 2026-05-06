import {defineType, defineField} from 'sanity'

export const solutionSchema = defineType({
  name: 'solution',
  title: 'Solutions',
  type: 'document',
  fields: [
    defineField({
      name: 'iconName',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon: Flame | TrendingDown | Truck | Leaf | Shield',
    }),
    defineField({name: 'title', title: 'Solution Title', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
    defineField({name: 'highlight', title: 'Highlight Badge Text', type: 'string'}),
    defineField({name: 'order', title: 'Sort Order', type: 'number'}),
  ],
  preview: {select: {title: 'title', subtitle: 'highlight'}},
})
