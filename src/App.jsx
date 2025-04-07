import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutMe from "./components/pages/AboutMe";
import Contact from "./components/pages/Contact";
import Flex from "./components/pages/Flexbox1";

const App = () => {
  return (
    <BrowserRouter>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "antiquewhite",
          marginBottom: 0,
        }}
      >
        <Link to="/flexbox1">
          <h1>Exercise One</h1>
        </Link>
      </nav>

      <Routes>
        <Route path="/flexbox1" element={<Flex />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
