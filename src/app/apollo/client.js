import { ApolloClient, InMemoryCache } from '@apollo/client';

const generateApolloLink = () => undefined;

export const client = new ApolloClient({
  link: generateApolloLink(),
  cache: new InMemoryCache()
});
