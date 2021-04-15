import { faFacebook, faGooglePlus, faGooglePlusG, faInstagram, faLinkedinIn, faPinterest, faTwitter, faTwitterSquare, faWhatsapp, faYoutube, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container mt-5 pt-3 ps-5'>
            <div className="d-flex justify-content-around ">
                <Link className='quick-link' to='/services'>Services</Link>
                <Link className='quick-link' to='/services'>Services</Link>
                <Link className='quick-link' to='/services'>Services</Link>
                <Link className='quick-link' to='/services'>Services</Link>
                <Link className='quick-link' to='/services'>Services</Link>
                <Link className='quick-link' to='/services'>Services</Link>
                <Link className='quick-link' to='/services'>Services</Link>
            </div>
            <div className="social-icons text-center m-4">
                <FontAwesomeIcon className='text-white icon' icon={faFacebook} />
                <FontAwesomeIcon className='text-white icon' icon={faTwitterSquare} />
                <FontAwesomeIcon className='text-white icon' icon={faInstagram} />
                <FontAwesomeIcon className='text-white icon' icon={faYoutube} />
                <FontAwesomeIcon className='text-white icon' icon={faLinkedinIn} />
                <FontAwesomeIcon className='text-white icon' icon={faPinterest} />
                <FontAwesomeIcon className='text-white icon' icon={faGooglePlus} />
                <FontAwesomeIcon className='text-white icon' icon={faWhatsapp} />

            </div>
            <address className='text-white text-center'>
                Office:
                Level-4, 34, Awal Centre, Banani, Dhaka
            </address>
            <p className="text-center text-white mt-2 ">Copyright © {new Date().getFullYear()} Event Fairy</p>
        </div>
    );
};

export default Footer;