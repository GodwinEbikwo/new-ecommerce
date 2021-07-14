import { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import useForm from '../../lib/useForm';
import DisplayError from '../../helpers/DisplayError';
import Form from '../../helpers/styles/FormStyles';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
    $country: String!
    $phone: String!
  ) {
    createUser(
      data: {
        email: $email
        name: $name
        password: $password
        country: $country
        phone: $phone
      }
    ) {
      id
      email
      name
      country
      phone
    }
  }
`;

export default function SignUp() {
  const [displayModal, setDisplayModal] = useState(false);
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    name: '',
    password: '',
    phone: '',
    country: '',
  });

  const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
  });

  console.log({ error });
  async function handleSubmit(e) {
    e.preventDefault();
    await signup().catch(console.error);
    resetForm();
    setDisplayModal(!displayModal);
  }

  return (
    <Container>
      <Form method="POST" onSubmit={handleSubmit}>
        <h1>Create an account </h1>
        <DisplayError error={error} />
        <fieldset disabled={loading} aria-busy={loading}>
          {data?.createUser && (
            <div className={`Modal ${displayModal ? 'Show' : ''}`}>
              <Close
                type="button"
                onClick={() => setDisplayModal(!displayModal)}
                role="button"
                onKeyPress={() => setDisplayModal(!displayModal)}
                aria-hidden="true">
                <Image
                  src="/close.svg"
                  width={25}
                  height={25}
                  alt="close-button"
                />
              </Close>

              <div
                className="center"
                style={{ display: 'grid', placeContent: 'center' }}>
                <h4 className="items-center">
                  Account created {data.createUser.email}
                  <span>Go ahead and sign in!</span>
                </h4>

                <Link href="/login" passHref>
                  <button type="button" title="login">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          )}

          <div className="sflex">
            <label htmlFor="name">
              Name
              <input
                required
                type="name"
                name="name"
                placeholder="name"
                autoComplete="name"
                value={inputs.name}
                onChange={handleChange}
                inputMode="text"
              />
            </label>

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
                inputMode="email"
              />
            </label>
          </div>

          <label htmlFor="password">
            Password
            <input
              required
              type="password"
              name="password"
              placeholder="password"
              autoComplete="password"
              value={inputs.password}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="phone">
            Telephone
            <input
              required
              type="tel"
              name="phone"
              placeholder="phone"
              value={inputs.phone}
              onChange={handleChange}
              inputMode="tel"
            />
          </label>

          <div className="btn-row">
            <button type="submit">Create an account</button>

            <div
              style={{
                marginTop: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Link href="/login">
                <a>
                  <p style={{ color: 'var(--grey)' }}>
                    Already have an account? <span>Please sign in </span>
                  </p>
                </a>
              </Link>
            </div>
          </div>
          <div
            className={`Overlay ${displayModal ? 'Show' : ''}`}
            onClick={() => setDisplayModal(!displayModal)}
            onKeyPress={() => setDisplayModal(!displayModal)}
            aria-hidden="true"
          />
        </fieldset>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding-top: var(--spacer);
  padding-bottom: var(--spacer);
  padding-left: var(--golden-ratio);
  padding-right: var(--golden-ratio);
  min-height: 80vh;
`;

export const Close = styled.a`
  cursor: pointer;
  position: absolute;
  top: 18px;
  right: 10px;
  background-color: var(--border-color) !important;
  border: 0;
  height: 35px !important;
  width: 35px !important;
  border-radius: 50% !important;
  display: grid;
  place-items: center;
`;
