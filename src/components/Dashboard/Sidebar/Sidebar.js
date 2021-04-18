import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faSignOutAlt, faCommentDots, faPlus, faUserPlus, faShoppingCart, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';


// import * as firebase from "firebase/app";
// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from '../Login/firebase.config';


const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        phone: ''
    });

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    // google sign-out;
    const handleSignOut = () => {

        // if (firebase.apps.length === 0) {
        //     firebase.initializeApp(firebaseConfig);
        // }

        // firebase.auth().signOut()
        //     .then(res => {
        //         const signOutUser = {
        //             isSignedIn: false,
        //             name: '',
        //             email: '',
        //             photo: ''
        //         }
        //         setUser(signOutUser);
        //         setLoggedInUser({});
        //         console.log(res);
        //     })

        //     .catch(err => {
        //         console.log(err);
        //         console.log(err.message);
        //     })
    }


    return (


        <div className="sidebar d-flex flex-column justify-content-between position-fixed bg-info" style={{ height: "100vh" }}>

            <ul className="list-unstyled">
                <h3><Link to="/">Tripper</Link></h3>
                <div className="my-5">

                    {
                        isAdmin && <div>
                            <li>
                                <Link to="/manageBookings" className="sideBarlink">
                                    <FontAwesomeIcon icon={faShoppingCart} /> <span>All Bookings</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/manageServices" className="sideBarlink">
                                    <FontAwesomeIcon icon={faList} /> <span>Manage Service</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/addAdmin" className="sideBarlink">
                                    <FontAwesomeIcon icon={faCommentDots} /> <span>Make Admin</span>
                                </Link>
                            </li>

                        </div>

                    }



                    <li>
                        <Link to="/addReview" className="sideBarlink">
                            <FontAwesomeIcon icon={faCommentDots} /> <span>Add Review</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/userBookings" className="sideBarlink">
                            <FontAwesomeIcon icon={faCommentDots} /> <span>Your Bookings</span>
                        </Link>
                    </li>

                </div>



            </ul>
            <div className="text-center my-5">
                <Link to="/" onClick={handleSignOut} className="text-dark"><FontAwesomeIcon icon={faSignOutAlt} /> <span className="logoutBtn">Logout</span></Link>
            </div>
        </div>

    );
};

export default Sidebar;