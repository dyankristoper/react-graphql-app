import React                from 'react';
import ApolloClient         from 'apollo-boost';
import { ApolloProvider }   from 'react-apollo';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <div id="main" className="container">
        <h1>React-GraphQL App</h1>
        <div className="flex-row">
          <div className="flex-large">
            <ProgramList/>
          </div>
          <div className="flex-large">
            <AddProgram/>
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
