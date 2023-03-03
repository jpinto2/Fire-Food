import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import PageOne from './pages/pageOne';
import Footer from './components/Footer';

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
              <Route path='/link-one' element={<LinkOne />}/>
              <Route path='/link-two' element={<LinkTwo />}/>
              <Route path='/sign-up' element={<SignUp />}/>
            </Routes>
            <Footer/>
        </Router>
    // </ApolloProvider>
  );
}

export default App;
