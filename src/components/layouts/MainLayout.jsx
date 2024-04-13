import React from "react";
import Navbar from "../../pages/shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
