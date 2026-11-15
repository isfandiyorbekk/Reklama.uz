import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../companets/NavBars/Navbar";
import Footer from "../companets/Footer";
import ScrollToTop from "../companets/ScrollToTop";
function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
