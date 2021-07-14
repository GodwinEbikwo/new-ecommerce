/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { KeystoneContext } from '@keystone-next/types';
import { Session } from '../types';

import { CartItemCreateInput } from '../.keystone/schema-types';

async function addToCart(
  root: any,
  { productId }: { productId: string },
  context: KeystoneContext
): Promise<CartItemCreateInput> {
  // 1. Query the current user see if they are signed in
  const sesh = context.session as Session;
  if (!sesh.itemId) {
    throw new Error('You must be logged in to do this!');
  }
  // 2. Query the current users cart
  const allCartItems = await context.lists.CartItem.findMany({
    where: { user: { id: sesh.itemId }, product: { id: productId } },
    resolveFields: 'id,quantity',
  });

  const [existingCartItem] = allCartItems;
  if (existingCartItem) {
    console.log(`There are already ${existingCartItem.quantity}`);
    // 3. See if the current item is in their cart
    // 4. if itis, increment by 1
    return context.lists.CartItem.deleteOne({
      id: existingCartItem.id,
      data: { quantity: existingCartItem.quantity },
      resolveFields: false,
    });
  }
  // 4. if it isnt, create a new cart item!
}

export default addToCart;
