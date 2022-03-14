import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";
import { ApolloProvider } from 'react-apollo';


const client = new ApolloClient({
  uri: 'https://staging-graphql-service.onrewind.tv/graphql',
  headers: {
    "x-account-key": "SyT0uHf3I" //your custom header
  }
});


ReactDOM.render(
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>,
  document.getElementById('root')
);
