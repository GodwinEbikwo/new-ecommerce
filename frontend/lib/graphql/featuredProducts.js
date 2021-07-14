import { gql } from '@apollo/client';

export const FEATURED_PRODUCTS_QUERY = gql`
  query FEATURED_PRODUCTS_QUERY {
    allProductImages(where: { altText_contains_i: "5n6" }, first: 3) {
      id
      product {
        id
        price
        description
        name
        size
        photo {
          id
          altText
          image {
            id
            publicUrlTransformed
          }
        }
      }
    }
  }
`;
