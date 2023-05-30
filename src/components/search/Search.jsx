import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ProductContext } from "../../context/ProductContext";
import SearchInput from "./component/SearchInput";
import "../nav/Nav.css";

const Search = () => {
  const { state, dispatch } = useContext(ProductContext);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/products");
    dispatch({ type: "SEARCH", payload: state.filters.search });
  };

  return (
    <form onSubmit={submitHandler} className="nav__search-container">
      <SearchInput />
    </form>
  );
};

export default Search;
