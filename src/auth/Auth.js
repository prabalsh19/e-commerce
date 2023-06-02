import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context";

function Auth({ children }) {
  const location = useLocation();
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? children : <Navigate to="/login" state={{ location }} />;
}

export default Auth;
