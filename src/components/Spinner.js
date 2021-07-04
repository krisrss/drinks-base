import React from 'react';
import '../css/Spinner.css';

const Spinner = () => {
    return (
        <div className='spinner-border main-spinner' role='status'>
            <span className='sr-only'>Loading...</span>
        </div>
    );
};

export default Spinner;