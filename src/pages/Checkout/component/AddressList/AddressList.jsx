import "./AddressList.css";
import { useContext } from "react";
import { addressContext } from "../../../../context/address-context";

function AddressList({ selectedAddress }) {
  const { addresses } = useContext(addressContext);

  return (
    <div>
      <h3>Address Detail</h3>
      {addresses.map((address) => (
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
    </div>
  );
}

export default AddressList;
