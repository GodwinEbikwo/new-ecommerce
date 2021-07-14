/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }) {
  const [cartOpen, setCartOpen] = useState(false);

  const [canScroll, setCanScroll] = useState(true);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector('body').classList.add('no-scroll');
    } else {
      document.querySelector('body').classList.remove('no-scroll');
    }
  }, [canScroll]);

  function toogleCart() {
    setCartOpen(!cartOpen);
  }

  function closeCart() {
    setCartOpen(false);
    setCanScroll(true);
  }

  function openCart() {
    setCartOpen(true);
    setCanScroll(false);
  }

  return (
    <LocalStateProvider
      value={{ cartOpen, setCartOpen, toogleCart, closeCart, openCart }}>
      {children}
    </LocalStateProvider>
  );
}

function useCart() {
  const all = useContext(LocalStateContext);
  return all;
}

export { CartStateProvider, useCart };
