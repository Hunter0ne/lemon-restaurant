import React from "react";
import "./Menu.css";
import greekSalad from "./assets/icons_assets/greek salad.jpg";
import bruchetta from "./assets/icons_assets/bruchetta.svg";
import lemonDessert from "./assets/icons_assets/lemon dessert.jpg";
import CallToAction from "./components/CallToAction";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="order-online">
        <h1>This weeks specials!</h1>
        <button type="button">Online Menu</button>
      </div>
      <section className="menu-sub-container">
        <div className="menu-specials">
          <img src={greekSalad} alt="Greek-salad" className="greek-img" />
          <div>
            <div className="menu-title">
              <h3 className="greek-salad">Greek Salad</h3>
              <p className="menu-price">$12.99</p>
            </div>
            <p className="menu-description">
              The famous greek salad of crispy lettuce, peppers,olives and our
              chicago style teta cheese. ganished with crunchy garlic and
              rosemary croutons.
            </p>
            <CallToAction />
          </div>
        </div>
        <div className="menu-specials">
          <img src={bruchetta} alt="bruchetta" className="bruchetta-img" />
          <div>
            <div className="menu-title">
              <h3 className="bruchetta">Bruchetta</h3>
              <p className="menu-price">$5.99</p>
            </div>
            <p className="menu-description">
              Our Bruchetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil in the best way
              known.
            </p>
            <CallToAction />
          </div>
        </div>
        <div className="menu-specials">
          <img src={lemonDessert} alt="Lemon-Dessert" className="dessert-img" />
          <div>
            <div className="menu-title">
              <h3 className="lemon-dessert">Lemon Dessert</h3>
              <p className="menu-price">$5.00</p>
            </div>
            <p className="menu-description">
              This comes staright from grandma's recipe book. every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <CallToAction />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
