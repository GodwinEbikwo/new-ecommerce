/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/footer/Footer';
import Order from '../../components/order/Order';
import { initializeApollo, addApolloState } from '../../lib/apollo';
import { USER_ORDERS_QUERY } from '../../lib/graphql/userOrder';
import Loading from '../../helpers/Loading';
import DisplayError from '../../helpers/DisplayError';

function SingleOrderPage({ params: { id } }) {
  const containerRef = useRef(null);
  const { data, error, loading } = useQuery(USER_ORDERS_QUERY, {
    variables: { id },
  });
  if (loading) return <Loading />;
  if (error) return <DisplayError error={error} />;

  const { order } = data;
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
          <h1>{order?.id}</h1>
          <Footer />
        </section>
      </LocomotiveScrollProvider>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const apolloclient = initializeApollo();
  const id = context?.query?.id ?? '';

  await apolloclient.query({
    query: USER_ORDERS_QUERY,
    variables: {
      id,
    },
  });

  return addApolloState(apolloclient, {
    props: {
      id: id,
    },
  });
}

export default SingleOrderPage;
