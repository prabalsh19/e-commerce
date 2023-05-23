import { state } from "../../../utils/Constants";
import "../Account.css";

function Address() {
  return (
    <div className="address-container">
      <div className="input-container">
        <input type="text" placeholder="Name" required />
        <input type="tel" placeholder="Mobile Number" required />
      </div>
      <div className="input-container">
        <input
          type="number"
          min="1"
          max={999}
          placeholder="Pin Code"
          required
        />
        <input type="text" placeholder="City" required />
      </div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Address"
        required
      ></textarea>
      <input type="tel" placeholder="Alternate Phone (Optional)" />
      <select name="state" id="" required>
        <option disabled>Choose State</option>
        {state.map((state) => (
          <option>{state}</option>
        ))}
      </select>
      <button type="submit">Add</button>
      <button>Reset</button>
      <button>Random Data</button>
      <button>Cancel</button>
    </div>
  );
}

export default Address;
