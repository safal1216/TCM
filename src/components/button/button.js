
import React from 'react';
import { Link } from 'react-router-dom';
export function Button({ onClick }) {
    return (
        <div>
            <button className='btnn' onClick={onClick}>Learn More <img src="./images/Icon.svg" className='beelll' alt='bell'/> </button>
        </div>

    );
}