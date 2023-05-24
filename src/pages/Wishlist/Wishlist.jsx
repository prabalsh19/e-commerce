import "./Wishlist.css";
import { WishlistContext } from "../../context/WishlistContext";
import { useContext } from "react";
import WishlistCard from "./component/WishlistCard";
const Wishlist = () => {
  const { wishlistItems } = useContext(WishlistContext);
  return (
    <>
      <ul className="wishlist-container">
        {wishlistItems.length < 1 ? (
          <h1>You haven't added anything in the wishlist yet.</h1>
        ) : (
          wishlistItems.map((item) => (
            <li key={item._id}>
              <WishlistCard product={item} />
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default Wishlist;
