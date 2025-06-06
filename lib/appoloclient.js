import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Change to your GraphQL server URL
  cache: new InMemoryCache(),
});

export default client;
