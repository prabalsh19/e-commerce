import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import SearchInput from "./component/SearchInput";
import { ProductContext } from "../../context/ProductContext";
import "../nav/Nav.css";

const MobileSearch = ({ setShowMobileNav }) => {
  const { state, dispatch } = useContext(ProductContext);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    setShowMobileNav(false);
    navigate("/products");
    dispatch({ type: "SEARCH", payload: state.filters.search });
  };

  return (
    <form onSubmit={submitHandler} className="nav__mobile-search-container">
      <SearchInput />
    </form>
  );
};

export default MobileSearch;
