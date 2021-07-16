import React from "react";
import deliveryImage from "../assets/delivery.svg";

function delivery() {
  return (
    <div id="delivery">
      <div>
        <div className="delivery-text">
          <h1>FRETE GRÁTIS</h1>
        </div>
        <div className="delivery-image">
          <img src={deliveryImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default delivery;
