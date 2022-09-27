import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, Navbar, Modal } from "./index";
import "../scss/globals.scss";
import { useContext } from "react";
import ModalContext from "../contexts/ModalContext";
import { FormContextProvider } from "../contexts/FormContext";

const SharedLayout = (props) => {
  const { addTask, editTask, darkMode, toggleDarkMode } = props;
  const { isShowModal } = useContext(ModalContext);

  isShowModal
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <section className="sharedLayout">
      <FormContextProvider>
        {isShowModal && <Modal addTask={addTask} editTask={editTask} />}
      </FormContextProvider>
      <Sidebar />
      <div className="body-wrapper">
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Outlet />
      </div>
    </section>
  );
};

export default SharedLayout;
