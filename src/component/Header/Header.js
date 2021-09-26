import React from 'react';
import NavBar from '../NavBar/NavBar';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="text-center header">
                <h3>Create A Singer Group</h3>
                <h5>
                “Music shouldn't be just a tune, it should be a touch.”
                </h5>
                <h3>Total Budget: 80+ Million</h3>
            </div>
        </div>
    );
};

export default Header;