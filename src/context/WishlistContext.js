import { createContext, useState } from "react";
import {
  addToWishlistService,
  deleteFromWishlistService,
} from "../services/services";
import { toastHandler } from "../utils/Toast";

export const WishlistContext = createContext();

export const WishlistContextProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addItemToWishlist = async (product) => {
    const encodedToken = localStorage.getItem("encodedToken");
    try {
      if (encodedToken !== null) {
        const response = await addToWishlistService(encodedToken, product);

        setWishlistItems(() => response.data.wishlist);
        toastHandler("success", "Added To The Wishlist");
      } else {
        toastHandler("info", "Please Login First");
      }
    } catch (e) {
      console.error(e);
    }
  };
  const removeFromWishlist = async (id) => {
    const encodedToken = localStorage.getItem("encodedToken");

    try {
      if (encodedToken !== null) {
        const response = await deleteFromWishlistService(encodedToken, id);
        setWishlistItems(() => response.data.wishlist);
        toastHandler("info", "Removed From Wishlist");
      } else {
        toastHandler("info", "Please Login First");
      }
    } catch (e) {
      console.error(e);
    }
  };
  const value = {
    wishlistItems,
    setWishlistItems,
    addItemToWishlist,
    removeFromWishlist,
  };
  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
