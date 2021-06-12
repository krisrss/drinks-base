import React from 'react';
import '../css/Logo.css';
import mainLogo from '../images/logo.png';

const Logo = () => {
    return (
        <div className='Logo'>

            <div className='img-wrapper'>
                <img src={mainLogo} />
            </div>


        </div>
    );
};

export default Logo;