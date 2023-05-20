import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/products");
      setProducts(response?.data?.products);
    })();
  }, [setProducts]);
  const value = {
    products,
    setProducts,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
