import "./App.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/Menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/Reservations">Reservations</NavLink>
        </li>
        <li>
          <NavLink to="/Orderonline">Order Online</NavLink>
        </li>
        <li>
          <NavLink to="/Login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
