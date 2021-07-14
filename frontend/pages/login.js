import { useRef } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Login from '../components/auth/Login';
import Layout from '../components/layout/Layout';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { fadeSmallDelay } from '../utils/transitionHelpers';

export default function LoginPage() {
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
          <motion.section
            className="container"
            data-scroll-section
            initial="initial"
            animate="enter"
            exit="exit"
            variants={fadeSmallDelay}>
            <Head>
              <title>Login page </title>
            </Head>
            <Login />
          </motion.section>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  );
}
