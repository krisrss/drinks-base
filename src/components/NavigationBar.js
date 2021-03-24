import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div>
            <Link to={'/'}>
                <button>Search by name</button>
            </Link>
            --------------
            <Link to={'/ingredients'}>
                <button>Search by ingredients</button>
            </Link>

        </div>
    )
};

export default NavigationBar;