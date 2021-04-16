import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { serviceId } = useParams();
    const [service, setService] = useState();
    const { title, price } = service || {};

    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId]);
    // console.log(service);
    return (
        <div className="row">
            <div className="col">
                <h3>Service: {title}</h3>
                <h3>Name: {loggedInUser.name}</h3>
                <h3>Email: {loggedInUser.email}</h3>
            </div>
            <div className="col"></div>
        </div>
    );
};

export default Checkout;