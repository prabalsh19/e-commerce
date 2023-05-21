import axios from "axios";
import { useEffect } from "react";
import { createContext, useState } from "react";

export const WishlistContext = createContext();

export const WishlistContextProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const encodedToken = localStorage.getItem("encodedToken");
  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/user/wishlist", {
        headers: {
          authorization: encodedToken,
        },
      });
      setWishlistItems(() => response.data.wishlist);
    })();
  }, [encodedToken]);

  const addItemToWishlist = async (product) => {
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
    console.log("wishlost", response.data.wishlist);
    setWishlistItems(() => response.data.wishlist);
  };
  const removeFromWishlist = async (id) => {
    const response = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    setWishlistItems(() => response.data.wishlist);
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
