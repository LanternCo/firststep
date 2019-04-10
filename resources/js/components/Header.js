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
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <NavLink
                    class="nav-item nav-link"
                    activeClassName="active"
                    href="/"
                >
                    Home
                </NavLink>
                <NavLink
                    class="nav-item nav-link"
                    activeClassName="active"
                    href="#"
                >
                    Features
                </NavLink>
                <NavLink
                    class="nav-item nav-link"
                    activeClassName="active"
                    href="#"
                >
                    Pricing
                </NavLink>
                <NavLink
                    class="nav-item nav-link disabled"
                    activeClassName="activ"
                    href="#"
                >
                    Disabled
                </NavLink>
            </div>
        </div>
    </nav>
);

export default Header;
