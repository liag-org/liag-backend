import { buildConfig } from 'payload/config';
import path from 'path';
// import Examples from './collections/Examples';
import Users from './collections/Users';
import Quests from './collections/Quests';
import Media from './collections/Media';
import Levels from './collections/Levels';
import Categories from './collections/Categories';
import Products from './collections/Products';

export default buildConfig({
  serverURL: process.env.PAYLOAD_URL,
  admin: {
    user: Users.slug,
  },
  collections: [Users, Quests, Products, Media, Levels, Categories],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(
      __dirname,
      'generated-schema.graphql'
    ),
  },
});
