import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_REVIEW } from '../utils/mutations';

import Auth from '../utils/auth';

function ReviewForm({
  restaurantId
}) {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [menuItem, setMenuItem] = useState('');
  const [date, setDate] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const [addReview, { error }] = useMutation(ADD_REVIEW)


  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either menuItem, date, rating, or comment
    if (inputType === 'menuItem') {
      setMenuItem(inputValue);
    } else if (inputType === 'date') {
      setDate(inputValue);
    } else if (inputType === 'rating') {
      setRating(inputValue);  
    } else {
      setComment(inputValue);
    }
  };

  const handleFormSubmit = async (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    try {
      const { data } = await addReview({
        variables: {
          restaurantId,
          menuItem,
          date,
          rating: parseInt(rating),
          comment,
          username: Auth.getProfile().data.username,
        },
      });

      setMenuItem('');
      setDate('');
      setRating('');
      setComment('');
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
          <p>Add review</p>
          <form className="form">
            <input
              value={menuItem}
              name="menuItem"
              onChange={handleInputChange}
              type="text"
              placeholder="menuItem"
            />
            <input
              value={date}
              name="date"
              onChange={handleInputChange}
              type="date"
              placeholder="date"
            />
            <input
              value={rating}
              name="rating"
              onChange={handleInputChange}
              type="number"
              min = "1"
              max = "10"
              placeholder="rating"
            />
            {
              // will likely need to update this later to make comment field not look like one line
            }
            <input
              value={comment}
              name="comment"
              onChange={handleInputChange}
              type="text"
              placeholder="comment"
            />
            <button type="button" onClick={handleFormSubmit}>Submit</button>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to add a review. Please{' '}
          <Link to="/signup">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
}

export default ReviewForm;
