import React from "react";
import "./toggle-menu.scss";
import { FiUser, FiMoon, FiSettings, FiStar, FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useUserAuthContext } from "../../contexts/AuthContext";

const ToggleMenu = ({ toggleDarkMode, toggleMenu }) => {
  const { logOut } = useUserAuthContext();

  return (
    <>
      <div className="toggle-menu-overlay" onClick={toggleMenu}></div>
      <div className="toggle-menu">
        <Link to="user-account" className="list-wrapper profile">
          <FiUser />
          <p>Profile</p>
        </Link>
        <div className="list-wrapper">
          <FiMoon />
          <p onClick={toggleDarkMode}>Dark mode</p>
        </div>
        <div className="list-wrapper">
          <FiSettings />
          <p>Settings</p>
        </div>
        <div className="list-wrapper premium">
          <FiStar />
          <p>Premium</p>
        </div>
        <div className="list-wrapper logout" onClick={() => logOut()}>
          <FiLogOut />
          <p>Logout</p>
        </div>
      </div>
    </>
  );
};

export default ToggleMenu;
