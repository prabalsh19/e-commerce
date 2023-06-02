import axios from "axios";

export const signUpService = async (firstName, lastName, email, password) =>
  axios.post("/api/auth/signup", { firstName, lastName, email, password });

export const loginService = async (email, password) =>
  axios.post("/api/auth/login", { email, password });

export const getProductsService = async () => axios.get("/api/products");

export const getProductService = async (id) => axios.get("/api/products/" + id);

export const getCategories = async () => axios.get("/api/categories");

export const getCartService = async (encodedToken) =>
  axios.get("/api/user/cart", { headers: { authorization: encodedToken } });

export const addToCartService = async (encodedToken, product) =>
  axios.post(
    "/api/user/cart",
    { product },
    { headers: { authorization: encodedToken } }
  );

export const deleteFromCartService = async (encodedToken, id) =>
  axios.delete("/api/user/cart/" + id, {
    headers: { authorization: encodedToken },
  });

export const cartQuantityService = async (encodedToken, id, actionType) =>
  axios.post(
    "/api/user/cart/" + id,
    {
      action: {
        type: actionType,
      },
    },
    {
      headers: { authorization: encodedToken },
    }
  );

export const getWishlistService = async (encodedToken) =>
  axios.get("/api/user/wishlist", { headers: { authorization: encodedToken } });

export const addToWishlistService = async (encodedToken, product) =>
  axios.post(
    "/api/user/wishlist",
    { product },
    { headers: { authorization: encodedToken } }
  );

export const deleteFromWishlistService = async (encodedToken, id) =>
  axios.delete("/api/user/wishlist/" + id, {
    headers: { authorization: encodedToken },
  });

export const clearCartService = async (encodedToken, cart) => {
  cart.forEach(({ _id }) => {
    deleteFromCartService(encodedToken, _id);
  });
};
