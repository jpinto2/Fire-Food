import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_REVIEW } from '../utils/mutations';

import Auth from '../utils/auth';

const ReviewForm = () => {
  const { restaurantId } = useParams();
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [menuItem, setMenuItem] = useState('');
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
          reviewUser: Auth.getProfile().data.username,
          menuItem,
          rating: parseInt(rating),
          comment
        },
      });

      setMenuItem('');
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
        <div>
          <h2 className= 'flex-row justify-center p-2'
            >Add Review</h2>
          <form className= 'flex-row justify-center mb-4 p-3 form'>
            <input
            className="form-control p-2 mb-4"
              value={menuItem}
              name="menuItem"
              onChange={handleInputChange}
              type="text"
              placeholder="Menu Item"
            />
            <input
            className="form-control p-2 mb-4"
              value={rating}
              name="rating"
              onChange={handleInputChange}
              type="number"
              min = "1"
              max = "10"
              placeholder="rate 1-10"
            />
            {
              // will likely need to update this later to make comment field not look like one line
            }
            <input
            className="form-control p-2 mb-4"
              value={comment}
              name="comment"
              onChange={handleInputChange}
              type="text"
              placeholder="Comment"
            />
            <button className="btn btn-danger"type="button" onClick={handleFormSubmit}>Submit</button>
          </form>
          </div>
        </>
      ) : (
        <div className= 'flex-row justify-center p-2'>
          <p>
            You need to be logged in to add a review. Please{' '}
            <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default ReviewForm;
