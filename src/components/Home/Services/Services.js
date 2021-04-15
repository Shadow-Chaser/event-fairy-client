import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import wedding from '../../../images/wedding.jpeg';
import family from '../../../images/family.jpg';
import birthday from '../../../images/birthday.jpeg';


const servicesData = [
    {
        title: 'Wedding Management',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam, similique maiores veniam pariatur tempore.',
        img: wedding,
        price: 500
    },
    {
        title: 'Birthday Party',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam, similique maiores veniam pariatur tempore.',
        img: birthday,
        price: 500
    },
    {
        title: 'Family Event',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam, similique maiores veniam pariatur tempore.',
        img: family,
        price: 500
    }
]

const Services = () => {
    return (
        <div className=''>
            <h2 className="text-center mt-5 mb-5">Services We Provide</h2>
            <div className="row d-flex justify-content-center">
                {
                    servicesData.map(service => <ServiceCard service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;