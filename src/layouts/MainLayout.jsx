import React from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Header from "../components/Header";

import { Outlet } from "react-router-dom";
const MainLayout = ({ pageTitle }) => {
  return (
    <>
      <Header />
      <Main title={pageTitle}>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};
export default MainLayout;
