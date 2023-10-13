import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'golds',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'xp',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'quests',
      type: 'relationship',
      relationTo: 'quests',
      hasMany: true,
    },
    {
    name: 'inventory',
    type: 'relationship',
    relationTo: 'products',
    hasMany: true,
  },
  ],
};

export default Users;
