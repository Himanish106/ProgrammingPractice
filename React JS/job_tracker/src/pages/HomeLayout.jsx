import React from "react";
import { Outlet } from "react-router-dom";
const HomeLayout = () => {
  return(
  <div>
    <nav>HomePage</nav>
    <Outlet />
  </div>
  )
};

export default HomeLayout;
