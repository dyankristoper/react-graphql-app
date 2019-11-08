import React, { Component } from 'react';
import ApolloClient         from 'apollo-boost';
import { ApolloProvider }   from 'react-apollo';

// Components
import ProgramList from './components/ProgramList';
import AddProgram  from './components/AddProgram';

// Apollo Client Setup
const client = new ApolloClient({
  uri: 'https://stark-tor-50435.herokuapp.com/graphiql'
})

function App() {
  return (
    <ApolloProvider client={ client }>
      <div id="main">
        <h1>List of Programs</h1>
        <ProgramList/>
        <AddProgram/>
      </div>
    </ApolloProvider>
  );
}

export default App;
