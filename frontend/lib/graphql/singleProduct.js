import { gql } from '@apollo/client';

export const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      price
      description
      inStock
      size
      pve
      ingredients
      shipping
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
