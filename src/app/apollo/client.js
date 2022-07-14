import { ApolloClient, InMemoryCache } from '@apollo/client';
import { getRuntimeConfig } from '~config';

const generateApolloLink = () => {
  const config = getRuntimeConfig();

  return undefined;

  /*
    One GraphQL endpoint

    new HttpLink({
      uri: "http://example.com/endpoint"
    });

    Two GraphQL endpoints

    split(
      operation => operation.getContext().CONTEXT_NAME === true,
      new HttpLink({
        uri: "http://example.com/endpoint1"
      }),
      new HttpLink({
        uri: "http://example.com/endpoint2"
      })
    )
  */
};

export const client = new ApolloClient({
  link: generateApolloLink(),
  cache: new InMemoryCache()
});
