import React from 'react';
import { NavLink } from "react-router-dom";
const Results = () => {
    return (
        <div>
            <h1>Results</h1>
            <p>Order basket redesing</p>
            <nav>
                <ul>
                    <li className='resultli'><NavLink to="/"> Back</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Results;