import { useQuery, gql } from '@apollo/client';

export const CURRENT_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
        phone
        address
        city
        postalCode
        role {
          id
          name
          canManageProducts
        }
        cart {
          id
          quantity
          product {
            id
            price
            name
            description
            photo {
              image {
                publicUrlTransformed
              }
            }
          }
        }
      }
    }
  }
`;

export function useUser() {
  const { data } = useQuery(CURRENT_USER_QUERY);

  return data?.authenticatedItem;
}
