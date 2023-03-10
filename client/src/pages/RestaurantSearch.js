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
            <h2 className= 'flex-row justify-center p-2'
            >Search Restaurant</h2>
                <form className= 'flex-row justify-center mb-4 p-3 form'>
                    <input
                    className="form-control p-2 mb-4"
                    value={restaurantName}
                    name="restaurantName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Restaurant Name"
                    />
                    <input
                    className="form-control p-2 mb-4"
                    value={zipCode}
                    name="zipCode"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Zipcode"
                    />
                    <button className="btn btn-danger" type="button" onClick={handleFormSubmit}>Search</button>
                </form>


            <div className="className= 'flex-row justify-center mb-4 p-3 ">
                <RestaurantList
                    restaurants={restaurants}
                />
            </div>
            <div className= 'flex-row justify-center mb-4 p-3'>
                <AddRestaurant/>
            </div>
        </div>
    );
};

export default RestaurantSearch;