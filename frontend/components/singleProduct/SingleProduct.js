/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import { useQuery } from '@apollo/client';
import Head from 'next/head';
import Link from 'next/link';
import DisplayError from '../../helpers/DisplayError';
import formatMoney from '../../lib/formatMoney';
import AddToCart, { BuyNow } from '../cart/AddToCart';
import { useUser } from '../auth/User';
import Loading from '../../helpers/Loading';
import Image from 'next/image';
import Accordion from '../accordion/Accordion';
import { SINGLE_ITEM_QUERY } from '../../lib/graphql/singleProduct';
import {
  GRButtons,
  GridContainer,
  GridLeft,
  GridRight,
  StockIndicator,
  ImgContainer,
  GRSticky,
  ProductName,
  PriceStyles,
  ProductDescription,
  ProductDetails,
  ProductDetailsIngredients,
  InStock,
  BtnStyles,
} from './SingleProductStyles';
import { IconStock } from '../../helpers/Icons';
import { revealInOutSlow, fade } from '../../utils/transitionHelpers';
import { toBase64, shimmer } from '../../helpers/ImageLoading';

export default function SingleProduct({ id }) {
  const me = useUser();
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) return <Loading />;
  if (error) return <DisplayError error={error} />;

  const { Product } = data;

  const stockColor = Product?.inStock === 'yes' ? '#99e2b4' : '#ef233c';
  const instock = Product?.inStock === 'yes' ? 'In Stock' : 'Out of stock';

  const str = Product?.ingredients;
  const ingredients = str.replace(/([.?!])\s*(?=[A-Z])/g, '$1|').split('|');

  const str2 = Product?.shipping;
  const shipping = str2.replace(/([.?!])\s*(?=[A-Z])/g, '$1|').split('|');
  const slug = Product?.name.replace(/[%\s]/g, '-').toLowerCase();

  return (
    <GridContainer data-scroll-section>
      <Head>
        <title>
          {Product?.name} - {formatMoney(Product.price)}
        </title>
        <meta property="og:title" content={Product?.name} key="ogtitle" />
        <meta
          property="og:image"
          content={Product?.photo[0]?.image?.publicUrlTransformed}
          key="ogimage"
        />
        <meta
          property="og:url"
          content={`http://localhost:7777/product/${Product?.id}`}
          key="ogurl"
        />
        <meta name="description" content={Product?.description} />
      </Head>
      <GridLeft>
        <div className="imgbox">
          <ImgContainer>
            {Product?.photo?.map((img, index) => (
              <div className="b-speed-block" data-scroll key={index}>
                <div className="b-image_wrapper" data-scroll data-scroll-repeat>
                  <div className="b-image" data-scroll>
                    <Image
                      width={1200}
                      height={1200}
                      key={img?.id}
                      src={img?.image?.publicUrlTransformed || '/fallback.jpg'}
                      alt={img?.altText}
                      className="b-speed-block_image img"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        shimmer(1200, 1200)
                      )}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </ImgContainer>
        </div>
      </GridLeft>

      <GridRight id="product-details" data-scroll>
        <GRSticky
          data-scroll
          data-scroll-target="#product-details"
          data-scroll-sticky>
          <motion.header
            className="details-info flex sb"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={{
              enter: { transition: { staggerChildren: 0.095 } },
            }}>
            <div>
              <span className="ingredient block relative overflow-hidden">
                <motion.span
                  style={{ color: 'var(--green)', fontWeight: '700' }}
                  variants={revealInOutSlow}
                  className="block">
                  {Product?.size}
                </motion.span>
              </span>

              <ProductName>
                <span className="block relative overflow-hidden">
                  <motion.span variants={revealInOutSlow} className="block">
                    {Product.name}
                  </motion.span>
                </span>
              </ProductName>
            </div>

            <PriceStyles>
              <span className="block relative overflow-hidden">
                <motion.span variants={revealInOutSlow} className="block">
                  {formatMoney(Product.price)}
                </motion.span>
              </span>
            </PriceStyles>
          </motion.header>

          <motion.div
            className="p-description"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={{
              enter: { transition: { staggerChildren: 0.095 } },
            }}>
            <div className="p-description-left">
              <h3>
                <span className="block relative overflow-hidden">
                  <motion.span variants={revealInOutSlow} className="block">
                    Why we love it
                  </motion.span>
                </span>
              </h3>
            </div>
            <div className="p-description-right">
              <ProductDescription>
                <span className="block relative overflow-hidden">
                  <motion.span variants={revealInOutSlow} className="block">
                    {Product.description}
                  </motion.span>
                </span>
              </ProductDescription>
            </div>
          </motion.div>

          <motion.div initial="initial" animate="enter" exit="exit" variants={fade}>
            <ProductDetails>
              <Accordion
                title="Shipping"
                content={shipping.map((ship, index) => (
                  <ProductDetailsIngredients key={index}>
                    <li>{ship}</li>
                  </ProductDetailsIngredients>
                ))}
              />
              <Accordion
                title="Details"
                content={ingredients.map((ingredient, index) => (
                  <ProductDetailsIngredients key={index}>
                    <li>{ingredient || 'hello'}</li>
                  </ProductDetailsIngredients>
                ))}
              />
            </ProductDetails>
          </motion.div>

          <GRButtons>
            {!me && (
              <BtnStyles>
                <Link href="/login" passHref>
                  <button title="Sign in to add to cart" type="button">
                    login to buy
                  </button>
                </Link>
              </BtnStyles>
            )}

            {me && (
              <>
                {Product?.inStock !== 'yes' ? (
                  <BtnStyles>
                    <InStock>
                      <span
                        style={{
                          display: 'inline-block',
                          marginRight: '10px',
                        }}>
                        <IconStock />
                      </span>
                      <strong>{instock}</strong>
                      <StockIndicator color={stockColor} />
                    </InStock>
                    <button type="button" disabled={instock}>
                      Cannot add to cart
                    </button>
                  </BtnStyles>
                ) : (
                  <BtnStyles>
                    <InStock>
                      <span
                        style={{
                          display: 'inline-block',
                          marginRight: '10px',
                        }}>
                        <IconStock />
                      </span>
                      <strong>{instock}</strong>
                      <StockIndicator color={stockColor} />
                    </InStock>
                    <div className="btn-styles-inner">
                      <BuyNow id={id} />
                      <AddToCart id={id} />
                    </div>
                  </BtnStyles>
                )}
              </>
            )}
          </GRButtons>
        </GRSticky>
      </GridRight>
    </GridContainer>
  );
}
