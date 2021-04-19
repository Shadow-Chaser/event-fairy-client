import React, { useContext, useEffect, useState } from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { Router } from 'react-router';
import { UserContext } from '../../../App';
import ManageBookings from '../ManageBookings/ManageBookings';
import UserBookings from '../UserBookings/UserBookings';


const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    return (
        <div className="container-fluid ">
           
            {
                isAdmin ? <ManageBookings></ManageBookings> : <UserBookings></UserBookings>
            }

        </div>
    );
};

export default Dashboard;