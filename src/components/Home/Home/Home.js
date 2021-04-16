import React from 'react';
import Clients from '../Clients/Clients';
import ContactUs from '../ContactUs/ContactUs';
import Events from '../Events/Events';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div style={{ overflow: 'hidden' }}>
            {/* <Navigation></Navigation> */}
            <Header></Header>
            <Services></Services>
            <Events></Events>
            <Clients></Clients>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;