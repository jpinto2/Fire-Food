import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    // <ApolloProvider client={client}>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/LinkOne' element={<PageOne />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer/>
  </Router>
    // </ApolloProvider>
  );
}

export default App;
