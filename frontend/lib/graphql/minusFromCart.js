import gql from 'graphql-tag';

export const MINUS_FROM_CART_MUTATION = gql`
  mutation MINUS_FROM_CART_MUTATION($id: ID!) {
    minusFromCart(productId: $id) {
      id
    }
  }
`;
