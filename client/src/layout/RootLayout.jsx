import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";

const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
};

export default RootLayout;
