import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

// importing icon
import {
  AiFillHome,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
import { MdLibraryAdd, MdViewList } from "react-icons/md";
import { FaCar } from "react-icons/fa";

import "./mainLayout.css";

const MainLayout = () => {
  const [isSidebarClosed, setIsSidebarClosed] = useState(false);
  const [isActive, setIsActive] = useState("home");
  const toggleSidebar = () => {
    setIsSidebarClosed(!isSidebarClosed);
  };

  const handleActive = (active) => {
    setIsActive(active);
  };

  return (
    <>
      <div className={`sidebar ${isSidebarClosed ? "close" : ""}`}>
        <div className="side_togge_menu" onClick={toggleSidebar}>
          {isSidebarClosed ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
        </div>
        <ul className="nav_links">
          <li
            className={isActive === "home" ? "active" : ""}
            onClick={() => handleActive("home")}
          >
            <Link to="/">
              <AiFillHome className="icon" />
              <span className="link_name">Home</span>
            </Link>
          </li>
          <li
            className={isActive === "add-scenario" ? "active" : ""}
            onClick={() => handleActive("add-scenario")}
          >
            <Link to="/add-scenario">
              <MdLibraryAdd className="icon" />
              <span className="link_name">Add Scenario</span>
            </Link>
          </li>
          <li
            className={isActive === "all-scenario" ? "active" : ""}
            onClick={() => handleActive("all-scenario")}
          >
            <Link to="/view-scenario">
              <MdViewList className="icon" />
              <span className="link_name">All Scenario</span>
            </Link>
          </li>
          <li
            className={isActive === "add-vehicle" ? "active" : ""}
            onClick={() => handleActive("add-vehicle")}
          >
            <Link to="/add-vehicle">
              <FaCar className="icon" />
              <span className="link_name">Add Vehicle</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="home_section">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
