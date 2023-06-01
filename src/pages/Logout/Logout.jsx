import { NavLink } from "react-router-dom";
import "./Logout.css";

export function Logout() {
  return (
    <div className="logout-container">
      <h1>Successfully Logged Out</h1>
      <NavLink to="/login">Click Here To Login Again</NavLink>
    </div>
  );
}
