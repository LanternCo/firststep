import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import SignOut from "../SignOut";

import './Header.scss';

class Header extends Component {
    navbarLinks() {
        if (this.props.authenticated) {
            return <SignOut />;
        }

        return (
            <NavLink
                className="nav-item nav-link"
                activeClassName="active"
                to="/signin"
            >
                Sign In
            </NavLink>
        );
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Good Grief
                    </Link>
                </div>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav">
                        {this.navbarLinks()}
                    </div>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}
export default connect(mapStateToProps)(Header);
