import { useContext, useState } from "react";
import "./Filters.css";
import { ProductContext } from "../../../context/ProductContext";
function Filters({ showFilterMobile, setShowFilterMobile, setShowFilterBtn }) {
  const [rangeValue, setRangeValue] = useState(1);
  const { state, dispatch } = useContext(ProductContext);
  const submitHandler = (e) => {
    e.preventDefault();
    e.target.reset();
    setRangeValue(1);
  };
  return (
    <div className="filters-container" id={showFilterMobile ? "" : "hide"}>
      <form action="" onSubmit={submitHandler}>
        <div className="heading-container">
          <h3>Filters</h3>
          <button type="submit" onClick={() => dispatch({ type: "CLEAR" })}>
            Clear
          </button>
        </div>
        <h4>Price</h4>
        <ul>
          <li>
            <input
              onClick={() => dispatch({ type: "PRICE", payload: "HTL" })}
              type="radio"
              name="price"
              id="HTL"
            />
            <label htmlFor="price">High To Low</label>
          </li>
          <li>
            <input
              onClick={() => dispatch({ type: "PRICE", payload: "LTH" })}
              type="radio"
              name="price"
              id="LTH"
            />
            <label htmlFor="price">Low To High</label>
          </li>
        </ul>
        <h4>Categories</h4>
        <ul>
          <li>
            <input
              onChange={(e) =>
                dispatch({
                  type: "CATEGORIES",
                  payload: { isChecked: e.target.checked, value: "wired" },
                })
              }
              checked={state.condition.categories.includes("wired")}
              type="checkbox"
              name="categories"
              id=""
            />
            <label htmlFor="categories">Wired</label>
          </li>
          <li>
            <input
              onChange={(e) =>
                dispatch({
                  type: "CATEGORIES",
                  payload: {
                    isChecked: e.target.checked,
                    value: "noise_cancelling",
                  },
                })
              }
              checked={state.condition.categories.includes("noise_cancelling")}
              type="checkbox"
              name="categories"
              id=""
            />
            <label htmlFor="categories">Noise Cancelling</label>
          </li>
          <li>
            <input
              onChange={(e) =>
                dispatch({
                  type: "CATEGORIES",
                  payload: { isChecked: e.target.checked, value: "wireless" },
                })
              }
              checked={state.condition.categories.includes("wireless")}
              type="checkbox"
              name="categories"
              id=""
            />
            <label htmlFor="categories">Wireless</label>
          </li>
          <li>
            <input
              onChange={(e) =>
                dispatch({
                  type: "CATEGORIES",
                  payload: { isChecked: e.target.checked, value: "speaker" },
                })
              }
              checked={state.condition.categories.includes("speaker")}
              type="checkbox"
              name="categories"
              id=""
            />
            <label htmlFor="categories">Speaker</label>
          </li>
          <div className="rating-filter-container">
            <h4>Ratings</h4>
            <div className="rating-labels">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>
            <input
              min="-5"
              max="-1"
              step="1"
              type="range"
              onChange={(e) => {
                setRangeValue(e.target.value);
                dispatch({ type: "RATING", payload: e.target.value });
              }}
              value={rangeValue}
              name=""
              id=""
            />
          </div>
        </ul>
        <div
          className="pseudo"
          onClick={() => {
            setShowFilterMobile(false);
            setShowFilterBtn(true);
          }}
        ></div>
      </form>
    </div>
  );
}

export default Filters;
