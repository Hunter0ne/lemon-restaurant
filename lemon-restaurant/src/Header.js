import "./App.css";
import Nav from "./Nav";
import logo from "./assets/icons_assets/Logo.svg";

function Header() {
  return (
    <header className="nav-header">
      <div className="logo">
        <img src={logo} alt="My Logo" />
      </div>
      <div>
        <Nav />
      </div>
    </header>
  );
}
export default Header;
