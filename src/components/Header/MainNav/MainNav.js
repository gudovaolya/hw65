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
            <MainNavItem to="/pages/history" exact>History</MainNavItem>
            <MainNavItem to="/pages/partners" exact>Partners</MainNavItem>
            <MainNavItem to="/pages/careers" exact>Careers</MainNavItem>
            <MainNavItem to="/edit" exact>Admin</MainNavItem>
        </ul>
    </nav>
);

export default MainNav;