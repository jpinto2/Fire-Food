import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import React from 'react';
import './App.css'
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';

import Home from './pages/Home';
import NavBar from './components/NavBar';
import AddReview from './pages/AddReview';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import FindRestaurant from './pages/FindRestaurant'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Login from './pages/Login';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/findrestaurant' element={<FindRestaurant />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
        <Footer/>
      </Router>
    </ApolloProvider>
  );
}

export default App;
