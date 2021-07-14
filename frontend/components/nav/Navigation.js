import Link from 'next/link';
import { Header, Nav, NavList, Logo, CartContainer } from './styles/NavStyles';
import Cart from '../cart/Cart';
import { useCart } from '../../lib/cart/cartState';
import { fade,  } from '../../utils/transitionHelpers';
import { motion } from 'framer-motion';

export default function Navigation() {
  const { openCart } = useCart();
  return (
    <motion.div
      variants={fade}
      initial="initial"
      animate="enter"
      exit="exit"
      data-scroll-section>
      <Header>
        <Nav className="hide-for-mobile">
          <NavList>
            <li>
              <span>
                <Link href="/products">
                  <a className="link link--metis">shop</a>
                </Link>
              </span>
            </li>
            <li>
              <span>
                <Link href="/about">
                  <a className="link link--metis">our story</a>
                </Link>
              </span>
            </li>
            <li>
              <span>
                <Link href="/faq">
                  <a className="link link--metis">faq</a>
                </Link>
              </span>
            </li>
          </NavList>
        </Nav>

        <Link href="/">
          <a>
            <Logo>
              <span>five</span>
              nsix
            </Logo>
          </a>
        </Link>

        <CartContainer>
          <Link href="/account">
            <a className="link link--metis hide-for-mobile">
              <p>account</p>
            </a>
          </Link>

          <p className="hide-for-mobile">
            invert
            <span></span>
          </p>

          <button
            type="button"
            onClick={openCart}
            style={{ outline: 'none' }}
            aria-label="open cart">
            <p>cart</p>
          </button>
        </CartContainer>
      </Header>
      <Cart />
    </motion.div>
  );
}
