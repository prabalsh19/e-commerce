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

export const deleteFromCartService = async (encodedToken, id) => {
  console.log(id);
  return axios.delete("/api/user/cart/" + id, {
    headers: { authorization: encodedToken },
  });
};
