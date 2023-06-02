import { useContext, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ProductContext } from "../../../context";
import { useNavigate } from "react-router-dom";

export function SearchInput() {
  const { state, dispatch } = useContext(ProductContext);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: "SEARCH", payload: state.searchQuery });
    }, 500);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.searchQuery]);
  const searchBtnHandler = () => {
    navigate("/products");
    dispatch({ type: "SEARCH", payload: state.searchQuery });
  };
  return (
    <>
      <input
        type="text"
        value={state.searchQuery}
        onChange={(e) =>
          dispatch({ type: "SEARCH_QUERY", payload: e.target.value })
        }
        spellCheck="false"
      />
      <button onClick={searchBtnHandler} type="submit">
        <SearchIcon />
      </button>
    </>
  );
}
