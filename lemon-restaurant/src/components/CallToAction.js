import React from "react";
import "./CallToAction.css";
import deliveryMan from "../assets/icons_assets/delivery-man.png";

const CallToAction = () => {
  return (
    <div className="delivery-container">
      <button className="delivery-button">
        Order a delivery
        <div className="delivery-man">
          <img src={deliveryMan} alt="delivery-man" />
        </div>
      </button>
    </div>
  );
};

export default CallToAction;
