import React from 'react';
import { NavLink } from "react-router-dom";
const Finalize = () => {
    return (
        <div>
            <h1>Finalize</h1>
            <p>Spring promotion</p>
            <nav>
                <ul>
                    <li className='finalizeli'><NavLink to="/"> Back</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Finalize;