import React from "react";
import Productbox from "./Productbox";
import pimage1 from '../assets/s1.png'
import pimage2 from "../assets/s2.png";
import pimage3 from "../assets/s3.png";

function Products() {
  return (
    <div id="products">
      <h1>Escolha & Aproveite</h1>
      <p>
        * Todos os preços são atualizados regularmente.
      </p>
      <div className="a-container">
        <Productbox image={pimage1} title="Barca" />
        <Productbox image={pimage2} title="Unitários" />
        <Productbox image={pimage3} title="Temaki" />
      </div>
    </div>
  );
}

export default Products;
