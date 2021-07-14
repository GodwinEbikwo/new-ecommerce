import { useRef } from 'react';
import { useRouter } from 'next/router';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Layout from '../../../components/layout/Layout';
import Footer from '../../../components/footer/Footer';
import SingleProduct from '../../../components/singleProduct/SingleProduct';
import { SINGLE_ITEM_QUERY } from '../../../lib/graphql/singleProduct';
import { ALL_PRODUCTS_QUERY } from '../../../lib/graphql/allProducts';
import { initializeApollo, addApolloState } from '../../../lib/apollo';

export const getStaticPaths = async () => {
  const apolloClient = initializeApollo();
  const {
    data: { allProducts },
  } = await apolloClient.query({
    query: ALL_PRODUCTS_QUERY,
  });

  const paths = allProducts?.map((product) => ({
    params: {
      name: product?.name.replace(/[%\s]/g, '-').toLowerCase(),
      id: product?.id,
    },
  }));

  return {
    paths: paths,
    fallback: true,
  };
};

export async function getStaticProps({ params: { id } }) {
  const apolloClient = initializeApollo();

  const {
    data: { Product: product },
  } = await apolloClient.query({
    query: SINGLE_ITEM_QUERY,
    variables: {
      id: id,
    },
  });

  return addApolloState(apolloClient, {
    props: {
      name: product?.name,
      id: product?.id,
    },
    revalidate: 300,
  });
}

export default function SingleProductPage({ id }) {
  const containerRef = useRef(null);
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div className="p-center">
        <p>loading...</p>;
      </div>
    );
  }
  return (
    <Layout>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          class: 'is-inview',
          lerp: 0.07,
        }}
        watch={[containerRef]}
        containerRef={containerRef}>
        <div data-scroll-container id="scroll-container" ref={containerRef}>
          <SingleProduct id={id} />
          <Footer />
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  );
}
