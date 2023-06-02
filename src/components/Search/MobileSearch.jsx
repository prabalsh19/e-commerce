import { SearchInput } from "..";
import "../Nav/Nav.css";

export const MobileSearch = ({ setShowMobileNav }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    setShowMobileNav(false);
  };

  return (
    <form onSubmit={submitHandler} className="nav__mobile-search-container">
      <SearchInput />
    </form>
  );
};
