import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';

// Components
import ProgramList from './components/ProgramList';

function App() {
  return (
    <div id="main">
      <h1>List of Programs</h1>
      <ProgramList/>
    </div>
  );
}

export default App;
