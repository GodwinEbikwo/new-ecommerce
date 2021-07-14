/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import formatMoney from '../../lib/formatMoney';
import AddToCart from '../cart/AddToCart';
import { useUser } from '../auth/User';
import {
  ProductContainer,
  ProductLink,
  ProductInfoContainer,
  ProductSize,
  ProductTitle,
  ProductPrice,
} from './ProductStyles';
import Image from 'next/image';
import { toBase64, shimmer } from '../../helpers/ImageLoading';


export default function Product({ src, name, alt, id, price, size }) {
  const user = useUser();
  const slug = name.replace(/[%\s]/g, '-').toLowerCase();
  
  return (
    <ProductContainer>
      <Link href="/product/[name]/[id]" as={`/product/${slug}/${id}`} passHref>
        <ProductLink>
          <div className="img-container">
            <Image
              src={src}
              width={540}
              height={540}
              alt={alt}
              quality="85"
              loading="eager"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(540, 540)
              )}`}
            />
            <div className="img-c-center">
              <div className="img-icon" />
              <p className="img-txt">View</p>
            </div>
          </div>
          <ProductInfoContainer>
            <ProductSize>{size}</ProductSize>
            <ProductPrice>{formatMoney(price)}</ProductPrice>
          </ProductInfoContainer>
          <ProductTitle>{name}</ProductTitle>
        </ProductLink>
      </Link>

      {user && (
        <div className="atc">
          <AddToCart id={id} />
        </div>
      )}
    </ProductContainer>
  );
}


