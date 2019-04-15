import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => (
    <nav className="navbar navbar-expand-md navbar-light navbar-laravel">
        <div className="container">
            <Link className="navbar-brand" to="/">
                Good Grief
            </Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink
                    className="nav-item nav-link"
                    activeClassName="active"
                    to="/signin"
                >
                    Sign In
                </NavLink>
            </div>
        </div>
    </nav>
);

export default Header;
