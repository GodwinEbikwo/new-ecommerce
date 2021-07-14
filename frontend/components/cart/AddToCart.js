import { ADD_TO_CART_MUTATION } from '../../lib/graphql/addToCart';
import { CURRENT_USER_QUERY } from '../auth/User';
import { useMutation } from '@apollo/client';
import { useCart } from '../../lib/cart/cartState';
import Loading from '../../helpers/Loading';
import { PlusIcon } from '../../helpers/Icons';
import { updateCart } from '../../lib/updateCart';

export default function AddToCart({ id }) {
  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { id },
    update(cache, { data }) {
      const newCartItem = data?.addToCart;
      const currentUser = cache.readQuery({
        query: CURRENT_USER_QUERY,
      });
      if (currentUser?.authenticatedItem?.cart && newCartItem) {
        const authenticatedUser = currentUser.authenticatedItem;
        const newCart = updateCart(authenticatedUser.cart, newCartItem);
        const userWithUpdatedCart = {
          ...authenticatedUser,
          cart: newCart,
        };
        cache.writeQuery({
          query: CURRENT_USER_QUERY,
          data: {
            authenticatedItem: userWithUpdatedCart,
          },
        });
      }
    },
  });

  return (
    <button
      disabled={loading}
      aria-busy={loading}
      aria-label="Add to basket"
      type="button"
      onClick={addToCart}>
      <span>{loading ? 'Adding to Basket...' : 'Add to Basket'}</span>
    </button>
  );
}

export function BuyNow({ id }) {
  const { openCart } = useCart();
  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { id },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  return (
    <button
      disabled={loading}
      aria-busy={loading}
      type="button"
      onClick={async () => {
        await addToCart();
        openCart();
      }}>
      <span>{loading ? 'Buying now...' : 'Buy now'}</span>
    </button>
  );
}

export function PlusToCart({ id }) {
  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { id },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  return (
    <button
      disabled={loading}
      aria-busy={loading}
      type="button"
      onClick={addToCart}>
      {loading ? (
        <Loading size={10} />
      ) : (
        <div className="flex-center">
          <PlusIcon />
        </div>
      )}
    </button>
  );
}
