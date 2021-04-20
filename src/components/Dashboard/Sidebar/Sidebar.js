import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faSignOutAlt, faCommentDots, faPlus, faUserPlus, faShoppingCart, faMoneyCheckAlt, faGripHorizontal, faHome, faCalendar, faUsers, faFileAlt, faCog, faCartArrowDown, faUserShield, faListAlt, faPlusCircle, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';


const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [isAdmin, setIsAdmin] = useState(false);
    console.log(isAdmin);

    useEffect(() => {
        fetch('https://aqueous-lake-79514.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])


    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh", width: '100vw' }}>
            <ul className="list-unstyled">
                <img src={loggedInUser.image} style={{ width: '60px', height: '60px' }} className='rounded-circle m-3' alt="" srcset="" />
                <li>
                    <Link to="/home" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>

                <div style={{ display: isAdmin ? 'block' : 'none' }}>
                    <li>
                        <Link to="/manageBookings" className="text-white">
                            <FontAwesomeIcon icon={faCartArrowDown} /> <span>All Bookings</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageServices" className="text-white">
                            <FontAwesomeIcon icon={faCog} /> <span>Manage Services</span>
                                </Link>
                    </li>
                    <li>
                        <Link to="/addService" className="text-white">
                            <FontAwesomeIcon icon={faPlusSquare} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addAdmin" className="text-white">
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                        </Link>
                    </li>
                </div>

                <div style={{ display: isAdmin ? 'none' : 'block' }}>
                    <li>
                        <Link to="/userBookings" className="text-white">
                            <FontAwesomeIcon icon={faListAlt} /> <span>Your Bookings</span>
                        </Link>
                    </li>
                        <li>
                        <Link to="/addReview" className="text-white">
                            <FontAwesomeIcon icon={faCommentDots} /> <span>Add Review</span>
                        </Link>
                    </li>
                </div>

                <Link to="" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </ul>

        </div>


    );
};

export default Sidebar;