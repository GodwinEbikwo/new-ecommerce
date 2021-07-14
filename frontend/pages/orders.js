/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react';
import AllOrdersPage from '../components/order/Orders';
import Layout from '../components/layout/Layout';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Footer from '../components/footer/Footer';

export default function Orders() {
  const containerRef = useRef(null);
  return (
    <Layout>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          class: 'is-inview',
          lerp: 0.07,
        }}
        watch={[]}
        containerRef={containerRef}>
        <section data-scroll-container id="scroll-container" ref={containerRef}>
          <AllOrdersPage />
          <Footer />
        </section>
      </LocomotiveScrollProvider>
    </Layout>
  );
}
