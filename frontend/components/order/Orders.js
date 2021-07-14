/* eslint-disable @next/next/no-img-element */
import { useQuery } from '@apollo/client';
import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';
import PleaseSignIn from '../../helpers/PleaseSignIn';
import DisplayError from '../../helpers/DisplayError';
import OrderItemStyles from '../../helpers/styles/OrderItemStyles';
import { ALL_ORDERS_QUERY } from '../../lib/graphql/allOrders';
import formatMoney from '../../lib/formatMoney';
import Loading from '../../helpers/Loading';

function countItemsInAnOrder(order) {
  return order.items.reduce((tally, item) => tally + item.quantity, 0);
}

export default function AllOrdersPage() {
  const { data, error, loading } = useQuery(ALL_ORDERS_QUERY);
  if (loading) return <Loading />;
  if (error) return <DisplayError error={error} />;
  const { allOrders } = data;

  return (
    <PleaseSignIn>
      <Head>
        <title>Orders total ({allOrders.length})</title>
      </Head>

      <div className="container" data-scroll-section>
        <Label>
          You have{' '}
          <span style={{ color: 'var(--green)' }}>{allOrders.length}</span>{' '}
          order
          {allOrders.length === 1 ? '' : 's'}
        </Label>
        <OrderUl>
          {allOrders.map((order) => (
            <OrderItemStyles key={order.id}>
              <Link href={`/order/${order.id}`} passHref>
                <a>
                  <div className="order-meta">
                    <p>{countItemsInAnOrder(order)} Items</p>
                    <p>
                      {order.items.length} Product
                      {order.items.length === 1 ? '' : 's'}
                    </p>
                    <p>{formatMoney(order.total)}</p>
                  </div>
                  <div className="images">
                    {order.items.map((item) => (
                      <img
                        key={`image-${item.id}`}
                        src={item?.photo?.image?.publicUrlTransformed}
                        alt={item?.name}
                      />
                    ))}
                  </div>
                </a>
              </Link>
            </OrderItemStyles>
          ))}
        </OrderUl>
      </div>
    </PleaseSignIn>
  );
}

const OrderUl = styled.ul`
  margin: var(--spacer) 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 2rem;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

const Label = styled.h1`
  margin-bottom: var(--spacer);
  letter-spacing: normal;
`;
