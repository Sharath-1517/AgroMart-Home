import React from "react";

function Navbar() {

    return (
        <header>
            <nav className='navbar'>
                <div className="navbar-logo">
                    <img src="images/agromart.webp" alt="agromart" className="navbar-img"/>
                    <h1>AgroMart</h1>
                </div>
                <ul>
                    <li href="#login"><a>Login</a></li>
                    <li href="#about"><a href="#about">About</a></li>
                    <li href="#services"><a href="#services">Services</a></li>
                    <li href="#contact"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );

}


export default Navbar;