// sanity-studio/schemas/contactInfo.js
export default {
  name: "contactInfo",
  title: "Contact Information",
  type: "document",
  fields: [
    {
      name: "contactName",
      title: "Contact Person Name",
      type: "string",
      initialValue: "Mr. M. G. Sankkar",
    },
    {
      name: "role",
      title: "Contact Person Role",
      type: "string",
      initialValue: "Founder & Managing Director",
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
      description: "Include country code without + (for tel: links), e.g. 919940099060",
      initialValue: "919940099060",
    },
    {
      name: "whatsapp",
      title: "WhatsApp Number",
      type: "string",
      description: "Include country code without +, e.g. 919940099060",
      initialValue: "919940099060",
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      initialValue: "Tamil Nadu, India",
    },
  ],
};
