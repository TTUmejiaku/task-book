import React, { useState } from "react";
import "./navbar.scss";
import { IoMdAddCircleOutline, IoIosArrowDown } from "react-icons/io";
import { FiMoon } from "react-icons/fi";
import avatar from "../../assets/header__avatar.svg";
import { useContext } from "react";
import ModalContext from "../../contexts/ModalContext";
import { ToggleMenu } from "../index";
import { MdOutlineLightMode } from "react-icons/md";

const Navbar = ({ darkMode, toggleDarkMode, showSidebar, toggleSidebar }) => {
  const { toggleModal } = useContext(ModalContext);
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu((prevState) => !prevState);
  }

  return (
    <>
      <nav className="navbar container">
        <button
          className={showSidebar ? "toggle showSidebar" : "toggle"}
          onClick={toggleSidebar}
        >
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>

        <button className="btn" onClick={toggleModal}>
          <IoMdAddCircleOutline className="icon circle-plus" />
          New task
        </button>
        {darkMode ? (
          <MdOutlineLightMode
            className="icon dark-mode"
            onClick={toggleDarkMode}
          />
        ) : (
          <FiMoon className="moon icon" onClick={toggleDarkMode} />
        )}
        <div className="user">
          <p>Have a good day, Sally</p>
          <img src={avatar} alt="" />
          <IoIosArrowDown className="icon arrow-down" onClick={toggleMenu} />
          {showMenu && (
            <ToggleMenu
              toggleDarkMode={toggleDarkMode}
              toggleMenu={toggleMenu}
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
