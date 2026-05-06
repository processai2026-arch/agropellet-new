import {defineType, defineField, defineArrayMember} from 'sanity'

export const heroSchema = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      description: 'Small pill text above the heading',
      initialValue: "India's Trusted Biomass Supply Chain Partner",
    }),
    defineField({
      name: 'title',
      title: 'Main Heading',
      type: 'string',
      initialValue: 'Turning Agricultural Waste into',
    }),
    defineField({
      name: 'titleHighlight',
      title: 'Highlighted Word(s)',
      type: 'string',
      description: 'Text shown in green gradient colour',
      initialValue: 'Industrial Energy',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle / Description',
      type: 'text',
      rows: 3,
      initialValue:
        'Smart supply chains. Sustainable energy. We help industries reduce fuel costs and increase profitability with reliable biomass solutions.',
    }),
    defineField({
      name: 'ctaPrimary',
      title: 'Primary CTA Button Text',
      type: 'string',
      initialValue: 'Get a Free Quote',
    }),
    defineField({
      name: 'ctaPhone',
      title: 'Phone Number (CTA)',
      type: 'string',
      initialValue: '+91 9940099060',
    }),
    defineField({
      name: 'image',
      title: 'Hero Background Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'value', title: 'Number Value', type: 'number'}),
            defineField({name: 'suffix', title: 'Suffix (e.g. +, %)', type: 'string'}),
            defineField({name: 'label', title: 'Label', type: 'string'}),
          ],
          preview: {select: {title: 'label', subtitle: 'value'}},
        }),
      ],
    }),
  ],
  preview: {select: {title: 'title', subtitle: 'badge'}},
})
