export const updateCart = (cart, newCartItem) => {
  // is the item already in the cart?
  const index = cart.findIndex((e) => e.id === newCartItem.id);
  if (index === -1) {
    // add item to the cart
    return [...cart, newCartItem];
  }
  const copied = cart.filter((e) => e.id !== newCartItem.id);
  return [...copied, newCartItem];
};
