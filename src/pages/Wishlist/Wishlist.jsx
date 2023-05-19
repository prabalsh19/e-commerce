import "./Wishlist.css";
import { WishlistContext } from "../../context/WishlistContext";
import ProductCard from "../Products/Products List/Component/ProductCard";
import { useContext } from "react";
const Wishlist = () => {
  const { wishlistItems } = useContext(WishlistContext);
  return (
    <>
      <ul className="wishlist-container">
        {wishlistItems.map((item) => (
          <li key={item._id}>
            <ProductCard product={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Wishlist;
