import { useQuery } from '@apollo/client';
import { ALL_PRODUCTS_QUERY } from '../../lib/graphql/allProducts';
import Product from '../product/Product';
import { perPage } from '../../config';
import {
  GridContainer,
  GridItemOne,
  GridItemTwo,
  GridItemThree,
} from './ProductsStyles';
import Loading from '../../helpers/Loading';

export default function Products({ page }) {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  if (loading)
    return (
      <div style={{ paddingTop: 'var(--spacer-double)' }}>
        <Loading />
      </div>
    );
  if (error) return <p>Error : {error.message}</p>;

  const allProducts = data?.allProducts;
  if (!allProducts) return <p>No products to display</p>;

  return (
    <GridContainer>
      {/* <GridItemOne className="hide-for-mobile">
        <h1>DATA-GRID</h1>
      </GridItemOne> */}

      {/* <GridItemTwo className="hide-for-mobile">
        <div className="">
          <p>Hello</p>
        </div>
      </GridItemTwo> */}

      <GridItemThree className="grid">
        {allProducts.map((p) => (
          <Product
            key={p?.id}
            id={p?.id}
            name={p?.name}
            price={p?.price}
            size={p?.size}
            alt={p?.name}
            src={p?.photo[0]?.image?.publicUrlTransformed}
          />
        ))}
      </GridItemThree>
    </GridContainer>
  );
}
