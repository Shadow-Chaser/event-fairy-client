import React from 'react';
import './Review.css'

const Review = (props) => {
    const { name, address, img, review } = props.review;
    return (
        <div className='review-card text-center p-2 m-3'>
            <div className="img-container">
                <img className='rounded-circle' src={`data:image/png;base64,${props.review.image.img}`} alt="" style={{ height: '80px' }} />
            </div>
            <p>{review}</p>
            <h5>{name}</h5>
            <h6>{address}</h6>
        </div>
    );
};

export default Review;