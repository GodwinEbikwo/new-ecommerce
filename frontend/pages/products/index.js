import { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Products from '../../components/products/Products';
import Pagination from '../../helpers/Pagination';
import { addApolloState, initializeApollo } from '../../lib/apollo';
import { ALL_PRODUCTS_QUERY } from '../../lib/graphql/allProducts';
import { revealInOut, fade } from '../../utils/transitionHelpers';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/footer/Footer';


export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_PRODUCTS_QUERY,
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 300,
  });
}

const ProductsPage = () => {
  const containerRef = useRef(null);
  const { query } = useRouter();
  const page = parseInt(query.page);
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
            data-scroll-section
            initial="initial"
            animate="enter"
            exit="exit">
            <motion.aside
              variants={{
                enter: { transition: { staggerChildren: 0.055 } },
              }}>
              <HeroTitle data-scroll>
                <span className="block relative overflow-hidden">
                  <motion.span variants={revealInOut} className="block">
                    <span className="txt_stroke"> shop all</span> products
                  </motion.span>
                </span>
              </HeroTitle>
            </motion.aside>

            <motion.aside className="container" variants={fade}>
              <Products page={page || 1} />
              <Pagination page={page || 1} />
            </motion.aside>
          </motion.section>
          <Footer />
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  );
};

export default ProductsPage;

export const HeroTitle = styled.h1`
  bottom: var(--spacer);
  padding: 0 var(--spacer);
  text-align: start;
  font-size: 13.91vw;
  letter-spacing: -0.01em;
  line-height: 0.85;
  font-feature-settings: 'kern' off;
  font-kerning: none;
  text-transform: uppercase;

  .txt_stroke {
    display: inline-block;
    -webkit-text-stroke: 1px var(--text-color);
    color: transparent;
  }

  @media (max-width: 800px) {
    font-size: 13.73vw;
  }
`;
