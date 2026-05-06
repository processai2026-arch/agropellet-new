import {defineType, defineField, defineArrayMember} from 'sanity'

export const aboutSchema = defineType({
  name: 'about',
  title: 'About Section',
  type: 'document',
  fields: [
    defineField({name: 'badge', title: 'Badge Text', type: 'string', initialValue: 'About Us'}),
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      initialValue: 'Bridging Agriculture & Industry',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      initialValue:
        'Agro Power Pellet is a leading trader and supply chain solutions provider in the bioenergy and agro-residue sector. We connect industrial energy consumers with sustainable fuel sources, enabling cost savings, operational efficiency, and reduced carbon emissions.',
    }),
    defineField({
      name: 'features',
      title: 'Feature Cards',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'iconName',
              title: 'Icon Name',
              type: 'string',
              description: 'Lucide icon: Link | Truck | BarChart3 | Shield | Network | Clock | Award | Leaf',
            }),
            defineField({name: 'title', title: 'Feature Title', type: 'string'}),
            defineField({name: 'description', title: 'Feature Description', type: 'text', rows: 2}),
          ],
          preview: {select: {title: 'title', subtitle: 'iconName'}},
        }),
      ],
    }),
  ],
})
