import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Flexbox1 from "./pages/Flexbox1";
import Flexbox2 from "./pages/Flexbox2";
import Flexbox3 from "./pages/Flexbox3";
import Flexbox4 from "./pages/Flexbox4";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<div></div>} />
          <Route path="/flexbox1" element={<Flexbox1 />} />
          <Route path="/flexbox2" element={<Flexbox2 />} />
          <Route path="/flexbox3" element={<Flexbox3 />} />
          <Route path="/flexbox4" element={<Flexbox4 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
