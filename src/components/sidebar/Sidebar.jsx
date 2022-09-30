import React from "react";
import "./sidebar.scss";
import logo from "../../assets/logo.svg";
import { links } from "../../data";
import { NavLink, Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { useUserAuthContext } from "../../contexts/AuthContext";

const Sidebar = ({ showSidebar, toggleSidebar }) => {
  const { logOut } = useUserAuthContext();

  const sidebarLinks = links.map((item) => (
    <div key={item.title} className="links-wrapper">
      <h2 className="section-title">{item.title}</h2>
      {item.links.map((link) => (
        <NavLink
          to={`/dashboard `}
          // to={`/category/${link.name}`}
          style={link.name === "Add" ? { color: "#29a19c" } : {}}
          key={link.name}
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          {link.icon}
          <span>{link.name}</span>
          <div className="marker"></div>
        </NavLink>
      ))}
    </div>
  ));

  const handleLogout = () => {
    logOut();
  };

  return (
    <>
      <aside className={showSidebar ? "sidebar show-nav" : "sidebar"}>
        <Link to="/dashboard">
          <img src={logo} alt="Tasks Logo" onClick={toggleSidebar} />
        </Link>
        {sidebarLinks}
        <div className="logout" onClick={handleLogout}>
          <FiLogOut /> Logout
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
