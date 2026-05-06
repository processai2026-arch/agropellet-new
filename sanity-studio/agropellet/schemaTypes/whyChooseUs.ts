import {defineType, defineField} from 'sanity'

export const whyChooseUsSchema = defineType({
  name: 'whyChooseUs',
  title: 'Why Choose Us',
  type: 'document',
  fields: [
    defineField({
      name: 'iconName',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon: Shield | TrendingDown | Leaf | Network | Clock | Award',
    }),
    defineField({name: 'title', title: 'Reason Title', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 2}),
    defineField({name: 'order', title: 'Sort Order', type: 'number'}),
  ],
  preview: {select: {title: 'title', subtitle: 'iconName'}},
})
