import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// components
import Departments from './components/Departments';

// Apollo stuffs
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/'
});

const client = new ApolloClient({
  cache,
  link
});

class App extends Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <Departments/>
      </ApolloProvider>
    );
  }
}

export default App;
