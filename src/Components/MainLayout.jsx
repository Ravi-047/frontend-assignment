import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <h3>This is main Layout</h3>
      <Outlet />
    </div>
  );
};

export default MainLayout;
