import "./Nav.css";
import lemonLogo from "./assets/icons_assets/Logo.svg";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={lemonLogo} alt="little lemon logo" />
      </div>
      <ul className="large-screen-links">
        <li className="large-screen-list">
          <a href="#home">Home</a>
        </li>
        <li className="large-screen-list">
          <a href="#About">About</a>
        </li>
        <li className="large-screen-list">
          <a href="#Menu">Menu</a>
        </li>
        <li className="large-screen-list">
          <a href="#Reservations">Reservations</a>
        </li>
        <li className="large-screen-list">
          <a href="#Orderonline">Order Online</a>
        </li>
        <li className="large-screen-list">
          <a href="#Login">Login</a>
        </li>
      </ul>
      <div className="small-screen">
        <GiHamburgerMenu
          className="small-screen-open"
          fontSize={27}
          color="#f4ce14"
          onClick={() => setOpenMenu(true)}
        />
        {openMenu && (
          <div className="small-screen-close">
            <MdOutlineRestaurantMenu
              className="overlay"
              fontSize={27}
              color="#f4ce14"
              onClick={() => setOpenMenu(false)}
            />
            <ul className="small-screen-links">
              <li className="small-screen-list">
                <a href="#home">Home</a>
              </li>
              <li className="small-screen-list">
                <a href="#About">About</a>
              </li>
              <li className="small-screen-list">
                <a href="#Menu">Menu</a>
              </li>
              <li className="small-screen-list">
                <a href="#Reservations">Reservations</a>
              </li>
              <li className="small-screen-list">
                <a href="#Orderonline">Order Online</a>
              </li>
              <li className="small-screen-list">
                <a href="#Login">Login</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
