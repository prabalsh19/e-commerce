import "../Account.css";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

function Profile() {
  const { userDetails } = useContext(AuthContext);
  const { firstName, lastName, email } = userDetails || {};

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
