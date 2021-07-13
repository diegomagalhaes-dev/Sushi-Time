import React from "react";
import aboutImage from "../assets/about.svg";

function About() {
  return (
    <div id="about">
      <div>
        <div className="about-text">
          <h1>FRETE GRÁTIS</h1>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
