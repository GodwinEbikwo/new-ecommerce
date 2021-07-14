/* eslint-disable @next/next/no-img-element */
import Loading from '../../helpers/Loading';
import DisplayError from '../../helpers/DisplayError';
import { motion } from 'framer-motion';
import Head from 'next/head';
import OrderStyles from '../../helpers/styles/OrderStyles';
import formatMoney from '../../lib/formatMoney';
import { useQuery } from '@apollo/client';
import { fadeSmallDelay } from '../../utils/transitionHelpers';
import { USER_ORDERS_QUERY } from '../../lib/graphql/userOrder';

export default function Order({ query }) {
  const { loading, data, error } = useQuery(USER_ORDERS_QUERY, {
    variables: {
      id: query.Orderid,
    },
  });

  if (loading)
    return (
      <div className="p-center">
        <Loading />
      </div>
    );
  if (error) return <DisplayError error={error} />;
  const { order } = data;

  return (
    <motion.div
      className="container"
      data-scroll-section
      initial="initial"
      animate="enter"
      exit="exit"
      variants={fadeSmallDelay}>
      <Head>
        <title>fivensix - {order?.id}</title>
      </Head>
      <OrderStyles>
        <div className="head-top">
          <h1>Your order details</h1>
          <p>
            Below are your order details. if you have any complains please{' '}
            <span>contact support@fivensix.com</span>
          </p>
        </div>
        <p>
          <span>Order id:</span>
          <span>{order?.id}</span>
        </p>
        <p>
          <span>Charge:</span>
          <span>{order?.charge}</span>
        </p>
        <p>
          <span>Order Total:</span>
          <span>{formatMoney(order?.total ?? 0)}</span>
        </p>
        <p>
          <span>ItemCount:</span>
          <span>
            {order?.items.length} Item{order?.items.length === 1 ? '' : 's'}
          </span>
        </p>

        <div className="order-items">
          {order?.items.map((item) => (
            <div className="order-item" key={item.id}>
              <img
                src={item?.photo?.image?.publicUrlTransformed}
                alt={item.title}
                loading="lazy"
                decoding="async"
              />
              <div className="item-details">
                <h2>{item.name}</h2>
                <p>Qty: {item.quantity}</p>
                <p>Each: {formatMoney(item?.price ?? 0)}</p>
                <p>
                  Sub total:
                  {formatMoney((item?.price ?? 0) * (item?.quantity ?? 0))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </OrderStyles>
    </motion.div>
  );
}
