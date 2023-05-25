import SearchIcon from "@mui/icons-material/Search";
import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import "../nav/Nav.css";
import { useNavigate } from "react-router-dom";

const MobileSearch = ({ setShowMobileNav }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { state, dispatch } = useContext(ProductContext);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    setShowMobileNav(false);
    navigate("/products");
    dispatch({ type: "SEARCH", payload: searchQuery });
  };

  return (
    <form onSubmit={submitHandler} className="nav__mobile-search-container">
      <input
        value={state.condition.search}
        type="text"
        onChange={(e) => {
          setSearchQuery(e.target.value);
          dispatch({ type: "SEARCH", payload: e.target.value });
        }}
      />
      <button type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default MobileSearch;
