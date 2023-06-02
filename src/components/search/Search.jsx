import { SearchInput } from "..";
import "../Nav/Nav.css";

export const Search = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler} className="nav__search-container">
      <SearchInput />
    </form>
  );
};
