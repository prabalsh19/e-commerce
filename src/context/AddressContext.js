import { useState, createContext } from "react";
import { v4 as uuid } from "uuid";

export const AddressContext = createContext();

export const AddressContextProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([
    {
      id: uuid(),
      name: "Rahul Singh (Demo)",
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
    <AddressContext.Provider value={value}>{children}</AddressContext.Provider>
  );
};
