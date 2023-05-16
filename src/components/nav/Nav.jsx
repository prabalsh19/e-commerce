import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "./Nav.css";
export default function Nav() {
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
            <NavLink to="/account">Account</NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
}
