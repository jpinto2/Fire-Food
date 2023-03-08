import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_RESTAURANT } from '../utils/mutations';

import Auth from '../utils/auth';

function AddRestaurant() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const [AddRestaurant, { error }] = useMutation(ADD_RESTAURANT)


  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either menuItem, date, rating, or comment
    if (inputType === 'name') {
      setName(inputValue);
    } else {
      setAddress(inputValue);
    }
  };

  const handleFormSubmit = async (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    try {
      const { data } = await AddRestaurant({
        variables: {
          name,
          address,
          thoughtAuthor: Auth.getProfile().data.username,
        },
      });

      setName('');
      setAddress('');

    } catch (err) {
      console.error(err);
    }
    // any error checking conditional goes here. Output an error message if needed than call return

    alert(`Successfully submitted`);

    // If everything goes according to plan, we want to clear out the input after a successful form submission
    
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <p>Add Restaurant</p>
          <form className="form">
            <input
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="name"
            />
            <input
              value={address}
              name="address"
              onChange={handleInputChange}
              type="text"
              placeholder="address"
            />

            <button type="button" onClick={handleFormSubmit}>Submit</button>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to add a restaurant. Please{' '}
          <Link to="/signup">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
}

export default AddRestaurant;
