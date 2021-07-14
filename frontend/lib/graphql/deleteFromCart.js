import gql from 'graphql-tag';
export const DELETE_FROM_CART_MUTATION = gql`
  mutation DELETE_FROM_CART_MUTATION($id: ID!) {
    deleteFromCart(productId: $id) {
      id
    }
  }
`;
