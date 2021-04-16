import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';


const Testimonials = () => {
    const [testimonialsData, setTestimonialsData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setTestimonialsData(data))
    }, [])
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