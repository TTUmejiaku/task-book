import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./scss/globals.scss";
import {
  Error,
  Login,
  SignUp,
  Dashboard,
  ProtectedRoute,
  ResetPassword,
  UserAccount,
} from "./pages";
import { taskData } from "./data";
import { nanoid } from "nanoid";
import { SharedLayout, Todo } from "./components";
import { ModalContextProvider } from "./contexts/ModalContext";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  const [tasks, setTasks] = useState(taskData);
  const [darkMode, setDarkMode] = useState(false);

  const addTask = (task) => {
    const newTask = { id: nanoid(), name: task.task, completed: false };
    setTasks([...tasks, newTask]);
  };

  const editTask = (id, newName) => {
    const editedTask = tasks.map((task) => {
      return id === task.id ? { ...task, name: newName.task } : task;
    });
    setTasks(editedTask);
  };

  const deleteTask = (id) => {
    const remainingTask = tasks.filter((task) => task.id !== id);
    setTasks(remainingTask);
  };

  const activeTasksList = tasks
    .filter((task) => !task.completed)
    .map((task) => {
      return (
        <Todo
          key={task.id}
          id={task.id}
          name={task.name}
          completed={task.completed}
          editedTask={editTask}
          deleteTask={deleteTask}
        />
      );
    });

  const completedTasksList = tasks
    .filter((task) => task.completed)
    .map((task) => {
      return (
        <Todo
          key={task.id}
          id={task.id}
          name={task.name}
          completed={task.completed}
          editedTask={editTask}
          deleteTask={deleteTask}
        />
      );
    });

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <AuthContextProvider>
        <ModalContextProvider>
          <Routes>
            {/* <Route path="/" element={<Dashboard />} /> */}
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <SharedLayout
                    addTask={addTask}
                    editTask={editTask}
                    deleteTask={deleteTask}
                    toggleDarkMode={toggleDarkMode}
                    darkMode={darkMode}
                  />
                </ProtectedRoute>
              }
            >
              <Route
                index
                element={
                  <ProtectedRoute>
                    <Dashboard
                      tasksList={{
                        completedTasksList: completedTasksList,
                        activeTasksList: activeTasksList,
                      }}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="user-account"
                element={
                  <ProtectedRoute>
                    <UserAccount />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="category/:taskID" element={<Dashboard />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </ModalContextProvider>
      </AuthContextProvider>
    </div>
  );
}
export default App;
