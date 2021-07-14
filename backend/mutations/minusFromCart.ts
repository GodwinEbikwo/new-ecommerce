import { KeystoneContext, SessionStore } from '@keystone-next/types';
import { CartItem } from '../schemas/CartItem';
import { Session } from '../types';

import { CartItemCreateInput } from '../.keystone/schema-types';

async function minusFromCart(
  root: any,
  { productId }: { productId: string },
  context: KeystoneContext
): Promise<CartItemCreateInput> {
  console.log('REDUCING CART ITEM BY ONE!');
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
  console.log('---------MINUS-TO-CART-----------');
  console.log(productId);
  console.log(allCartItems);
  console.log('---------MINUS-TO-CART-----------');

  // 3. See if the current item is in their cart
  const [existingCartItem] = allCartItems;
  if (existingCartItem.quantity <= 1) {
    console.log(
      `Number of items in your cart are: ${existingCartItem.quantity}, deleting...`
    );

    return context.lists.CartItem.deleteOne({
      id: existingCartItem.id,
      data: { quantity: existingCartItem.quantity },
      resolveFields: 'id,quantity',
    });
  }
  if (existingCartItem) {
    // console.log(existingCartItem);
    console.log(`There are already ${existingCartItem.quantity}, reduce by 1!`);
    // 4. if it is, reduce it by 1
    return context.lists.CartItem.updateOne({
      id: existingCartItem.id,
      data: { quantity: existingCartItem.quantity - 1 },
      resolveFields: false,
    });
  }
}

export default minusFromCart;
