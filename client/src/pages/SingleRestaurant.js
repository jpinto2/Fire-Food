import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';

import { QUERY_SINGLE_RESTAURANT } from '../utils/queries';

const SingleRestaurant = () => {
  const { restaurantId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_RESTAURANT, {
    variables: { restaurantId: restaurantId }
  })
  const reviews = data?.reviews || []
  console.log(data)

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="card bg-white card-rounded w-50">
      <ReviewForm/>
      <ReviewList
        reviews={reviews}
      />
      
    </div>
  );
};

export default SingleRestaurant;