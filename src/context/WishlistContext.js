import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const WishlistContext = createContext();

export const WishlistContextProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addItemToWishlist = async (product) => {
    const encodedToken = localStorage.getItem("encodedToken");
    try {
      if (encodedToken !== null) {
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
        toast.success("Added To The Wishlist", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.info("Please Login First", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  const removeFromWishlist = async (id) => {
    const encodedToken = localStorage.getItem("encodedToken");

    try {
      if (encodedToken !== null) {
        const response = await axios.delete(`/api/user/wishlist/${id}`, {
          headers: {
            authorization: encodedToken,
          },
        });
        setWishlistItems(() => response.data.wishlist);
        toast.info("Removed From Wishlist", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.info("Please Login First", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
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
