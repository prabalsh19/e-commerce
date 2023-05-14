import { Link } from "react-router-dom";
import "./Nav.css";
export default function Nav() {
  return (
    <div className="nav-container">
      <nav className="nav">
        <h1 className="nav__logo">COMMERCE</h1>
        <div className="nav__search-container">
          <input type="text" />
          <button>Search</button>
        </div>

        <div>
          <ul className="nav-links">
            <Link path="/products">Products</Link>
            <Link path="/wishlist">Wishlist</Link>
            <Link path="/cart">Cart</Link>
            <Link path="/account">My Account</Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}
