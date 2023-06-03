import { useEffect, useReducer, createContext, useState } from "react";
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
    case "SEARCH_QUERY": {
      return {
        ...state,
        searchQuery: action.payload,
      };
    }
    case "RESET": {
      return {
        ...state,
        searchQuery: "",
        filters: {
          search: "",
          price: "",
          categories: [],
          rating: "-1",
        },
      };
    }
    case "SET_CATEGORIES": {
      return {
        ...state,
        productCategoryList: action.payload,
      };
    }
    case "PRICE": {
      return {
        ...state,
        filters: {
          ...state.filters,
          price: action.payload,
        },
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
          rating: action.payload,
        },
      };
    }
    case "CLEAR": {
      return {
        ...state,
        searchQuery: "",
        filters: {
          search: "",
          price: "",
          categories: [],
          rating: "-1",
        },
      };
    }

    default:
      return state;
  }
};

export const ProductContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    productCategoryList: [],
    searchQuery: "",
    filters: {
      search: "",
      price: "",
      categories: [],
      rating: "-1",
    },
  });
  const initialProducts = async () => {
    try {
      setIsLoading(true);
      const response = await getProductsService();
      dispatch({ type: "INITIAL_STATE", payload: response.data.products });
      setIsLoading(false);
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
    if (filters.price === "") return arr;

    return [...arr].sort((a, b) =>
      filters.price === "lth" ? a.price - b.price : b.price - a.price
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

    return arr.filter((item) => item.rating >= Math.abs(filters.rating));
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
    isLoading,
    state,
    dispatch,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
