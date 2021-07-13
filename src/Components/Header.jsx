import React from "react";
import banner2 from "../assets/banner2.png";
function Header() {
  return (
    <div id="main">
      <header id="header-sec">
        <div className="header-heading">
          <div>
            <h3>
              É o momento para você experimentar o melhor da comida japonesa.
            </h3>
            <h1>
              <span>SEMANA</span> DO
              <br />
              <span>SUSHI</span>
            </h1>
            <div className="header-btns">
              <a href="#" className="header-btn">
                Comprar
              </a>
            </div>
          </div>

          <img src={banner2} alt="logoSite" />
        </div>
      </header>
    </div>
  );
}

export default Header;
