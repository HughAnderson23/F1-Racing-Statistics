import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/f1_f1logo.png"; // Import the logo image
import "../../styles/navbar.css";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-custom">
            <Link to="/" className="navbar-brand">
                <img src={logo} alt="Home" className="logo" />
            </Link>
            <div className="nav-links">
                <div className="separator">|</div> {/* Vertical separator */}
                <a href="https://usf1store.formula1.com/en/?_s=gppc&utm_campaign=Motorsports%20-%20League.com%20-%20US%20-%20EN|698185473&utm_medium=ppc&ks_id=6248_kw50851079&utm_term=formula%201&matchtype=be&utm_source=o&target=kwd-78409361745306:loc-190&pcrid=78409133288362&msclkid=68d5161fc7411471f20470302e86be28" 
                    target="_blank" rel="noopener noreferrer" className="f1-button">
                    Formula1 Website
                </a>
            </div>
        </nav>
    );
};

