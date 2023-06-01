import { useContext } from "react";
import { ProductContext } from "../../../context";
import "./Filters.css";

function Filters({ showFilterMobile, setShowFilterMobile, setShowFilterBtn }) {
  const { state, dispatch } = useContext(ProductContext);

  return (
    <div className="filters-container" id={showFilterMobile ? "" : "hide"}>
      <div className="heading-container">
        <h3>Filters</h3>
        <button type="button" onClick={() => dispatch({ type: "CLEAR" })}>
          Clear
        </button>
      </div>
      <h4>Price</h4>
      <ul>
        <li>
          <input
            onChange={() => dispatch({ type: "PRICE", payload: "htl" })}
            type="radio"
            checked={state.filters.price === "htl"}
            name="price"
            id="htl"
          />
          <label htmlFor="htl">High To Low</label>
        </li>
        <li>
          <input
            onChange={() => dispatch({ type: "PRICE", payload: "lth" })}
            checked={state.filters.price === "lth"}
            type="radio"
            name="price"
            id="lth"
          />
          <label htmlFor="lth">Low To High</label>
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
            checked={state.filters.categories.includes("wired")}
            type="checkbox"
            name="categories"
            id="wired"
          />
          <label htmlFor="wired">Wired</label>
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
            checked={state.filters.categories.includes("noise_cancelling")}
            type="checkbox"
            name="categories"
            id="noise_cancelling"
          />
          <label htmlFor="noise_cancelling">Noise Cancelling</label>
        </li>
        <li>
          <input
            onChange={(e) =>
              dispatch({
                type: "CATEGORIES",
                payload: { isChecked: e.target.checked, value: "wireless" },
              })
            }
            checked={state.filters.categories.includes("wireless")}
            type="checkbox"
            name="categories"
            id="wireless"
          />
          <label htmlFor="wireless">Wireless</label>
        </li>
        <li>
          <input
            onChange={(e) =>
              dispatch({
                type: "CATEGORIES",
                payload: { isChecked: e.target.checked, value: "speaker" },
              })
            }
            checked={state.filters.categories.includes("speaker")}
            type="checkbox"
            name="categories"
            id="speaker"
          />
          <label htmlFor="speaker">Speaker</label>
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
              dispatch({ type: "RATING", payload: e.target.value });
            }}
            value={state.filters.rating}
            name=""
            id=""
          />
        </div>
      </ul>
      <div
        className="apply-btn"
        onClick={() => {
          setShowFilterMobile(false);
          setShowFilterBtn(true);
        }}
      ></div>
    </div>
  );
}

export default Filters;
