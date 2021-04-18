import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const UserBooking = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userBookings, setUserBookings] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/userBookings?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setUserBookings(data))
    }, []);
    return (
        <div className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <ul>
                    {
                        userBookings.map(booking => <div className='mt-2'>
                            <h4>{booking.email}</h4>
                            <p>{booking.status}</p>
                            <p>{booking.bookingTime}</p>
                            <p>{booking.bookingDate}</p>
                        </div>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default UserBooking;