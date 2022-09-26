import { createContext, useState, useContext } from "react";

const FormContext = createContext();

export function FormContextProvider({ children }) {
  const [formData, setFormData] = useState({
    task: "",
    category: "",
    date: "",
    priority: "",
  });
  const [newFormData, setNewFormData] = useState({
    task: "",
    category: "",
    date: "",
    priority: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleChangeOnEdit = (e) => {
    const { name, value } = e.target;

    setNewFormData((prevNewFormData) => ({
      ...prevNewFormData,
      [name]: value,
    }));
  };

  const value = {
    formData,
    setFormData,
    handleChange,
    newFormData,
    setNewFormData,
    handleChangeOnEdit,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export default FormContext;

export const useFormContext = () => useContext(FormContext);
