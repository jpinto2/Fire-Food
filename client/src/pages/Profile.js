import React from 'react';
import Auth from '../utils/auth';
import { Link } from "react-router-dom"

const Profile = () => {

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

              <div className="card col-10 p-0">
                <h5 className="card-header">Restaurant:</h5>
                <div className="card-body">
                  <p className="card-text">Menu Item: </p>
                  <p className="card-text">Rating: </p>
                  <p className="card-text">Comment: </p>
                  <p className="card-text">your review was posted on [A random date]</p>
                </div>
              </div>
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