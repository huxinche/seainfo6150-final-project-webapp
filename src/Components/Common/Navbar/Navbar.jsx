import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavBar = (props) => {
    const { logo } = props;
    const [showlist, setShowlist] = useState(false);
    return (<>
        <div className="header">
            <div className="title"><NavLink exact to="/"><b>B University</b> Graduate Education</NavLink></div>
            <div className="logo"><img src={logo} alt="" /></div>
        </div>
        <nav>
            <span onClick={() => setShowlist(!showlist)} className="toggle">
                <i className="fas fa-bars"></i>
            </span>
            <ul className={showlist?"nav":"nav hide"}>
                <li>
                    <NavLink className="nav-item" exact activeClassName="selected" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="nav-item" exact activeClassName="selected" to="/findmyprogram">Find Your Program</NavLink>
                </li>
                <li>
                    <NavLink className="nav-item" exact activeClassName="selected" to="/whybu">Why BU</NavLink>
                </li>
                <li>
                    <NavLink className="nav-item" exact activeClassName="selected" to="/contactus">Contact US</NavLink>
                </li>
            </ul>
            <ul className={showlist?"auth":"auth hide"}>
                <li><NavLink className="nav-item" exact activeClassName="selected" to="/register">SignUp/Register</NavLink></li>
            </ul>
        </nav></>)
}

NavBar.propTypes = {
    logo: PropTypes.string.isRequired,
}

export default NavBar;