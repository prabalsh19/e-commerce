import { useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const encodedToken = localStorage.getItem("encodedToken");
    if (encodedToken !== null) {
      setIsLoggedIn(true);
    }
  }, []);

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    userDetails,
    setUserDetails,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
