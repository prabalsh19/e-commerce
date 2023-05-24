import { useState } from "react";
import { createContext } from "react";

export const addressContext = createContext();

export const AddressContextProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([
    {
      name: "Rahul Singh",
      mobile: "02222015042",
      pincode: "400002",
      address:
        "366/68 Diamond Mansion, 1 St Flr , Room No 8 Kalbadevi Rd, Kalbadevi",
      city: "Mumbai",
      alternateNum: "02222012451",
      state: "Maharashtra",
    },
  ]);
  const value = {
    addresses,
    setAddresses,
  };
  return (
    <addressContext.Provider value={value}>{children}</addressContext.Provider>
  );
};
