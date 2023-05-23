import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState();

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    userDetails,
    setUserDetails,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
