import { Button } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Navigation from '../../Home/Navigation/Navigation';
import './Checkout.css'

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookingData, setBookingData] = useState(null);
    const [isBookingConfirm, setIsBookingConfirm] = useState(false)
    // console.log(bookingData);

    const { serviceId } = useParams();
    const [service, setService] = useState();
    const { title, price, description } = service || {};


    useEffect(() => {
        fetch(`https://aqueous-lake-79514.herokuapp.com/service/${serviceId}`)
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
    
    const handlePayment = (paymentId) => {
        console.log(paymentId);
        const newBookingData = {
            ...bookingData,
            stripePaymentId: paymentId
        }
        setBookingData(newBookingData);
        setIsBookingConfirm(true)
    }
    const handleBooking = () => {
        console.log(bookingData);
        fetch('https://aqueous-lake-79514.herokuapp.com/addBooking', {
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
        <>
            <Navigation></Navigation>
        <div className="d-flex justify-content-center">

            <div >
                    {!bookingData && <div className='service-details'>
                        <h1>Service Details</h1>
                    <h3>Service: {title}</h3>
                        <h5>Details: {description}</h5>
                        <h4>Service Charge: ${price}</h4>
                    <h3>Name: {loggedInUser.name}</h3>
                    <h3>Email: {loggedInUser.email}</h3>
                    <Button variant="info" onClick={() => handleSubmit()}  >Get Booking</Button>
                </div>
                }
                {bookingData && <div>
                        <ProcessPayment handlePayment={handlePayment} price={price} ></ProcessPayment>
                </div>
                    }
                 {
                bookingData && <Button onClick={handleBooking} disabled={isBookingConfirm === false}> Confirm Booking </Button>
            }
            </div>

            </div>
        </>
    );
};

export default Checkout;