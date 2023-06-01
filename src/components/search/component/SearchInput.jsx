import { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ProductContext } from "../../../context";

export function SearchInput() {
  const { state, dispatch } = useContext(ProductContext);

  return (
    <>
      <input
        value={state.filters.search}
        type="text"
        onChange={(e) => {
          dispatch({ type: "SEARCH", payload: e.target.value });
        }}
      />
      <button type="submit">
        <SearchIcon />
      </button>
    </>
  );
}
