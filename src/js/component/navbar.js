import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-custom">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">Home</span>
            </Link>
            
            <div className="ml-auto">
                <Link to="/demo">
                    <button className="btn btn-primary">Check the Context in action</button>
                </Link>
            </div>
        </nav>
    );
};

