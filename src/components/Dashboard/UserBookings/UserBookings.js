import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import UserBookingCard from '../UserBookingCard/UserBookingCard';

const UserBooking = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userBookings, setUserBookings] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-lake-79514.herokuapp.com/userBookings?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setUserBookings(data))
    }, []);
    return (
        <div className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <h4 className='mt-3 ml-3'>User Email: {loggedInUser.email}</h4>
                <div className="ml-2 row">
                    {
                        userBookings.map(booking => <UserBookingCard booking={booking}></UserBookingCard>)
                    }
                </div>

            </div>
        </div>
    );
};

export default UserBooking;