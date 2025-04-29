import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header
        style={{
          padding: "1rem",
          backgroundColor: "#81E7AF",
          textAlign: "center",
        }}
      >
        <h2>My React App</h2>
        <nav
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "space-around",
          }}
        >
          <Link to="/flexbox1">Exercise 1</Link>
          <Link to="/flexbox2">Exercise 2</Link>
          <Link to="/flexbox3">Exercise 3</Link>
          <Link to="/flexbox4">Exercise 4</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
