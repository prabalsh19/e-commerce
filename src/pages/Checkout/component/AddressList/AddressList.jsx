import "./AddressList.css";
import { useContext } from "react";
import { addressContext } from "../../../../context/address-context";

function AddressList() {
  const { addresses } = useContext(addressContext);
  console.log(addresses);
  return (
    <div>
      <h3>Address Detail</h3>
      {addresses.map((address) => (
        <div className="individual-address">
          <input type="radio" id={address.id} name={address.id} />
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
