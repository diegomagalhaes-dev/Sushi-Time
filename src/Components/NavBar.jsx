import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

function NavBar() {
  const [nav, setnav] = useState(false);

  const changeBackgroung = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };
  window.addEventListener("scroll", changeBackgroung);
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="main" className="logo">
        <img src={logo} alt="logoSite" />
      </Link>
      <input className="menu-btn" type="checkBox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"> </span>
      </label>
      <ul className="menu">
        <li>
          <Link to="#">Inicio</Link>
        </li>
        <li>
          <Link to="#">Produtos</Link>
        </li>
        <li>
          <Link to="#">Sobre</Link>
        </li>
        <li>
          <Link to="#">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
