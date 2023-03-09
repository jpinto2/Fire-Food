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
            <div className='container'>
              <h2>Hey there, {Auth.getProfile().data.username}!</h2>
              <button className="btn btn-danger" onClick={logout}>
                  Logout
                </button>
              <UserReviews/>
            </div>
          </>
        ) : (
          <p>
            You need to be logged in to view your profile. Please{' '}
            <Link to="/signup">signup.</Link> or <Link to="/login">login</Link>
          </p>
        )}
      </div>
    );
};

export default Profile;