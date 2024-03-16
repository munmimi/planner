import React from "react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
