import { useContext } from "react";
import { AuthContext } from "../context";
import { Navigate, useLocation } from "react-router-dom";

function Auth({ children }) {
  const location = useLocation();
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? children : <Navigate to="/login" state={{ location }} />;
}

export default Auth;
