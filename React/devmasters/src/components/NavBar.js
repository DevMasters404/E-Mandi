import React from 'react';
import './Navbar.css'
// import link from react router dom 
import { Link } from 'react-router-dom';

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

export default function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
            <img src="color_logo.png" width="30" height="30"
                className="d-inline-block align-top" alt="" style={{"marginRight":"5px"}} />
            E-Mandi
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" to='/'>Login</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Sign Up</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Pricing</a>
                </li>
            </ul>
        </div>
    </nav>
    </>
  )
}
