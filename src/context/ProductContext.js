import axios from "axios";
import { useEffect, useReducer } from "react";
import { createContext } from "react";
import { getProductsService } from "../services/services";

export const ProductContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_STATE": {
      return { ...state, products: action.payload };
    }
    case "SEARCH": {
      return {
        ...state,
        filters: { ...state.filters, search: action.payload },
      };
    }
    case "RESET": {
      return {
        ...state,
        filters: { search: "", price: null, categories: [], rating: null },
      };
    }
    case "PRICE": {
      return {
        ...state,
        filters: { ...state.filters, price: action.payload },
      };
    }

    case "CATEGORIES": {
      if (action.payload.isChecked) {
        return {
          ...state,
          filters: {
            ...state.filters,
            categories: [...state.filters.categories, action.payload.value],
          },
        };
      } else {
        return {
          ...state,
          filters: {
            ...state.filters,
            categories: state.filters.categories.filter(
              (category) => category !== action.payload.value
            ),
          },
        };
      }
    }
    case "RATING": {
      return {
        ...state,
        filters: {
          ...state.filters,
          rating: Math.abs(action.payload),
        },
      };
    }
    case "CLEAR": {
      return {
        ...state,
        filters: {
          search: "",
          price: null,
          categories: [],
          rating: null,
        },
      };
    }

    default:
  }
};

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    filters: {
      search: "",
      price: null,
      categories: [],
      rating: null,
    },
  });
  const initialProducts = async () => {
    try {
      const response = await getProductsService();
      dispatch({ type: "INITIAL_STATE", payload: response.data.products });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    initialProducts();
  }, []);

  const searchHandler = (arr, filters) => {
    if (filters.search === "") return arr;
    return arr.filter((item) =>
      item.productName
        .toLowerCase()
        .includes(state.filters.search.toLowerCase())
    );
  };

  const priceFilterHandler = (arr, filters) => {
    if (filters.price === null) return arr;

    return [...arr].sort((a, b) =>
      filters.price === "LTH" ? a.price - b.price : b.price - a.price
    );
  };
  const categoriesFilterHandler = (arr, filters) => {
    if (filters.categories.length === 0) return arr;
    return arr.filter((item) =>
      filters.categories.some((category) => category === item.type)
    );
  };
  const ratingFilterHandler = (arr, filters) => {
    if (filters.rating === null) return arr;

    return arr.filter((item) => item.rating >= filters.rating);
  };
  const filtersArray = [
    searchHandler,
    categoriesFilterHandler,
    ratingFilterHandler,
    priceFilterHandler,
  ];

  const filteredArray = filtersArray.reduce(
    (acc, cur) => cur(acc, state.filters),
    state.products
  );

  const value = {
    filteredArray,
    state,
    dispatch,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
