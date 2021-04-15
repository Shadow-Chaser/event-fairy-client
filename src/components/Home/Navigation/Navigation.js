import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (

        <Navbar bg='' expand='lg'>
            <Navbar.Brand className='text-white'> Event Fairy </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    <Nav.Link><Link className='nav-link text-white' to='/home'>Home</Link></Nav.Link>
                    <Nav.Link><Link className='nav-link text-white' to='/services'>Services</Link></Nav.Link>
                    <Nav.Link><Link className='nav-link text-white' to='/dashboard'>Dashboard</Link></Nav.Link>
                    <Nav.Link><Link className='nav-link text-white' to='/deals'>Deals</Link></Nav.Link>
                    <Nav.Link><Link className='nav-link text-white' to='/login'>Login</Link></Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;