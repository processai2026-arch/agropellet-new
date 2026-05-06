import {defineType, defineField} from 'sanity'

export const contactInfoSchema = defineType({
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  fields: [
    defineField({
      name: 'contactName',
      title: 'Contact Person Name',
      type: 'string',
      initialValue: 'Mr. M. G. Sankkar',
    }),
    defineField({
      name: 'role',
      title: 'Contact Person Role',
      type: 'string',
      initialValue: 'Founder & Managing Director',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      description: 'Include country code without + e.g. 919940099060',
      initialValue: '919940099060',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'Include country code without + e.g. 919940099060',
      initialValue: '919940099060',
    }),
    defineField({name: 'email', title: 'Email Address', type: 'string'}),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      initialValue: 'Tamil Nadu, India',
    }),
  ],
})
