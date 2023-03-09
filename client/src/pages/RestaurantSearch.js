import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';

import RestaurantList from '../components/RestaurantList';
import AddRestaurant from '../components/AddRestaurant';

import { QUERY_RESTAURANTS } from '../utils/queries';

const RestaurantSearch = () => {
    const [restaurantName, setRestaurantName] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [getRestaurants, { loading, error, data }] = useLazyQuery(QUERY_RESTAURANTS);
    const restaurants = data?.restaurants || [];
  
    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name
        const inputValue = target.value;

        if (inputType === 'restaurantName') {
            setRestaurantName(inputValue);
        } else if (inputType ==='zipCode') {
            setZipCode(inputValue);
        }
    };

    const handleFormSubmit = async (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        
        try {
            const { data } = await getRestaurants({   
                variables: {
                    name: restaurantName,
                    zipcode: zipCode
                }
            });

        } catch (err) {
            console.error(err);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <p>Search Restaurant</p>
                <form className="form">
                    <input
                    value={restaurantName}
                    name="restaurantName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Restaurant Name"
                    />
                    <input
                    value={zipCode}
                    name="zipCode"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Zipcode"
                    />
                    <button type="button" onClick={handleFormSubmit}>Search</button>
                </form>
            <div className="card bg-white card-rounded w-50">
                Restaurant Search
                <RestaurantList
                    restaurants={restaurants}
                />
            </div>
            <div className="card bg-white card-rounded w-50">
                <AddRestaurant/>
            </div>
        </div>
    );
};

export default RestaurantSearch;