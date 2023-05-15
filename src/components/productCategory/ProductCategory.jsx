import { NavLink } from "react-router-dom";
import "./ProductCategory.css";
function ProductCategory() {
  const productCategoryList = [
    {
      name: "Headphone",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Limited_Edition_small.svg?v=1682078654",
    },
    {
      name: "Laptop",
      img: "https://www.iconpacks.net/icons/1/free-laptop-icon-1399-thumb.png",
    },
    { name: "Smartphones", img: "https://svgsilh.com/svg/2113313.svg" },
    {
      name: "Speakers",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Bluethooth_Speakers_5f9cc9da-1798-4e56-9749-2e302d943b67_small.svg?v=1682078654",
    },
  ];
  return (
    <ul className="product-category-container">
      {productCategoryList.map(({ img, name }) => (
        <NavLink to={`product-category/${name.toLowerCase()}`}>
          <li className="product-category-item">
            <img src={img} alt="" />
            <span>{name}</span>
          </li>
        </NavLink>
      ))}
    </ul>
  );
}

export default ProductCategory;
