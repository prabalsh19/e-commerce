import "./AddressList.css";
import { useContext } from "react";
import { AddressContext } from "../../../../context";
import { Link } from "react-router-dom";

function AddressList({ selectedAddress }) {
  const { addresses } = useContext(AddressContext);

  return (
    <div className="addresses-container">
      <h3>Address Detail</h3>
      {addresses?.map((address) => (
        <div key={address.id} className="individual-address">
          <input
            onChange={() => {
              selectedAddress(address);
            }}
            type="radio"
            id={address.id}
            name="address"
            required
          />
          <label htmlFor={address.id}>
            <h3>{address.name}</h3>
            <address>{address.address}</address>
            <p>Mobile : {address.mobile}</p>
          </label>
        </div>
      ))}
      <button className="add-address-btn">
        <Link to="/account/address">Add Address</Link>
      </button>
    </div>
  );
}

export default AddressList;
