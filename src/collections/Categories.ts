import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
  },
  admin: {
    useAsTitle: 'categories',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
  ],
};

export default Categories;
