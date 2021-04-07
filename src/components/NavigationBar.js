import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavigationBar.css';

const NavigationBar = () => {
    return (
        <div className='NavigationBar'>
            <Link to={'/'} className='navbutton nav-active'>
                By name
            </Link>

            <Link to={'/ingredients'} className='navbutton nav-inactive'>
                By ingredients
            </Link>
        </div>
    )
};

export default NavigationBar;