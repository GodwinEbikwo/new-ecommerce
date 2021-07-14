/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MinusFromCart from './MinusFromCart';
import { PlusToCart } from './AddToCart';
import formatMoney from '../../lib/formatMoney';
import DeleteFromCart from './DeleteFromCart';
import { useCart } from '../../lib/cart/cartState';

const CartItemStyles = styled.li`
  padding: 1.5rem 1rem;
  border-bottom: 1px solid var(--button-black);
  display: grid;
  grid-template-columns: 0.85fr 2fr;
  gap: 1rem;

  h1 {
    letter-spacing: normal;
    font-size: 2rem;
    color: var(--text-black);
  }

  span {
    display: inline-block;
    margin: 0.5rem 0;
    letter-spacing: var(--ls-medium);
    font-size: 1.2rem;
    color: var(--text-black);
  }

  p {
    margin: 0.5rem 0;
    font-size: 1.2rem;
    color: var(--text-black) !important;
  }
`;

export default function CartItem({ id, src, name, alt, price, quantity }) {
  return (
    <CartItemStyles>
      <img src={src} alt={alt} width="120" loading="lazy" />
      <div
        style={{
          display: 'flex',
          alignItems: 'flexStart',
          justifyContent: 'center',
          flexDirection: 'column',
          // marginLeft: '1rem',
        }}>
        <h1>{name}</h1>
        <span>Quantity: {quantity}</span>
        <p>
          {formatMoney(price * quantity)} -{' '}
          <em>
            {quantity} &times; {formatMoney(price)} each
          </em>
        </p>

        <RowButton>
          <PlusToCart id={id}  />
          <span>{quantity}</span>
          <MinusFromCart id={id}  />
          <DeleteFromCart id={id}  />
        </RowButton>
      </div>
    </CartItemStyles>
  );
}
const RowButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 0.5rem;

  button {
    -webkit-appearance: button;
    cursor: pointer;
    background-color: var(--button-black);
    height: 35px;
    width: 35px;
    border: 0;
    color: var(--text-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:last-child {
      all: unset;
      margin-left: calc(100% - 80%) !important;
      text-decoration: underline !important;
      cursor: pointer !important;
      transition: all 0.3s var(--easing) !important;
      color: var(--text-black) !important;

      p {
        color: var(--text-black) !important;
      }
      
      &:hover {
        opacity: 0.75 !important;
      }
    }
  }

  span {
    display: grid;
    place-items: center;
    position: relative;
    width: 25px;
    font-size: 1.45rem;
    resize: vertical;
  }
`;

export function Icon() {
  const { closeCart } = useCart();
  const router = useRouter();
  return (
    <div className="flex fd-c">
      <div className="flex ai-jc">
        <svg width="120" height="120" viewBox="0 0 14 14">
          <path
            style={{ fill: 'var(--text-black)' }}
            d="M5.087 8.34a.655.655 0 111.31 0 .655.655 0 01-1.31 0zm3.329.656a.655.655 0 100-1.31.655.655 0 000 1.31z"
          />
          <path
            fill="none"
            stroke="var(--text-black)"
            strokeWidth=".1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M5.584 11.066s1.337-1.729 3.066 0M13.159 5.143h-1.861L12.952 2.2a.27.27 0 00-.097-.362l-.65-.387a.259.259 0 00-.356.092l-2.096 3.6h1.717-8.965 1.52l-2.03-3.495a.276.276 0 00-.364-.106l-.688.36a.251.251 0 00-.103.349l1.665 2.892H.841a.262.262 0 00-.262.262v1.022c0 .145.118.262.262.262h12.128H1.286l1.657 5.646a.371.371 0 00.335.252h7.601a.368.368 0 00.334-.252l1.605-5.645h.341a.262.262 0 00.262-.262V5.405a.262.262 0 00-.262-.262zM9.752 5.143h1.546"
          />
        </svg>
      </div>
      <p className="text-center text_uppercase">your cart is empty</p>
      <Link href="/products" passHref>
        <button
          className="main-button bg-black"
          type="button"
          onClick={async () => {
            await router.push({
              pathname: '/products',
            });
            closeCart();
          }}>
          Start Shopping
        </button>
      </Link>
    </div>
  );
}

