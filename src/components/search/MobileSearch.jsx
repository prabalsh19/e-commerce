import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { SearchInput } from "..";
import { ProductContext } from "../../context";
import "../nav/Nav.css";

export const MobileSearch = ({ setShowMobileNav }) => {
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
