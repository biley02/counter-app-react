import React, { Component } from 'react';


//You can also use sfc for stateless functional component 
const NavBar = (props) => {
    return ( 
        <nav className="NavBar navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <span className="badge badge-pill badge-secondary">
                {props.totalcounters}
            </span>
        </nav> 
        );
}
 
export default NavBar;
 
