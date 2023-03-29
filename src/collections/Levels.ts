import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Levels: CollectionConfig = {
  slug: 'levels',
  access: {
    read: () => true,
    update: () => true,
    create: () => true,
  },
  admin: {
    useAsTitle: 'levels',
  },
  fields: [
    {
      name: 'level',
      type: 'text',
      required: true,
    },
    {
      name: 'xp',
      type: 'number',
      required: true,
    },
  ],
};

export default Levels;
