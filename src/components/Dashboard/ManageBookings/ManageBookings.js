import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../Sidebar/Sidebar';

const ManageBookings = () => {
    const [bookingsData, setBookingsData] = useState([]);
    const [status, setStatus] = useState(null)
    const [isEdit, setIsEdit] = useState(true);
    const [isDropDown, setIsDropDown] = useState(false);
    const [update, setUpdate] = useState({
        bookingId: "",
        status: ""
    })

    useEffect(() => {

        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => {
                setBookingsData(data);
            })

    }, [])

    const getId = (bookingId) => {
        const newUpdate = { ...update };
        newUpdate.bookingId = bookingId;
        setUpdate(newUpdate);
        // console.log("object");
        setIsDropDown(true);
        setIsEdit(false);
    }


    const handleSelect = (e) => {
        console.log(e);
        const newUpdate = { ...update };
        newUpdate.status = e;
        setUpdate(newUpdate);

    }

    const handleUpdate = () => {
        fetch(`http://localhost:5000/updateBooking`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(result => {
                // console.log("data updated");
                if (result) {
                    console.log(result);
                    // setStatus(update.status);
                    // const newUpdate = { ...update };
                    // newUpdate.bookingId = "";
                    // setUpdate(newUpdate);

                    const updatedBooking = bookingsData.find(booking => booking._id === update.bookingId);
                    updatedBooking.status = update.status;
                    const temp = bookingsData.filter(booking => booking._id !== update.bookingId);
                    const newBookingsData = [...temp, updatedBooking]
                    setBookingsData(newBookingsData);
                }
            })
    }

    console.log(update);

    return (
        <div className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
            <h1>All Bookings</h1>

            <Table striped bordered hover style={{ width: "80%", margin: '0 auto' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Service</th>
                        <th>Status</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        bookingsData.map(booking =>
                            <tr>
                                <td>{booking.name}</td>
                                <td>{booking.email}</td>
                                <td>{booking.service}</td>
                                <td>{status && update.bookingId === booking._id ? status : booking.status}</td>
                                <td>
                                    {
                                        isEdit && <FontAwesomeIcon onClick={() => getId(booking._id)} icon={faEdit} style={{ color: "rgb(70, 221, 70)", fontSize: "25px" }}  ></FontAwesomeIcon>
                                    }
                                    {
                                        isDropDown && <div>
                                            <DropdownButton onSelect={handleSelect} alignRight variant='info' title="Change Status" id="dropdown-menu-align-right" >
                                                <Dropdown.Item eventKey="Pending">Pending</Dropdown.Item>
                                                <Dropdown.Item eventKey="Ongoing">Ongoing</Dropdown.Item>
                                                <Dropdown.Item eventKey="Done">Done</Dropdown.Item>
                                            </DropdownButton>
                                            <Button className='mt-1' onClick={handleUpdate} variant='info'>Update</Button>
                                        </div>
                                    }
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>


            </div >
        </div>
    );
};

export default ManageBookings;