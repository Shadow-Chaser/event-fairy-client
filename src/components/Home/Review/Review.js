import React from 'react';
import './Review.css'

const Review = (props) => {
    const { name, address, img, reviewText } = props.review;
    return (
        <div className='review-card text-center p-2 m-3'>
            <div className="img-container">
                <img className='rounded-circle' src={img} alt="" style={{ height: '80px' }} />
            </div>
            <p>{reviewText}</p>
            <h5>{name}</h5>
            <h6>{address}</h6>
        </div>
    );
};

export default Review;