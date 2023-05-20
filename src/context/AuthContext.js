import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const value = {
    isLoggedIn,
    setIsLoggedIn,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
