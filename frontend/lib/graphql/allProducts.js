import { gql } from '@apollo/client';

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
    allProducts(first: $first, skip: $skip) {
      id
      name
      price
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
`;
