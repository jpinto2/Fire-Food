import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantList = ({
    restaurants
}) => {

    // if (!restaurants.length) {
    //     return <div className= 'flex-row justify-center'>That restaurant hasn't been added yet. Use the form below to add it now!</div>
    // }

    return (
        <div>
            {restaurants.map((restaurant) => (
                <div key={restaurant._id} className="card">
                    <Link to={`/singlerestaurant/${restaurant._id}`}>
                        <p className='card-header'>{restaurant.name}</p>
                        <p className='card-body'>{restaurant.zipcode}</p>
                    </Link>

                </div>
            ))}
        </div>
    )
};

export default RestaurantList;