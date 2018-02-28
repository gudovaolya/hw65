import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainNav.css';
import MainNavItem from "./MainNavItem/MainNavItem";

const MainNav = () => (
    <nav className="main-nav">
        <ul>
            <MainNavItem to="/" exact>Нome</MainNavItem>
            <MainNavItem to="/about">About</MainNavItem>
            <MainNavItem to="/contacts">Contacts</MainNavItem>
        </ul>
    </nav>
);

export default MainNav;