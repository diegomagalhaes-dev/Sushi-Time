import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

function NavBar() {
  const [nav, setnav] = useState(false);

  const changeBackgroung = () => {
    if (window.scrollY >= 30) {
      setnav(true);
    } else {
      setnav(false);
    }
  };
  window.addEventListener("scroll", changeBackgroung);
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <div>
        <Link to="main" className="logo" smooth={true} duration={1200}>
          <img src={logo} alt="logoSite" />
        </Link>
        <input className="menu-btn" type="checkBox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="nav-icon"> </span>
        </label>
        <ul className="menu">
          <li>
            <Link to="header-sec" smooth={true} duration={2000}>
              Inicio
            </Link>
          </li>
          <li>
            <Link offset={-70} to="products" smooth={true} duration={2000}>Produtos</Link>
          </li>
          <li>
            <Link offset={-180} to="delivery" smooth={true} duration={2000}>Entrega</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={2000}>Contato</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
