import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import React from 'react';
import './App.css'
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import AddReview from './pages/Addreview';
import Profile from './pages/Profile'
// import SignUp from './pages/SignUp'
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
<<<<<<< HEAD
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
=======
    // <ApolloProvider client={client}>
    <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/add-review' element={<AddReview />}/>
          <Route path='/profile' element={<Profile />}/>
          {/* <Route path='/sign-up' element={<SignUp />}/> */}
        </Routes>
        <Footer/>
      </Router>
    // </ApolloProvider>
>>>>>>> d03205a0a8b8f77a35b1af4a809031c03c0824e1
  );
}

export default App;
