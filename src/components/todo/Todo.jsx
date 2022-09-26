import React, { useContext } from "react";
import "./todo.scss";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import ModalContext from "../../contexts/ModalContext";

const Todo = ({ id, name, completed, deleteTask }) => {
  const { toggleModalAndIsEditing } = useContext(ModalContext);

  return (
    <>
      <div
        className="todo"
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        <input type="checkbox" id={id} defaultChecked={completed} />
        <p htmlFor={id}>{name}</p>
        <div className="todo__btns">
          <FiEdit
            className="icon edit"
            onClick={() => toggleModalAndIsEditing(id)}
          />
          <AiOutlineDelete
            className="icon delete"
            onClick={() => deleteTask(id)}
          />
        </div>
      </div>
    </>
  );
};

export default Todo;
