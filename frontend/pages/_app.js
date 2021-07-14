import '../styles/globals.scss';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apollo';
import NProgress from 'nprogress';
import '../helpers/nprogress.css';
import { CartStateProvider } from '../lib/cart/cartState';
import { AnimatePresence } from 'framer-motion';
import Navigation from '../components/nav/Navigation';

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 });
  }
}

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <ApolloProvider client={apolloClient}>
      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        <CartStateProvider>
          <Navigation />
          <Component {...pageProps} key={router.asPath} />
        </CartStateProvider>
      </AnimatePresence>
    </ApolloProvider>
  );
}

export default MyApp;
