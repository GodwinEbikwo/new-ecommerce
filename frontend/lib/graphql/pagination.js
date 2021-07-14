
import { gql } from '@apollo/client';

export const PAGINATION_QUERY = gql`
  query {
    _allProductsMeta {
      count
    }
  }
`;
