import { useContext, useState } from "react";
import { state as stateArray } from "../../../utils/Constants";
import { v4 as uuid } from "uuid";
import { addressContext } from "../../../context";
import "../Account.css";
import { useRandomForm } from "../../../hooks/useRandomForm";
import { toastHandler } from "../../../utils/Toast";

export function Address() {
  const { addresses, setAddresses } = useContext(addressContext);
  const initialForm = {
    name: "",
    mobile: "",
    pincode: "",
    address: "",
    city: "",
    alternateNum: "",
    state: "",
  };
  const [formData, setFormData] = useState(initialForm);
  const { name, mobile, pincode, address, city, alternateNum, state } =
    formData;

  const getRandomFormData = useRandomForm();

  const randomDataHandler = (e) => {
    e.preventDefault();
    setFormData(getRandomFormData);
  };

  const formOnChangeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setAddresses((prev) => [...prev, { id: uuid(), ...formData }]);
    resetDataHandler();
    toastHandler("success", "Address added successfully");
  };
  const resetDataHandler = () => {
    setFormData(initialForm);
  };
  const deleteAddress = (id) => {
    setAddresses((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <>
      <form onSubmit={submitHandler} spellCheck="false" autoComplete="off">
        <div className="address-container">
          <div className="input-container">
            <input
              value={name}
              onChange={formOnChangeHandler}
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              value={mobile}
              onChange={formOnChangeHandler}
              type="number"
              name="mobile"
              placeholder="Mobile Number"
              required
            />
          </div>
          <div className="input-container">
            <input
              value={pincode}
              onChange={formOnChangeHandler}
              type="number"
              min="1"
              name="pincode"
              max={999999}
              placeholder="Pin Code"
              required
            />
            <input
              value={city}
              onChange={formOnChangeHandler}
              type="text"
              name="city"
              placeholder="City"
              required
            />
          </div>
          <textarea
            value={address}
            id=""
            onChange={formOnChangeHandler}
            cols="30"
            rows="10"
            placeholder="Address"
            name="address"
            required
          ></textarea>
          <div className="input-container">
            <input
              value={alternateNum}
              onChange={formOnChangeHandler}
              type="tel"
              name="alternateNum"
              placeholder="Alternate Phone (Optional)"
            />
            <select
              value={state}
              onChange={formOnChangeHandler}
              name="state"
              id=""
              required
            >
              <option value="" disabled>
                Choose State
              </option>
              {stateArray.map((state, index) => (
                <option key={index}>{state}</option>
              ))}
            </select>
          </div>
          <div className="address-actions">
            <button type="submit">Add</button>
            <button onClick={randomDataHandler}>Random Data</button>
            <button type="button" onClick={resetDataHandler}>
              Cancel
            </button>
          </div>
        </div>
      </form>
      <div className="addresses-list">
        {addresses.map(({ id, name, mobile, address, city, state }) => (
          <div key={id} className="addresses-list__address">
            <h3>{name}</h3>
            <span>{mobile}</span>
            <address>{address}</address>
            <span>{city}</span>
            <span>{state}</span>
            <div className="addresses-list__address-actions">
              <button onClick={() => deleteAddress(id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
