import React from "react";
import "./modal.scss";
import { useModalContext } from "../../contexts/ModalContext";
import { useFormContext } from "../../contexts/FormContext";

const Modal = ({ addTask, editTask }) => {
  const { isEditing, toggleModal, toggleModalAndIsEditing, taskId } =
    useModalContext();
  const {
    formData,
    setFormData,
    handleChange,
    newFormData,
    setNewFormData,
    handleChangeOnEdit,
  } = useFormContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.task) return;
    addTask(formData);
    setFormData({
      task: "",
      category: "",
      date: "",
      priority: "",
    });
  };

  const handleSubmitOnChange = (e) => {
    e.preventDefault();
    if (!newFormData.task) return;
    editTask(taskId, newFormData);
    setNewFormData({
      task: "",
      category: "",
      date: "",
      priority: "",
    });
    toggleModalAndIsEditing();
  };

  function clearViewingTemplateForm() {
    toggleModal();
    setFormData({
      task: "",
      category: "",
      date: "",
      priority: "",
    });
  }
  function clearEditingTemplateForm() {
    toggleModalAndIsEditing();
    setNewFormData({
      task: "",
      category: "",
      date: "",
      priority: "",
    });
  }

  const viewingTemplate = (
    <div className="dark-overlay">
      <div className="modal ">
        <h3 className="title">Add a new task</h3>

        {/* Form element */}
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__group">
            <label htmlFor="">What should be done</label>
            <input
              type="text"
              placeholder="cook dinner"
              name="task"
              onChange={handleChange}
              value={formData.task}
            />
          </div>
          <div className="form__select">
            <div className="form__group">
              <label htmlFor="">Category</label>
              <select
                name="category"
                id="category"
                onChange={handleChange}
                value={formData.category}
              >
                <option defaultValue="">--- choose ---</option>
                <option value="House">House</option>
                <option value="Work">Work</option>
                <option value="Sports">Sports</option>
              </select>
            </div>
            <div className="form__group">
              <label htmlFor="">When?</label>
              <input
                type="date"
                name="date"
                onChange={handleChange}
                value={formData.date}
              />
            </div>
            <div className="form__group">
              <label htmlFor="">Task priority</label>
              <select
                name="priority"
                id="priority"
                onChange={handleChange}
                value={formData.priority}
              >
                <option defaultValue="">--- choose ---</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>
          <div className="form__btns">
            <button
              type="button"
              className="btn cancel"
              onClick={clearViewingTemplateForm}
            >
              Cancel
            </button>
            <button type="button" className="btn save">
              Save as template
            </button>
            <button type="submit" className="btn add">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const editingTemplate = (
    <div className="dark-overlay">
      <div className="modal ">
        <h3 className="title">Edit task</h3>

        {/* Form element */}
        <form className="form" onSubmit={handleSubmitOnChange}>
          <div className="form__group">
            <label htmlFor="">What should be done</label>
            <input
              type="text"
              placeholder="cook dinner"
              name="task"
              onChange={handleChangeOnEdit}
              value={newFormData.task}
            />
          </div>
          <div className="form__select">
            <div className="form__group">
              <label htmlFor="">Category</label>
              <select
                name="category"
                id="category"
                onChange={handleChangeOnEdit}
                value={newFormData.category}
              >
                <option defaultValue="">--- choose ---</option>
                <option value="House">House</option>
                <option value="Work">Work</option>
                <option value="Sports">Sports</option>
              </select>
            </div>
            <div className="form__group">
              <label htmlFor="">When?</label>
              <input
                type="date"
                name="date"
                onChange={handleChangeOnEdit}
                value={newFormData.date}
              />
            </div>
            <div className="form__group">
              <label htmlFor="">Task priority</label>
              <select
                name="priority"
                id="priority"
                onChange={handleChangeOnEdit}
                value={newFormData.priority}
              >
                <option defaultValue="">--- choose ---</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>
          <div className="form__btns ">
            <button
              type="button"
              className="btn cancel editing"
              onClick={clearEditingTemplateForm}
            >
              Cancel
            </button>
            <button type="submit" className="btn save editing">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return <>{isEditing ? editingTemplate : viewingTemplate}</>;
};

export default Modal;
