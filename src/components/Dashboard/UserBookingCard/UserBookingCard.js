import React from 'react';
import './UserBookingCard.css'

const UserBookingCard = (props) => {
    const { _id, stripePaymentId, email, status, service, bookingDate, bookingTime } = props.booking;
    return (
        <div className='booking-card'>
            <small>Booking Id: {_id}</small> <br />
            <small>Payment Id: {stripePaymentId} </small>
            <h4>Service: {service}</h4>
            <h5>Status: {status}</h5>

        </div>
    );
};

export default UserBookingCard;