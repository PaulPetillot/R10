import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

export default client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjh2hph6n6njl0108f6n59j3j' }),
  cache: new InMemoryCache()
});