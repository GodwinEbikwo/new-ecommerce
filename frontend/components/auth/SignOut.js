import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import Loading from '../../helpers/Loading';
import DisplayError from '../../helpers/DisplayError';
import { CURRENT_USER_QUERY } from './User';

const SIGN_OUT_MUTATION = gql`
  mutation {
    endSession
  }
`;

export default function SignOut() {
  const router = useRouter();
  const [signout, { loading, error }] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  if (loading) return <Loading  />;
  if (error) return <DisplayError error={error} />;
  return (
    <button
      type="button"
      className="logoutb"
      onClick={async () => {
        await signout().catch((error) => alert(error.message));
        router.push({
          pathname: '/login',
        });
      }}>
      Log out
    </button>
  );
}
