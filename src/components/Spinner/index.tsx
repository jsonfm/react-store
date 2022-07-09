import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const Spinner = () => {
    return(
        <div className="text-5xl"><FaSpinner className="animate-spin"/></div>
    )
}

export { Spinner };
