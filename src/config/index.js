export const getRuntimeConfig = () => ({
  greet: process.env.GREET
  /*
  endpoints: [
    example: {
      uri: 'endpoint.com',
      context: 'endpoint',
      headers: {
        key: 'name',
        bearer: process.env.ENDPOINT_BEARER_TOKEN
      },
    }
  ]
  */
});
