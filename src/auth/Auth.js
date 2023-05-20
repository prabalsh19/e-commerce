import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const Auth = ({ children }) => {
  const location = useLocation();

  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? children : <Navigate to="/login" state={{ location }} />;
};

export default Auth;
