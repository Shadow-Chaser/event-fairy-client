import React from 'react';
import ashab from '../../../images/ashab.jpg';
import Review from '../Review/Review';

const testimonialsData = [
    {
        name: 'Ashab Hussan',
        address: 'Sylhet BD',
        reviewText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam, similique maiores veniam pariatur tempore.',
        img: ashab,
    },
    {
        name: 'Ashab Hussan',
        address: 'Sylhet BD',
        reviewText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam, similique maiores veniam pariatur tempore.',
        img: ashab,
    }, {
        name: 'Ashab Hussan',
        address: 'Sylhet BD',
        reviewText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam, similique maiores veniam pariatur tempore.',
        img: ashab,
    }
]

const Testimonials = () => {
    return (
        <div>
            <h2 className="text-center mt-5 mb-5">Testimonials</h2>
            <div className="row d-flex justify-content-center">
                {
                    testimonialsData.map(review => <Review review={review} ></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonials;