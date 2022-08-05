import React from "react";
import { NavLink } from "react-router-dom";
// import "./Header.css";

const Header = () => {
    return (
        <nav>
            <NavLink to="/" activeStyle={{ color: "tomato" }} end>
                Home
            </NavLink>{" "}
            |{" "}
            <NavLink to="sobre" activeStyle={{ color: "tomato" }}>
                Sobre
            </NavLink>
        </nav>
    );
};

export default Header;
