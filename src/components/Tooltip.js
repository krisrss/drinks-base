import React from 'react';
import '../css/Tooltip.css';

const Tooltip = () => {
    return (
        <span>
            <i className="fas fa-info-circle info-tooltip"></i>

            <div className='tooltip-text up-arrow'>
                You can select up to three different ingredients for your search.
            </div>
        </span>
    )
};

export default Tooltip;