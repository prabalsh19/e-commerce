import React from "react";
import { default as MaterialCarousel } from "react-material-ui-carousel";
import Boat from "../../assets/img/Boat.jpg";
import Marshall from "../../assets/img/Marshall.png";
import BoatRocker from "../../assets/img/Boat-rockers.jpg";
import { Link } from "react-router-dom";

function Carousel() {
  var items = [
    {
      id: 0,
      img: Boat,
    },
    {
      id: 1,
      alt: "Hello World!",
      img: Marshall,
    },
    {
      id: 2,
      alt: "Hello World!",
      img: BoatRocker,
    },
  ];
  return (
    <MaterialCarousel fullHeightHover={false}>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </MaterialCarousel>
  );
}

function Item({ item }) {
  return (
    <Link to={`/products/product-details/${item.id}`}>
      <img
        alt={item.alt}
        style={{ minHeight: "30vh", width: "100vw" }}
        src={item.img}
      />
    </Link>
  );
}

export default Carousel;
