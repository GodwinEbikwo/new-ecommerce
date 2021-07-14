/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { createAuth } from '@keystone-next/auth';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import { CartItem } from './schemas/CartItem';
import { Order } from './schemas/Order';
import { OrderItem } from './schemas/OrderItem';
import { User } from './schemas/User';
import { Role } from './schemas/Role';
import { Product } from './schemas/Product';
import { ProductImage } from './schemas/ProductImage';
import { insertSeedData } from './seed-data';
import { sendPasswordResetEmail } from './lib/mail';
import { permissionsList } from './schemas/fields';
import { extendGraphqlSchema } from './mutations/index';

const databaseURL =
  process.env.DATABASE_URL ||
  'mongodb://localhost/keystone-bloom-essentials-scent';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // duration for how long the user stays signed in
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
  },
  passwordResetLink: {
    async sendToken(args) {
      console.log(args);
      await sendPasswordResetEmail(args.token, args.identity);
    },
  },
});

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,
      async onConnect(keystone) {
        console.log('---------------connected to the DB--------------------');
        if (process.argv.includes('--seed-data')) {
          await insertSeedData(keystone);
        }
      },
    },

    lists: createSchema({
      User,
      Product,
      ProductImage,
      CartItem,
      OrderItem,
      Order,
      Role,
    }),
    extendGraphqlSchema,

    ui: {
      // show only for users that pass this test
      isAccessAllowed: ({ session }) => !!session?.data,
      // console.log(session);
    },

    session: withItemData(statelessSessions(sessionConfig), {
      User: `id name email role {${permissionsList.join(' ')}}`,
    }),
  })
);