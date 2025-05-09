import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
