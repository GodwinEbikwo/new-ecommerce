import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import { LOGIN_MUTATION } from '../../lib/graphql/loginMutation';
import { CURRENT_USER_QUERY } from './User';
import DisplayError from '../../helpers/DisplayError';
import Form from '../../helpers/styles/FormStyles';
import useForm from '../../lib/useForm';

export default function Login() {
  const router = useRouter();
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });

  const [login, { data, loading }] = useMutation(LOGIN_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await login();
    resetForm();
    router.push({
      pathname: '/account',
    });
  }

  // displays error message
  const error =
    data?.authenticateUserWithPassword.__typename ===
    'UserAuthenticationWithPasswordFailure'
      ? data?.authenticateUserWithPassword
      : undefined;

  return (
    <LoginContainer data-scroll-section>
      <Form method="POST" onSubmit={handleSubmit}>
        <h1>Log in to your account</h1>
        <p>
          If you already have an account, please enter your login details below.
        </p>
        <DisplayError error={error} />
        <fieldset disabled={loading} aria-busy={loading}>
          <label htmlFor="email">
            Email
            <input
              required
              type="email"
              name="email"
              placeholder="email"
              autoComplete="email"
              value={inputs.email}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="password">
            Passsword
            <input
              type="password"
              name="password"
              placeholder="password"
              autoComplete="password"
              value={inputs.password}
              onChange={handleChange}
            />
          </label>

          <div className="flx-end">
            <Link href="/reset">
              <a>
                <span>Forgot your password?</span>
              </a>
            </Link>
          </div>

          <div className="btn-row">
            <button type="submit" className="main-button">Sign in</button>
            <div
              className="flex-center"
              style={{
                marginTop: '1.5rem',
              }}>
              <Link href="/signup">
                <a>
                  <p style={{ color: 'var(--grey)' }}>
                    Not registered yet? <span>Please create an account</span>
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </fieldset>
      </Form>
    </LoginContainer>
  );
}

const LoginContainer = styled.section`
  max-width: var(--maxWidth);
  margin: 4rem auto;
  padding-top: 4rem;
  padding-bottom: 4rem;
  padding-left: var(--golden-ratio);
  padding-right: var(--golden-ratio);
  height: 80vh;
`;
