import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { DropdownButton } from 'react-bootstrap';
import './ManageBookingCard.css'
import { Dropdown } from 'react-bootstrap';

const ManageBookingCard = (props) => {
    const { _id, name, email, service, status } = props.booking;
    const [bookingStatus, setBookingStatus] = useState(status)
    const [isEdit, setIsEdit] = useState(true);
    const [isDropDown, setIsDropDown] = useState(false);
    const [update, setUpdate] = useState({
        bookingId: "",
        status: ""
    })
    const getId = (bookingId) => {
        const newUpdate = { ...update };
        newUpdate.bookingId = bookingId;
        setUpdate(newUpdate);
        // console.log("object");
        setIsDropDown(true);
        setIsEdit(false);
    }


    const handleSelect = (e) => {
        // console.log(e);
        const newUpdate = { ...update };
        newUpdate.status = e;
        setUpdate(newUpdate);

    }

    const handleUpdate = () => {
        fetch(`https://aqueous-lake-79514.herokuapp.com/updateBooking`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(result => {
                // console.log("data updated");
                if (result) {
                    console.log(result);
                    setBookingStatus(update.status)

                }
            })
    }

    // console.log(update);


    return (
        <div className='booking-manage row ml-2'>
            <h5 className='cell col-md-2'>{name}</h5>
            <h5 className='cell col-md-4'>{email}</h5>
            <h5 className='cell col-md-3'>{service}</h5>
            <h5 className='cell col-md-1'>{bookingStatus}</h5>
            {
                isEdit && <FontAwesomeIcon className='cell ml-5' onClick={() => getId(_id)} icon={faEdit} style={{ color: "rgb(70, 221, 70)", fontSize: "25px" }}  ></FontAwesomeIcon>
            }
            {
                isDropDown && <div className='cell col-md-1'>
                    <DropdownButton onSelect={handleSelect} alignRight variant='info' title="Change Status" id="dropdown-menu-align-right" >
                        <Dropdown.Item eventKey="Pending">Pending</Dropdown.Item>
                        <Dropdown.Item eventKey="Ongoing">Ongoing</Dropdown.Item>
                        <Dropdown.Item eventKey="Done">Done</Dropdown.Item>
                    </DropdownButton>
                    <Button className='mt-1' onClick={handleUpdate} variant='info'>Update</Button>
                </div>
            }

        </div>
    );
};

export default ManageBookingCard;