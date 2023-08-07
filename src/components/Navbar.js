import React from "react";
import Logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
    return(
        <div className="nav">
            <img src={Logo} alt="logo" />
            <h4>my travel journal</h4>
        </div>
    );
}

export default Navbar;
