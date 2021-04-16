import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [servicesData, setServicesData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServicesData(data))
    }, [])
    // console.log(servicesData);
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