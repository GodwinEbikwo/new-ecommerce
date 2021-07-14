/* eslint-disable react/prop-types */
import { useMutation } from '@apollo/client';
import { CURRENT_USER_QUERY } from '../auth/User';
import { DELETE_FROM_CART_MUTATION } from '../../lib/graphql/deleteFromCart';
import { useCart } from '../../lib/cart/cartState';

export default function DeleteFromCart({ id }) {
  const { closeCart } = useCart();
  const [deleteFromCart, { loading, error }] = useMutation(
    DELETE_FROM_CART_MUTATION,
    {
      variables: { id },
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );

  if (error) return <p>Error occured</p>;
  return (
    <button
      disabled={loading}
      aria-busy={loading}
      type="button"
      onClick={async () => {
        await deleteFromCart();
        closeCart();
      }}
      title="delete this item from cart">
      <p>
        {loading ? 'Removing' : 'Remove'}
      </p>
    </button>
  );
}
