import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/TREKOROMA.png";


function Navbar() {
  const [dark, setDark] = useState(false);

  function toggleMode() {
    setDark(!dark);
    document.body.classList.toggle("darkmode");
  }

  return (
    <nav>
      <div className="logo"><img src={logo} alt="logo" />Trekoroma</div>

      <ul className="nav-links">
        <li><a href="#">Blog</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Treks</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="btns">
        <button className="btn">Login</button>
        <button onClick={toggleMode}>🌙</button>
      </div>
    </nav>
  );
}

export default Navbar;
