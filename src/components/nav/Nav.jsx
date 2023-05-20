import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Nav.css";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
export default function Nav() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div className="nav-container">
      <nav className="nav">
        <NavLink to="/">
          <h1 className="nav__logo">COMMERCE</h1>
        </NavLink>
        <div className="nav__search-container">
          <input type="text" />
          <button>
            <SearchIcon />
          </button>
        </div>

        <div>
          <ul className="nav-links">
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/wishlist">Wishlist</NavLink>
            <NavLink to="/cart">My Cart</NavLink>
            {isLoggedIn ? (
              <NavLink to="/account">Account</NavLink>
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
                  <NavLink
                    onClick={() => setShowMobileNav(false)}
                    to="/account"
                  >
                    Account
                  </NavLink>
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
