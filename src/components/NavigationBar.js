import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../css/NavigationBar.css';
import ReactTooltip from "react-tooltip";
import Tooltip from '../components/Tooltip';

const NavigationBar = () => {
    const history = useHistory();
    const termPresent = history.location.pathname.includes("/ingredients");

    const setIngredientsNav = () => {
        if (termPresent) {
            return 'disabled-link nav-active';
        }
        else {
            return 'nav-inactive';
        };
    };

    const setKeywordNav = () => {
        if (termPresent === false) {
            return 'disabled-link nav-active';
        }
        else {
            return 'nav-inactive';
        };
    };

    return (
        <div className='NavigationBar'>
            <Link to={'/'} className={`navbutton ${setKeywordNav()}`}>
                By name
            </Link>

            <Link to={'/ingredients'} className={`navbutton ${setIngredientsNav()}`}>
                By ingredients
            </Link>


            {termPresent ?
                <>
                    <i data-tip data-for="registerTip" className="fas fa-info-circle info-tooltip"></i>
                    <ReactTooltip id="registerTip" place="bottom" effect="solid">
                        You can select up to three different ingredients for your search.
                    </ReactTooltip>
                </>
                : null
            }

            <Tooltip />

        </div>
    )
};

export default NavigationBar;