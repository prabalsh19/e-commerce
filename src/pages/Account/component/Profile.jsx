import "../Account.css";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useEffect } from "react";

function Profile() {
  const { userDetails, setUserDetails } = useContext(AuthContext);
  const { firstName, lastName, email } = userDetails || {};

  const userDetailsFromStorage = JSON.parse(
    localStorage.getItem("userDetails")
  );

  useEffect(() => {
    if (userDetailsFromStorage !== null) {
      setUserDetails(userDetailsFromStorage);
    }
  }, [setUserDetails, userDetailsFromStorage]);

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

export default Profile;
