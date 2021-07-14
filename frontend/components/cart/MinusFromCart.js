/* eslint-disable react/prop-types */
import { useMutation } from '@apollo/client';
import Loading from '../../helpers/Loading';
import { CURRENT_USER_QUERY } from '../auth/User';
import { MinusIcon } from '../../helpers/Icons';
import { MINUS_FROM_CART_MUTATION } from '../../lib/graphql/minusFromCart';

export default function MinusFromCart({ id }) {
  const [minusFromCart, { loading, error }] = useMutation(
    MINUS_FROM_CART_MUTATION,
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
        await minusFromCart().catch((err) => console.error(err));
      }}>
      {loading ? (
        <Loading size={10} />
      ) : (
        <div className="flex-center">
          <MinusIcon />
        </div>
      )}
    </button>
  );
}
