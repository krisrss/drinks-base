import React from 'react';
import '../css/Logo.css';
import mainLogo from '../images/logo.png';
import { Link, useHistory } from 'react-router-dom';

const Logo = () => {

    const history = useHistory();

    const setPath = () => {
        if (history.location.pathname.includes('/ingredients')) {
            return '/ingredients';
        }
        else {
            return '/';
        };
    };

    return (
        <div className='Logo'>
            <div className='img-wrapper'>
                <Link to={setPath()}>
                    <img src={mainLogo} />
                </Link>
            </div>
        </div>
    );
};

export default Logo;