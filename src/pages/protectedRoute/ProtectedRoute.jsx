import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuthContext } from "../../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuthContext();

  if (!user) return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;
