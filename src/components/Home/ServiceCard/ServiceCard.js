import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';



const ServiceCard = (props) => {
    const { _id, title, description, image, price } = props.service;

    const history = useHistory();
    const handleBooking = (serviceId) => {
        const url = `/service/${serviceId}`;
        history.push(url)
    }

    return (
        <Card style={{ width: '18rem' }} className='m-3'>
            <Card.Img variant="top" src={`data:image/png;base64,${props.service.image.img}`} style={{ height: '160px' }} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <h6>Only in ${price}</h6>
                <Button variant="primary" onClick={() => handleBooking(_id)} >Get Booking</Button>
            </Card.Body>
        </Card>
    );
};

export default ServiceCard;