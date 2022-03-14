import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://staging-graphql-service.onrewind.tv/graphql',
  headers: {
    "x-account-key": "SyT0uHf3I" //your custom header
  }, 
  cache : new InMemoryCache(),
});


ReactDOM.render(
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>,
  document.getElementById('root')
);
