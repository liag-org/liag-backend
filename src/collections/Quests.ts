import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Quests: CollectionConfig = {
  slug: 'quests',
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'owner',
      type: 'relationship',
      relationTo: 'users',
      hasMany: false,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'completed',
      type: 'checkbox',
      required: true,
      defaultValue: false,
    },
    {
      name: 'pinned',
      type: 'checkbox',
      required: true,
      defaultValue: false,
    },
    {
      name: 'xp',
      type: 'number',
      required: true,
    },
    {
      name: 'golds',
      type: 'number',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: false,
      required: true,
    },
    {
      name: 'tasks',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'completed',
          type: 'checkbox',
          defaultValue: false,
          required: true,
        },
      ],
    },
  ],
};

export default Quests;
