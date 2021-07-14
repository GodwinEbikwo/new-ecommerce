/* eslint-disable react/prop-types */
import gql from 'graphql-tag';
import { useState } from 'react';
import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import nProgress from 'nprogress';
import { useCart } from '../../lib/cart/cartState';
import Loading from '../../helpers/Loading';
import { CURRENT_USER_QUERY, useUser } from '../auth/User';

const CheckoutFormStyles = styled.form`
  padding: 1rem 0;
  padding-bottom: 0;
  display: grid;
  grid-gap: 1rem;
`;

const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER_MUTATION($token: String!) {
    checkout(token: $token) {
      id
      charge
      total
      items {
        id
        name
      }
    }
  }
`;

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

function CheckoutForm({ totalamount }) {
  const me = useUser();
  const { closeCart } = useCart();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const [checkout, { error: graphQLError }] = useMutation(
    CREATE_ORDER_MUTATION,
    {
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    nProgress.start();
    console.log('We gotta do some work..');

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
        billing_details: {
          name: me?.name,
          email: me?.email,
          address: {
            country: me?.country,
            city: me?.city,
            postal_code: me?.postalCode,
            line1: me?.address,
          },
          phone: me?.phone,
        },
      });

      if (error) {
        nProgress.done();
        setLoading(false);
        setError(error);
        return;
      }

      if (!me?.address || !me?.postalCode) {
        alert('where is your address chief');
        nProgress.done();
        setLoading(false);
        closeCart();
        router.push({
          pathname: `/account`,
        });
        return;
      }

      try {
        const order = await checkout({
          variables: {
            token: paymentMethod?.id ?? '',
          },
          update(cache) {
            cache.modify({
              id: cache.identify(me),
              fields: {
                cart() {
                  return [];
                },
              },
            });
          },
        });
        closeCart();
        setLoading(false);
        nProgress.done();
        router.push({
          pathname: `/order/[id]`,
          query: {
            id: order?.data?.checkout?.id ?? '#'
          },
        });
      } catch (err) {
        setLoading(false);
        nProgress.done();
        console.error(err);
      }
    } catch (err) {
      setLoading(false);
      nProgress.done();
      setError(err);
      console.error(err);
    }
  }

  return (
    <CheckoutFormStyles onSubmit={handleSubmit}>
      {error && (
        <p
          style={{
            fontSize: '16px',
            color: 'var(--warning)',
            letterSpacing: 'var(--ls-medium)',
          }}>
          {error.message}
        </p>
      )}
      {graphQLError && (
        <p
          style={{
            fontSize: '16px',
            color: 'var(--warning)',
            letterSpacing: 'var(--ls)',
          }}>
          {graphQLError.message}
        </p>
      )}
      <CardElement
        options={{
          style: {
            base: {
              backgroundColor: 'transparent',
              fontSize: '16px',
              color: '#333',
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
        onBlur={() => {
          console.log('CardElement [blur]');
        }}
        onFocus={() => {
          console.log('CardElement [focus]');
        }}
      />
      {loading ? (
        <SickButton>
          <Loading color="var(--green)" />
        </SickButton>
      ) : (
        <SickButton>
          <span>
            <span> Check out{` - ${totalamount} `}</span>
          </span>
        </SickButton>
      )}
    </CheckoutFormStyles>
  );
}

function Checkout({ totalamount }) {
  return (
    <Elements stripe={stripeLib}>
      <CheckoutForm totalamount={totalamount} />
    </Elements>
  );
}

export { Checkout };


const SickButton = styled.button`
  margin: 1rem 0;
  background-color: var(--button-black);
  color: var(--green);
  letter-spacing: var(--ls-medium);
  font-weight: 600;
  border: 0;
  outline: 0;
  padding: 1.5rem 3rem;
  font-size: 1.5rem;
  display: inline-block;
  text-transform: uppercase;
  transition: all 0.5s;
  &[disabled] {
    opacity: 0.5;
  }
`;