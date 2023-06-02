import { useContext, useEffect } from "react";
import { AuthContext } from "../../../context";
import "../Account.css";

export function Profile() {
  const { userDetails, setUserDetails } = useContext(AuthContext);
  const { firstName, lastName, email } = userDetails || {};

  useEffect(() => {
    const userDetailsFromStorage = JSON.parse(
      localStorage.getItem("userDetails")
    );
    if (userDetailsFromStorage !== null) {
      setUserDetails(userDetailsFromStorage);
    }
  }, [setUserDetails]);

  return (
    <div className="profile-container">
      <h2>
        <span className="label">Name :</span> {firstName} {lastName}
      </h2>
      <h2>
        <span className="label">Email :</span> {email}
      </h2>
    </div>
  );
}
