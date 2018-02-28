import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainNav.css';
import MainNavItem from "./MainNavItem/MainNavItem";

const MainNav = (props) => (
    <nav className="main-nav">
        <ul>
            <MainNavItem to="/" exact>Нome</MainNavItem>
            <MainNavItem to="/pages/about" exact>About</MainNavItem>
            <MainNavItem to="/pages/contacts" exact>Contacts</MainNavItem>
        </ul>
    </nav>
);

//<Link className="btn readmore__btn btn__small" to={`/pages/${props.id}`}>Read more</Link>

export default MainNav;