import { Button } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookingData, setBookingData] = useState(null);
    // console.log(bookingData);

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
        // setBookingData(loggedInUser);
    }
    // console.log(service);

    const handlePayment = (paymentId) => {
        console.log(paymentId);
        const newBookingData = {
            ...bookingData,
            stripePaymentId: paymentId
        }
        setBookingData(newBookingData);

        // fetch('http://localhost:5000/addBooking', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(bookingData)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data) {
        //             alert('your booking placed successfully');
        //         }
        //     })
    }
    const handleBooking = () => {
        console.log(bookingData);
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
    // style={{ display: bookingData ? 'none' : 'block' }}
    // style={{ display: bookingData ? 'block' : 'none' }}
    return (
        <div className="d-flex justify-content-center">
            <div >
                {!bookingData && <div>
                    <h3>Service: {title}</h3>
                    <h3>Name: {loggedInUser.name}</h3>
                    <h3>Email: {loggedInUser.email}</h3>
                    <Button variant="info" onClick={() => handleSubmit()}  >Get Booking</Button>
                </div>
                }
                {bookingData && <div>
                    <ProcessPayment handlePayment={handlePayment} ></ProcessPayment>
                </div>
                }
            </div>
            <Button onClick={handleBooking}> Book Now </Button>
        </div>
    );
};

export default Checkout;