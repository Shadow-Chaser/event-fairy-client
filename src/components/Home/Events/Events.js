import React from 'react';
import event from '../../../images/event.png'
import EventCard from '../EventCard/EventCard';

const eventsData = [
    {
        title: 'WORLDWIDE CHANNEL EVENT',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam, similique maiores veniam pariatur tempore.',
        img: event,
        date: '01 March 2021'
    },
    {
        title: 'WORLDWIDE CHANNEL EVENT',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam, similique maiores veniam pariatur tempore.',
        img: event,
        date: '01 March 2021'
    },
    {
        title: 'WORLDWIDE CHANNEL EVENT',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam, similique maiores veniam pariatur tempore.',
        img: event,
        date: '01 March 2021'
    }

]

const Events = () => {
    return (
        <div>
            <h2 className="text-center mt-5 mb-5 ">Latest Events We Organized</h2>
            <div className="row d-flex justify-content-center">
                {
                    eventsData.map(event => <EventCard event={event} ></EventCard>)
                }
            </div>
        </div>
    );
};

export default Events;