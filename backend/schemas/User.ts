import { list } from '@keystone-next/keystone/schema';
import { text, password, relationship, select } from '@keystone-next/fields';
import { rules, permissions } from '../access';

export const User = list({
  access: {
    create: () => true,
    read: rules.canManageUsers,
    update: rules.canManageUsers,
    delete: permissions.canManageUsers,
  },
  ui: {
    // hide the backend UI from regular users
    hideCreate: (args) => !permissions.canManageUsers(args),
    hideDelete: (args) => !permissions.canManageUsers(args),
  },
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    address: text(),
    postalCode: text(),
    city: text(),
    phone: text(),
    country: select({
      ui: { displayMode: 'select' },
      options: [
        { label: 'United Kindom', value: 'GB' },
        {
          label: 'United States',
          value: 'US',
        },
        {
          label: 'France',
          value: 'FR',
        },
        {
          label: 'Nigeria',
          value: 'NG',
        },
      ],
    }),

    password: password(),
    cart: relationship({
      ref: 'CartItem.user',
      many: true,
      ui: {
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'read' },
      },
    }),
    orders: relationship({ ref: 'Order.user', many: true }),
    role: relationship({
      ref: 'Role.assignedTo',
      access: {
        create: permissions.canManageUsers,
        update: permissions.canManageUsers,
      },
    }),
    products: relationship({
      ref: 'Product.user',
      many: true,
    }),
  },
});
