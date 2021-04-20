import { Carousel } from 'react-bootstrap';
import React from 'react';
import event from '../../../images/event.png'
import event2 from '../../../images/event2.jpg'
import event3 from '../../../images/event3.jpg'
import EventCard from '../EventCard/EventCard';
import userEvent from '@testing-library/user-event';
import './Events.css'
const eventsData = [
    {
        title: 'WORLDWIDE CHANNEL EVENT',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam, similique maiores veniam pariatur tempore.',
        img: event,
        date: '01 March 2021'
    },
    {
        title: 'Corporate Events launches Virtual Svent Studio',
        description: 'Swindon-based event production agency, Corporate Events, has announced the launch of its Virtual Event Studio in August 2020.',
        img: event2,
        date: '02 August 2020'
    },
    {
        title: 'Wedding Event',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam, similique maiores veniam pariatur tempore.',
        img: event3,
        date: '01 April 2011'
    }

]

const Events = () => {
    return (
        <div>
            <h2 className="text-center mt-5 mb-5 ">Latest Events We Organized</h2>
            <div className="d-flex justify-content-center">
                <Carousel style={{ width: "80%" }}>

                    <Carousel.Item>
                        <img className="d-block w-100 event-image" src={eventsData[0].img} alt="First slide" />
                        <Carousel.Caption>
                            <h3>{eventsData[0].title}</h3>
                            <p>{eventsData[0].description}</p>
                            <p>{eventsData[0].date}</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100  event-image" src={eventsData[1].img} alt="First slide" />
                        <Carousel.Caption>
                            <h3>{eventsData[1].title}</h3>
                            <p>{eventsData[1].description}</p>
                            <p>{eventsData[1].date}</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100  event-image" src={eventsData[2].img} alt="First slide" />
                        <Carousel.Caption>
                            <h3>{eventsData[2].title}</h3>
                            <p>{eventsData[2].description}</p>
                            <p>{eventsData[2].date}</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>

        </div>    

    );
};

export default Events;