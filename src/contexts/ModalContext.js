import { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export function ModalContextProvider({ children }) {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [taskId, setTaskId] = useState(0);

  const toggleModal = () => setIsShowModal((prevState) => !prevState);

  const toggleIsEditing = () => setIsEditing((prevState) => !prevState);

  const toggleModalAndIsEditing = (id) => {
    toggleIsEditing();
    toggleModal();
    setTaskId(id);
  };

  const value = {
    isShowModal,
    toggleModal,
    isEditing,
    toggleIsEditing,
    toggleModalAndIsEditing,
    taskId,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}

export default ModalContext;

export const useModalContext = () => useContext(ModalContext);
