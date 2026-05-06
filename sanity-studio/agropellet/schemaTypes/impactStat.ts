import {defineType, defineField} from 'sanity'
import {Rule} from 'sanity'

export const impactStatSchema = defineType({
  name: 'impactStat',
  title: 'Impact Statistics',
  type: 'document',
  fields: [
    defineField({name: 'value', title: 'Numeric Value', type: 'number'}),
    defineField({name: 'suffix', title: 'Suffix (e.g. +, %)', type: 'string'}),
    defineField({name: 'label', title: 'Stat Label', type: 'string'}),
    defineField({name: 'sub', title: 'Sub-label', type: 'string'}),
    defineField({name: 'order', title: 'Sort Order', type: 'number'}),
  ],
  preview: {select: {title: 'label', subtitle: 'value'}},
})
