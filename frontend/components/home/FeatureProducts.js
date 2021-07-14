/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import { FeaturedContainer } from './styles/FeatureProductsStyles';
import { FEATURED_PRODUCTS_QUERY } from '../../lib/graphql/featuredProducts';
import formatMoney from '../../lib/formatMoney';
import Loading from '../../helpers/Loading';
import { toBase64, shimmer } from '../../helpers/ImageLoading';
import {
  ProductInfoContainer,
  ProductSize,
  ProductPrice,
  ProductTitle,
  ProductLink,
} from '../product/ProductStyles';

export default function FeatureProducts() {
  const { data, error, loading } = useQuery(FEATURED_PRODUCTS_QUERY, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
  });

  if (loading) return <Loading />;
  if (error) return <p>Error : {error.message}</p>;

  const featuredProducts = data?.allProductImages;
  if (!featuredProducts) return <p>No products to display</p>;

  return (
    <section className="container" data-scroll-section>
      <div style={{ padding: 'var(--spacer-double) 0' }}>
        <div id="featured-area" style={{ padding: 'var(--spacer-double) 0' }}>
          <h1>Shop our favourites</h1>
        </div>
        <FeaturedContainer data-scroll>
          {featuredProducts.map((fproduct) => (
            <FeatureProduct
              key={fproduct?.product?.id}
              id={fproduct?.product?.id}
              size={fproduct?.product?.size}
              name={fproduct?.product?.name}
              price={fproduct?.product?.price}
              alt={fproduct?.product?.name}
              src={
                fproduct?.product?.photo[0]?.image?.publicUrlTransformed ||
                '/fallback.jpg'
              }
            />
          ))}
        </FeaturedContainer>

        <div className="flex p-tb">
          <Link href="/products" passHref>
            <button className="main-button m-auto">Shop all products</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FeatureProduct({ src, name, alt, id, price, size }) {
   const slug = name.replace(/[%\s]/g, '-').toLowerCase();
  return (
    <Link href="/product/[name]/[id]" as={`/product/${slug}/${id}`} passHref>
      <ProductLink>
        <div className="b-speed-block" data-scroll>
          <div className="b-image_wrapper" data-scroll data-scroll-repeat>
            <div className="b-image" data-scroll>
              <img
                src={src}
                alt={alt}
                loading="lazy"
                className="b-speed-block_image img"
              />
            </div>
          </div>
        </div>
        <ProductInfoContainer>
          <ProductSize>{size}</ProductSize>
          <ProductPrice>{formatMoney(price)}</ProductPrice>
        </ProductInfoContainer>
        <ProductTitle>{name}</ProductTitle>
      </ProductLink>
    </Link>
  );
}

// export function FeatureProduct({ src, name, alt, id, price, size }) {
//   return (
//     <Link href="/product/[id]" as={`/product/${id}`} passHref>
//       <ProductLink>
//         <div className="b-speed-block" data-scroll>
//           <div className="b-image_wrapper" data-scroll data-scroll-repeat>
//             <div className="b-image" data-scroll>
//               <img
//                 src={src}
//                 // width={540}
//                 // height={540}
//                 alt={alt}
//                 // layout="responsive"
//                 // quality="85"
//                 loading="lazy"
//                 // placeholder="blur"
//                 className="b-speed-block_image img"
//                 // blurDataURL={`data:image/svg+xml;base64,${toBase64(
//                 //   shimmer(540, 540)
//                 // )}`}
//               />
//             </div>
//           </div>
//         </div>
//         <ProductInfoContainer>
//           <ProductSize>{size}</ProductSize>
//           <ProductPrice>{formatMoney(price)}</ProductPrice>
//         </ProductInfoContainer>
//         <ProductTitle>{name}</ProductTitle>
//       </ProductLink>
//     </Link>
//   );
// }
