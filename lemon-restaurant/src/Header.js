import "./Header.css";
import chefFood from "./assets/icons_assets/restauranfood.jpg";

function Header() {
  return (
    <header className="nav-header">
      <div className="header-container">
        <h1 className="heading-title">Little Lemon</h1>
        <h3 className="food-location">Chicago</h3>
        <p>
          We are a family owned
          <br />
          Mediterranean restaurant,
          <br />
          focused on traditional
          <br />
          recipes served with a modern
          <br />
          twist.
        </p>
        <button type="button">Reserve a Table</button>
      </div>

      <div className="chef-image">
        <img src={chefFood} alt="Restaurant food" />
      </div>
    </header>
  );
}
export default Header;
