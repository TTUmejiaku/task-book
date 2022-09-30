import React, { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, Navbar, Modal } from "./index";
import "../scss/globals.scss";
import ModalContext from "../contexts/ModalContext";
import { FormContextProvider } from "../contexts/FormContext";

const SharedLayout = (props) => {
  const { addTask, editTask, darkMode, toggleDarkMode } = props;
  const { isShowModal, toggleModal, toggleIsEditing, toggleModalAndIsEditing } =
    useContext(ModalContext);
  const [showSidebar, setShowSidebar] = useState(false);

  isShowModal
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  const closeAllModal = () => {
    toggleModal();
    toggleIsEditing();
    toggleModalAndIsEditing();
  };

  const toggleSidebar = (e) => {
    setShowSidebar((prevState) => !prevState);
  };

  return (
    <section className="sharedLayout" onClick={closeAllModal}>
      <FormContextProvider>
        {isShowModal && <Modal addTask={addTask} editTask={editTask} />}
      </FormContextProvider>
      <Sidebar toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
      <div className="body-wrapper">
        <Navbar
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          toggleSidebar={toggleSidebar}
          showSidebar={showSidebar}
        />
        <Outlet />
      </div>
    </section>
  );
};

export default SharedLayout;
