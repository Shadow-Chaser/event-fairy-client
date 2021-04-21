import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ManageBookingCard from '../ManageBookingCard/ManageBookingCard';
import './ManageBookings.css'

const ManageBookings = () => {
    const [bookingsData, setBookingsData] = useState([]);

    useEffect(() => {

        fetch('https://aqueous-lake-79514.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => {
                setBookingsData(data);
            })

    }, [])

    return (
        <div className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <h1 className='text-info mt-3 mb-3' style={{ marginLeft: '10px' }}>Manage Bookings</h1>

                <div className="booking-caption row ml-2">
                    <h3 className='cell col-md-2'>Name</h3>
                    <h3 className='cell col-md-4'>Email</h3>
                    <h3 className='cell col-md-3'>Service</h3>
                    <h3 className='cell col-md-1'>Status</h3>
                    <h3 className='cell col-md-1 ml-2'>Action</h3>
                </div>

                {
                    bookingsData.map(booking => <ManageBookingCard booking={booking} ></ManageBookingCard>)
                }


            </div >
        </div>
    );
};

export default ManageBookings;