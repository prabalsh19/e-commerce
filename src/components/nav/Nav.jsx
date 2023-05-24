import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Nav.css";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import Search from "../search/Search";
import { ProductContext } from "../../context/ProductContext";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";

export default function Nav() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const { setCartItems, setTotalPrice, setTotalDiscount } =
    useContext(CartContext);
  const { setWishlistItems } = useContext(WishlistContext);
  const { dispatch } = useContext(ProductContext);

  const logoutHandler = async () => {
    setIsLoggedIn(false);
    setCartItems(() => []);
    setWishlistItems(() => []);
    setTotalPrice(0);
    setTotalDiscount(0);
    localStorage.removeItem("encodedToken");
  };

  return (
    <div className="nav-container">
      <nav className="nav">
        <NavLink to="/" onClick={() => dispatch({ type: "RESET" })}>
          <h1 className="nav__logo">COMMERCE</h1>
        </NavLink>
        <Search />

        <div>
          <ul className="nav-links">
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/wishlist">Wishlist</NavLink>
            <NavLink to="/cart">My Cart</NavLink>
            {isLoggedIn ? (
              <>
                <NavLink to="/account/profile">Account</NavLink>
                <NavLink to="/logout" onClick={logoutHandler}>
                  Logout
                </NavLink>
              </>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </ul>

          {/* Nav for screen width <=1024px */}
          <div
            onClick={() => setShowMobileNav(!showMobileNav)}
            className="mobile-menu-icon"
          >
            <MenuIcon sx={{ color: "white" }} />
          </div>

          {showMobileNav && (
            <div className="mobile-nav-links">
              <CloseIcon
                className="mobile-close"
                onClick={() => setShowMobileNav(false)}
                sx={{ color: "white" }}
                fontSize="large"
              />
              <ul>
                <div className="mobile-search-container">
                  <input type="text" />
                  <button>SEARCH</button>
                </div>
                <NavLink onClick={() => setShowMobileNav(false)} to="/products">
                  Products
                </NavLink>
                <NavLink onClick={() => setShowMobileNav(false)} to="/wishlist">
                  Wishlist
                </NavLink>
                <NavLink onClick={() => setShowMobileNav(false)} to="/cart">
                  My Cart
                </NavLink>
                {isLoggedIn ? (
                  <>
                    <NavLink
                      onClick={() => setShowMobileNav(false)}
                      to="/account/profile"
                    >
                      Account
                    </NavLink>
                    <NavLink
                      to="/logout"
                      onClick={() => {
                        setShowMobileNav(false);
                        logoutHandler();
                      }}
                    >
                      Logout
                    </NavLink>
                  </>
                ) : (
                  <NavLink onClick={() => setShowMobileNav(false)} to="/login">
                    Login
                  </NavLink>
                )}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
