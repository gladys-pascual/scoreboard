import React from "react";
import Stopwatch from "./Stopwatch/Stopwatch";
import Stats from "./Stats/Stats";
import "./Header.scss";

const Header = ({ title, players }) => {
  return (
    <header className="header">
      <Stats players={players} />
      <h1>{title}</h1>
      <Stopwatch />
    </header>
  );
};
export default Header;
