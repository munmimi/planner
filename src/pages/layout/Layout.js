import React from "react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import S from "./Styles";

const Layout = () => {
  return (
    <>
      <Header />
      <S.Main className="container">
        <Outlet />
      </S.Main>
      <Footer />
    </>
  );
};

export default Layout;
