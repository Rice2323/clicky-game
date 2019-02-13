import React from "react";
import NavMessage from "../NavMessage";
import "./style.css";

// Component for the Navbar

function Nav(props) {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">NFLClicky-Game</a>
        </li>
        <NavMessage score={props.score} topScore={20} />
        <li>
          Your Score: {props.score} | Highest Score: {20}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
