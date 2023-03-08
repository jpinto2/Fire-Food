import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantList = ({
    restaurants
}) => {
    console.log(restaurants)
    if (!restaurants.length) {
        return <div>That restaurant hasn't been added yet. Use the form below to add it now!</div>
    }

    return (
        <div>
            {restaurants.map((restaurant) => (
                <div key={restaurant._id} className="card">
                    <Link to={`/singlerestaurant/${restaurant._id}`}>
                        <p>{restaurant.name}</p>
                        <p>{restaurant.address}</p>
                    </Link>

                </div>
            ))}
        </div>
    )
};

export default RestaurantList;