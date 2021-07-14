import { list } from '@keystone-next/keystone/schema';
import { text, select, integer, relationship } from '@keystone-next/fields';
import { permissions, rules, isSignedIn } from '../access';

export const Product = list({
  access: {
    create: isSignedIn,
    read: () => true,
    update: rules.canManageProducts,
    delete: rules.canManageProducts,
  },
  ui: {
    hideCreate: (args) => !permissions.canManageProducts(args),
    hideDelete: (args) => !permissions.canManageProducts(args),
  },
  fields: {
    name: text({ isRequired: true }),
    price: integer(),
    size: text(),
    inStock: text(),
    pve: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    shipping: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    ingredients: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    photo: relationship({
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
      ref: 'ProductImage.product',
      many: true,
    }),
    status: select({
      options: [
        { label: 'Draft', value: 'DRAFT' },
        { label: 'Available', value: 'AVAILABLE' },
        { label: 'Unavailable', value: 'UNAVAILABLE' },
      ],
      defaultValue: 'DRAFT',
      ui: {
        displayMode: 'segmentedControl',
        createView: { fieldMode: 'hidden' },
      },
    }),

    user: relationship({
      ref: 'User.products',
      defaultValue: ({ context }) => ({
        connect: { id: context.session.itemId },
      }),
    }),
  },
});
