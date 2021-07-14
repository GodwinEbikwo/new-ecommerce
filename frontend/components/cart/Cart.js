import styled from 'styled-components';
import { useCart } from '../../lib/cart/cartState';
import { CartBox } from './styles/CartStyles';
import { useUser } from '../auth/User';
import CartItem, { Icon } from './CartItem';
import { Checkout } from './Checkout';
import formatMoney from '../../lib/formatMoney';
import calcTotalPrice from '../../lib/cart/calcTotalPrice';

export default function Cart() {
  const user = useUser();
  const { cartOpen, closeCart } = useCart();
    if (!user) return null;

  return (
    <>
      <CartBox open={cartOpen} data-scroll-section>
        <div className="header-container" data-scroll>
          <header className="flex sb cart-header">
            <div>
              <h1 className="cart-title">YOUR CART</h1>
              <p className="cart-empty">
                {user?.cart?.length === 0 && 'your cart is empty'}
              </p>
            </div>

            <button type="button" onClick={closeCart} className="button_label">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </header>
          <hr className="c-header_line" data-scroll />
        </div>

        <div className="flex">
          <div className="m-auto">{user?.cart?.length === 0 && <Icon />}</div>
        </div>

        <div className="scroll-container">
          {user?.cart?.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              id={cartItem?.product?.id}
              src={
                cartItem?.product?.photo[0]?.image?.publicUrlTransformed ||
                '/fallback.jpg'
              }
              alt={cartItem?.product?.name}
              name={cartItem?.product?.name}
              price={cartItem?.product?.price}
              quantity={cartItem?.quantity}
            />
          ))}
        </div>

        <footer>
          <div className="paddingX_Y">
            <h1>Order Infomation</h1>
          </div>
          <div
            className="flex sb paddingX_Y"
            style={{
              borderTop: '1px solid var(--button-black)',
              borderBottom: '1px solid var(--button-black)',
            }}>
            <p>SUBTOTAL</p>
            <p>
              <span style={{ marginRight: '1em' }}>
                Taxes and duties included
              </span>
              <span style={{ fontWeight: '700' }}>
                {formatMoney(calcTotalPrice(user?.cart))}
              </span>
            </p>
          </div>

          <div className="padding-10">
            <Checkout totalamount={formatMoney(calcTotalPrice(user?.cart))} />
          </div>
        </footer>
      </CartBox>
      <Overlay open={cartOpen} />
    </>
  );
}

export const Overlay = styled.div`
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(9, 9, 9, 0.9);
  z-index: 4;
  transition: opacity 1.2s cubic-bezier(0.77, 0, 0.18, 1),
    visibility 1.2s cubic-bezier(0.77, 0, 0.18, 1);
  cursor: pointer;
  ${(props) =>
    props.open && `opacity: 1; visibility: visible; transition-delay: 0.1s;`};
`;
