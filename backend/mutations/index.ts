import { graphQLSchemaExtension } from '@keystone-next/keystone/schema/dist/keystone.cjs';
import addToCart from './addToCart';
import checkout from './checkout';
import minusFromCart from './minusFromCart';
import deleteFromCart from './deleteFromCart';

const graphql = String.raw;

export const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: graphql`
    type Mutation {
      addToCart(productId: ID): CartItem
      minusFromCart(productId: ID): CartItem
      deleteFromCart(productId: ID): CartItem
      checkout(token: String!): Order
    }
  `,
  resolvers: {
    Mutation: {
      addToCart,
      deleteFromCart,
      checkout,
      minusFromCart,
    },
  },
});
