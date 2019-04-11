import React from 'react';
import brandLogo from '../assets/img/underground.png';

export const NavBar = ({title}) => (

<nav className="navbar">
        <a className="navbar-brand" href="#">
        <img src={brandLogo} width="50" height="50" className=" mr-3 d-inline-block align-top" alt="" />
            {title}
        </a>
    </nav>
);