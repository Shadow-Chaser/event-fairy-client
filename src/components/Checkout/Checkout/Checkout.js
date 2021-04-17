import { Button } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookingData, setBookingData] = useState(null);
    const { serviceId } = useParams();
    const [service, setService] = useState();
    const { title, price } = service || {};

    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId]);

    const handleSubmit = () => {
        const newBookingData = {
            ...loggedInUser,
            service: title,
            price: price,
            status: 'Pending',
            bookingDate: new Date().toDateString('dd/mm/yyyy'),
            bookingTime: new Date().toTimeString()
        }
        setBookingData(newBookingData);
    }
    // console.log(service);

    const handlePayment = () => {


        fetch('http://localhost:5000/addBooking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('your booking placed successfully');
                }
            })
    }
    return (
        <div className="row">
            <div style={{ display: bookingData ? 'none' : 'block' }} className="col">
                <h3>Service: {title}</h3>
                <h3>Name: {loggedInUser.name}</h3>
                <h3>Email: {loggedInUser.email}</h3>
                <Button variant="info" onClick={() => handleSubmit()}  >Get Booking</Button>
            </div>
            <div style={{ display: bookingData ? 'block' : 'none' }} className="col">
                {/* <ProcessPayment></ProcessPayment> */}
                <h1>Payment gateway will be here</h1>
                <Button variant="info" onClick={() => handlePayment()}  >Pay</Button>
            </div>
        </div>
    );
};

export default Checkout;