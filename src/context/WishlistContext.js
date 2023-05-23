import axios from "axios";
import { createContext, useState } from "react";

export const WishlistContext = createContext();

export const WishlistContextProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const encodedToken = localStorage.getItem("encodedToken");

  const addItemToWishlist = async (product) => {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        {
          product,
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      setWishlistItems(() => response.data.wishlist);
    } catch (e) {
      console.log(e);
    }
  };
  const removeFromWishlist = async (id) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      setWishlistItems(() => response.data.wishlist);
    } catch (e) {
      console.log(e);
    }
  };
  const value = {
    wishlistItems,
    addItemToWishlist,
    removeFromWishlist,
  };
  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
