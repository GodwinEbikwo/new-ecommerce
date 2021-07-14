import { useRef } from 'react';
import Hero from '../components/home/Hero';
import FeatureProducts from '../components/home/FeatureProducts';
import Cta from '../components/home/Cta';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Layout from '../components/layout/Layout';
import Footer from '../components/footer/Footer';

export default function Home() {
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
        <div data-scroll-container id="scroll-container" ref={containerRef}>
          <Hero />
          <FeatureProducts />
          <Cta />
          <Footer />
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  );
}
