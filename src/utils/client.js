import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const uri = process.env.REACT_APP_API_URL;
const key = process.env.REACT_APP_KEY;

// ici on initialise une instance d'un client apollo

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: uri, headers: { "x-account-key": key }, fetch }),
});

export default client;
