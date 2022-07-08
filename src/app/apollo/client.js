import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client';
import { getRuntimeConfig } from '~config';

const generateApolloLink = () => {
  const config = getRuntimeConfig();

  if (!config?.endpoints) {
    console.warn('no endpoints found in env file');
    return undefined;
  }

  return split(
    operation => operation.getContext().dato === true,
    new HttpLink({
      uri: 'endpointUri',
      headers: {
        Authorization: `Bearer ${config.endpoints[0].token}`
      },
      fetch: (uri, options) => fetch(uri.replace(/endpointUri/gi, config.endpoints[0].uri), options)
    })
  );
};

export const client = new ApolloClient({
  link: generateApolloLink(),
  cache: new InMemoryCache()
});
