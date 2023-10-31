import "./App.css";
import logo from "./assets/icons_assets/Logo";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="My Logo" />
      </div>
    </header>
  );
}
export default Header;
