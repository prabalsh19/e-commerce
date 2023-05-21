import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const encodedToken = localStorage.getItem("encodedToken");
  useEffect(() => {
    if (encodedToken) {
      (async () => {
        try {
          const response = await axios.get("/api/user/cart", {
            headers: {
              authorization: encodedToken,
            },
          });

          setCartItems(response.data.cart);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, [encodedToken]);

  const updateTotalPrice = (cart) => {
    setTotalPrice(() =>
      cart.reduce((acc, curr) => {
        return +(curr.price * curr.qty) + acc;
      }, 0)
    );
  };
  const updateTotalDiscount = (cart) => {
    setTotalDiscount(() =>
      cart.reduce(
        (acc, cur) =>
          (Number(cur.price) - Number(cur.oldPrice)) * Number(cur.qty) + acc,
        0
      )
    );
  };
  const addItemToCart = async (product) => {
    const response = await axios.post(
      "/api/user/cart",
      {
        product,
      },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    setCartItems(() => response.data.cart);
    updateTotalPrice(response.data.cart);
    updateTotalDiscount(response.data.cart);
  };
  const removeItemFromCart = async (id) => {
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    setCartItems(() => response.data.cart);
    console.log(response.data.cart);
    updateTotalPrice(response.data.cart);
    updateTotalDiscount(response.data.cart);
  };
  const increaseQuantity = async (id) => {
    const response = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: {
          type: "increment",
        },
      },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    setCartItems(response.data.cart);
    updateTotalPrice(response.data.cart);
    updateTotalDiscount(response.data.cart);
  };
  const decreaseQuantity = async (id) => {
    const response = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: {
          type: "decrement",
        },
      },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    setCartItems(response.data.cart);
    updateTotalPrice(response.data.cart);
    updateTotalDiscount(response.data.cart);
  };
  const value = {
    cartItems,
    addItemToCart,
    totalPrice,
    totalDiscount,
    removeItemFromCart,
    increaseQuantity,
    decreaseQuantity,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
