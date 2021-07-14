import 'dotenv/config';
import { list } from '@keystone-next/keystone/schema/dist/keystone.cjs';
import { relationship, text } from '@keystone-next/fields';
import { permissions } from '../access';
import { permissionFields } from './fields';

export const Role = list({
  access: {
    create: permissions.canManageRoles,
    read: permissions.canManageRoles,
    update: permissions.canManageRoles,
    delete: permissions.canManageRoles,
  },

  ui: {
    // hide the backend UI from regular users
    hideCreate: (args) => !permissions.canManageRoles(args),
    hideDelete: (args) => !permissions.canManageRoles(args),
    isHidden: (args) => !permissions.canManageRoles(args),
  },

  fields: {
    name: text({ isRequired: true }),
    ...permissionFields,
    assignedTo: relationship({
      ref: 'User.role',
      many: true,
      ui: {
        itemView: { fieldMode: 'read' },
      },
    }),
  },
});
