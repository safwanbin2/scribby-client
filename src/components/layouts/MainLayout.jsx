import React from "react";
import Navbar from "../../pages/shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
