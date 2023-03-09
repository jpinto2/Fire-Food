import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ReviewForm from '../components/ReviewForm';
import RestaurantReviews from '../components/RestaurantReviews';

import { QUERY_SINGLE_RESTAURANT } from '../utils/queries';

const SingleRestaurant = () => {
  const { restaurantId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_RESTAURANT, {
    variables: { restaurantId: restaurantId }
  })
  console.log(data)

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="card bg-white card-rounded w-50">

      <ReviewForm/>
      <RestaurantReviews/>
      
    </div>
  );
};

export default SingleRestaurant;