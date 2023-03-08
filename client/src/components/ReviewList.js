import React from 'react';

const ReviewList = ({
    reviews
}) => {

    if (!reviews.length) {
        return <div>There are no reviews here yet!</div>
    }

    return (
        <div>
            {reviews.map((review) => (
                <div key={review._id} className="card">
                    <p className="card-header">
                        {review.menuItem}
                    </p>
                    <p className="card-body">
                        Written on: {review.date}
                        {review.rating}
                        {review.comment}
                    </p>
                </div>
            ))}
        </div>
    )
};

export default ReviewList;