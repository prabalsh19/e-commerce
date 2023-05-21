import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    alt: "product",
    category: "Wired",
    image:
      "https://res.cloudinary.com/dgzehngjw/image/upload/v1651056984/evolt-ecommerce/p12_auvdnf.jpg",
  },
  {
    _id: uuid(),
    alt: "product",
    category: "Noise_Cancelling",
    image:
      "https://res.cloudinary.com/dgzehngjw/image/upload/v1651052852/evolt-ecommerce/2_rf00wy.jpg",
  },
  {
    _id: uuid(),
    alt: "product",
    category: "Wireless",
    image:
      "https://res.cloudinary.com/dgzehngjw/image/upload/v1651052856/evolt-ecommerce/3_kgau6t.jpg",
  },
  {
    _id: uuid(),
    alt: "product",
    category: "Speaker",
    image:
      "https://res.cloudinary.com/dgzehngjw/image/upload/v1651052858/evolt-ecommerce/4_ipsjrk.jpg",
  },
];
