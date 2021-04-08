import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../css/NavigationBar.css';

const NavigationBar = () => {
    const history = useHistory();
    const termPresent = history.location.pathname.includes("ingredients");

    const [byName, setByName] = useState('nav-active');
    const [byIngredients, setByIngredients] = useState('nav-inactive');

    useEffect(() => {
        const setButtonStatus = () => {
            if (termPresent === false) {
                setByName('nav-active');
                setByIngredients('nav-inactive');
            }
            else {
                setByName('nav-inactive');
                setByIngredients('nav-active');
            }
        }
        setButtonStatus();
    }, []);

    return (
        <div className='NavigationBar'>
            <Link to={'/'} className={`navbutton ${byName}`}>
                By name
            </Link>

            <Link to={'/ingredients'} className={`navbutton ${byIngredients}`}>
                By ingredients
            </Link>
        </div>
    )
};

export default NavigationBar;