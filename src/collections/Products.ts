import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
  },
  fields: [
    {
    name: 'owner',
    type: 'relationship',
    relationTo: 'users',
    hasMany: false,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'classe',
      type: 'relationship',
      relationTo: 'classes',
      hasMany: false,
      required: true,
    },
    { 
      name: 'favorite',
      type: 'checkbox',
      defaultValue: false,
    },
    
  ],
};

export default Products;
