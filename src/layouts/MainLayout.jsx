import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../companets/NavBars/Navbar";
import Footer from "../companets/Footer";
function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
