import React from 'react';
import { NavLink } from 'react-router-dom';
//import { Navbar, Nav, NavItem } from 'react-bootstrap';
import logo from "../images/mylogo.png";

const Nav = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary pt-0 pb-0" >
        <a className="navbar-brand" href="/">
            <img alt="logo" src={logo} width="50" height="50" className="d-inline-block align-top mt-0 mb-0" alt="" />
        </a>
        <a className="navbar-brand " href="/">My Movie App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav ml-auto">
                <li className="nav-item "><NavLink className="nav-link" to="/" exact>Home</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/discover">Discover</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/myfavourites">My Favourites</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/myrated">My Rated</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
            </ul>


        </div>
    </nav>
);

export default Nav;