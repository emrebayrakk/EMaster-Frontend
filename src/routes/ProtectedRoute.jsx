import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("authToken");

  // Token yoksa login sayfasına yönlendir
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Token varsa, bileşeni render et
  return children;
};

export default ProtectedRoute;