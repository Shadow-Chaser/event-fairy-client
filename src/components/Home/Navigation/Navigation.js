import { faChalkboardTeacher, faHome, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Navigation.css'

const Navigation = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (

        <Navbar expand='lg' className='navbar'>
            <Navbar.Brand className='text-white'> Event Fairy </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    <Nav.Link><Link className='nav-link link' to='/home'> <FontAwesomeIcon icon={faHome} /> Home</Link></Nav.Link>
                    <Nav.Link><Link className='nav-link link' to='/dashboard'> <FontAwesomeIcon icon={faChalkboardTeacher} /> Dashboard</Link></Nav.Link>
                    <Nav.Link style={{ display: loggedInUser.email ? 'none' : 'block' }}><Link className='nav-link' to='/login'> <FontAwesomeIcon icon={faSignInAlt} /> Login</Link></Nav.Link>
                    {/* <Nav.Link style={{ display: loggedInUser.email ? 'block' : 'none' }}><Link className='nav-link' to='/' >
                        <img src={loggedInUser.image} style={{ width: '40px' }} className='ml-3 rounded-circle' alt="" />
                    </Link></Nav.Link> */}
                    <img src={loggedInUser.image} style={{ display: loggedInUser.email ? 'block' : 'none' }} className='ml-3 rounded-circle' alt="" />

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;