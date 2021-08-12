/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import {
    ApolloClient,
    InMemoryCache,
    createHttpLink
  } from '@apollo/client';

  const defaultOptions = {
      wathchQuery: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      }
  };

  const cache = new InMemoryCache( {
      resultCaching: false,
  } );

  const link  = createHttpLink( {
    uri: `${process.env.NEXT_PUBLIC_WORDPESS_URL}/graphql`,
  } );

  const client = new ApolloClient( {
    link,
    cache,
    defaultOptions
  } );

  export default client;