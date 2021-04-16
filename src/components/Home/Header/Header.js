import React from 'react';
import './Header.css'
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <div className='header-container'>
            {/* <Navigation></Navigation> */}
            <div className="text-container">
                <h1>Event Fairy</h1>
                <h4>All Events Should be memorable!</h4>
            </div>

        </div>
    );
};

export default Header;