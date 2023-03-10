import React from 'react';
import Auth from '../utils/auth';
import { Link } from "react-router-dom"

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries'

import UserReviews from '../components/UserReviews'

const Profile = () => {
  const { loading, data } = useQuery(QUERY_USER)

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

    return (
      <div>  
        {Auth.loggedIn() ? (
          <>
            <div className='container p-3'>
              <h2>Welcome, {Auth.getProfile().data.username}!</h2>
              <button className="btn btn-danger mb-3" onClick={logout}>
                  Logout
                </button>
              <UserReviews/>
            </div>
          </>
        ) : (
          <div>
            <h3 className="flex justify-center mb-4 p-5">
              You need to be logged in to add a restaurant. Please{' '}
              <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
            </h3>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            {/* file up the page  */}
    
            


        
          </div>
        )}
      </div>
    );
};

export default Profile;
