import React, { useState } from "react";
import { Outlet } from "react-router-dom";

// importing icon
import { AiOutlineMenuFold } from "react-icons/ai";

import "./mainLayout.css";

const MainLayout = () => {
  const [isSidebarClosed, setIsSidebarClosed] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarClosed(!isSidebarClosed);
  };
  return (
    <>
      <div className={`sidebar ${isSidebarClosed ? "close" : ""}`}>
        <p>side</p>
        <div className="side_togge_menu">
          <AiOutlineMenuFold />
        </div>
      </div>
      <div className="home_section">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
