import { useState } from "react";
import "./Login.css";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import { useEffect } from "react";
import {
  getCartService,
  getWishlistService,
  loginService,
} from "../../services/services";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ hasError: false, message: "" });
  const { isLoggedIn, setIsLoggedIn, setUserDetails } = useContext(AuthContext);
  const { setCartItems, updateTotalPrice, updateTotalDiscount } =
    useContext(CartContext);
  const { setWishlistItems } = useContext(WishlistContext);
  const navigate = useNavigate();
  const location = useLocation();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      setError(() => ({ hasError: false, message: "" }));
      const response = await loginService(email, password);

      setIsLoggedIn(true);
      setUserDetails(response.data.foundUser);

      localStorage.setItem("encodedToken", response.data.encodedToken);
      localStorage.setItem(
        "userDetails",
        JSON.stringify(response.data.foundUser)
      );
      const cartResponse = await getCartService(response?.data?.encodedToken);
      setCartItems(cartResponse.data.cart);
      updateTotalPrice(cartResponse.data.cart);
      updateTotalDiscount(cartResponse.data.cart);
      const wishListResponse = await getWishlistService(
        response?.data?.encodedToken
      );
      setWishlistItems(wishListResponse.data.wishlist);

      location.state
        ? navigate(location?.state?.location?.pathname)
        : navigate("/");
    } catch (e) {
      setIsLoggedIn(false);
      setError(() => ({
        hasError: true,
        message: e.response?.data?.errors[0],
      }));
    }
  };
  const guestLoginHandler = (e) => {
    setEmail("adarshbalika@gmail.com");
    setPassword("adarshbalika");
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <form autoComplete="off" onSubmit={loginHandler} action="">
      <div className="login-container">
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          name="email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          name=""
          id=""
          required
        />
        {error.hasError && <span className="error-msg">{error.message}</span>}

        <button type="submit" className="auth-btn">
          Login
        </button>
        <button onClick={guestLoginHandler} type="submit" className="auth-btn">
          Guest Login
        </button>
        <p className="move-to-signup-text">
          Don't Have An Account? <Link to="/sign-up">Sign up</Link>
        </p>
      </div>
    </form>
  );
}

export default Login;
