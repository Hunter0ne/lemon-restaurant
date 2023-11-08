import "./App.css";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Menu } from "./Pages/Menu";
import { Reservations } from "./Pages/Reservations";
import { Orderonline } from "./Pages/Orderonline";
import { Login } from "./Pages/Login";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Reservations" element={<Reservations />} />
        <Route path="/Orderonline" element={<Orderonline />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
