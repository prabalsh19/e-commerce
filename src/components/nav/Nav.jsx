import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Search from "../search/Search";
import MobileSearch from "../search/MobileSearch";

import { AuthContext } from "../../context/AuthContext";
import { ProductContext } from "../../context/ProductContext";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";

import logo from "../../assets/img/Full Logo.png";

import "./Nav.css";

export default function Nav() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const { setCartItems, setTotalPrice, setTotalDiscount } =
    useContext(CartContext);
  const { setWishlistItems } = useContext(WishlistContext);
  const { dispatch } = useContext(ProductContext);

  const logoutHandler = () => {
    setIsLoggedIn(false);
    setCartItems(() => []);
    setWishlistItems(() => []);
    setTotalPrice(0);
    setTotalDiscount(0);
    localStorage.removeItem("encodedToken");
    localStorage.removeItem("userDetails");
  };

  return (
    <div className="nav-container">
      <nav className="nav">
        <NavLink to="/" onClick={() => dispatch({ type: "RESET" })}>
          <img className="nav__logo" src={logo} alt="logo" />
        </NavLink>
        <Search />

        <div>
          <ul className="nav-links">
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/wishlist">Wishlist</NavLink>
            </li>
            <li>
              <NavLink to="/cart">My Cart</NavLink>
            </li>
            {isLoggedIn ? (
              <>
                <li>
                  <NavLink to="/account/profile">Account</NavLink>
                </li>
                <li>
                  <NavLink to="/logout" onClick={logoutHandler}>
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
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
                <li>
                  <MobileSearch setShowMobileNav={setShowMobileNav} />
                </li>
                <li>
                  <NavLink
                    onClick={() => setShowMobileNav(false)}
                    to="/products"
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => setShowMobileNav(false)}
                    to="/wishlist"
                  >
                    Wishlist
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={() => setShowMobileNav(false)} to="/cart">
                    My Cart
                  </NavLink>
                </li>
                {isLoggedIn ? (
                  <>
                    <li>
                      <NavLink
                        onClick={() => setShowMobileNav(false)}
                        to="/account/profile"
                      >
                        Account
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/logout"
                        onClick={() => {
                          setShowMobileNav(false);
                          logoutHandler();
                        }}
                      >
                        Logout
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <li>
                    <NavLink
                      onClick={() => setShowMobileNav(false)}
                      to="/login"
                    >
                      Login
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
