import "./Filters.css";
function Filters() {
  return (
    <div className="filters-container">
      <div className="heading-container">
        <h3>Filters</h3>
        <button>Clear</button>
      </div>

      <h4>Price</h4>
      <ul>
        <li>
          <input type="radio" name="price" id="HTL" />
          <label htmlFor="price">High To Low</label>
        </li>
        <li>
          <input type="radio" name="price" id="LTH" />
          <label htmlFor="price">Low To High</label>
        </li>
      </ul>
      <h4>Categories</h4>
      <ul>
        <li>
          <input type="checkbox" name="categories" id="" />
          <label htmlFor="categories">Wired</label>
        </li>
        <li>
          <input type="checkbox" name="categories" id="" />
          <label htmlFor="categories">Noise Cancelling</label>
        </li>
        <li>
          <input type="checkbox" name="categories" id="" />
          <label htmlFor="categories">Wireless</label>
        </li>{" "}
        <li>
          <input type="checkbox" name="categories" id="" />
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
          <input min="1" max="5" step="1" type="range" name="" id="" />
        </div>
      </ul>
    </div>
  );
}

export default Filters;
