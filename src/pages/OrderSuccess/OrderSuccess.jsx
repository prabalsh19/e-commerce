import "./OrderSuccess.css";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function OrderSuccess() {
  return (
    <div className="order-success-container">
      <h1 style={{ color: "#FF8800" }}>
        <CheckCircleIcon fontSize="large" sx={{ color: "#FF8800" }} /> Order
        Placed Successfully
      </h1>
      <Link to="/products">Explore More</Link>
    </div>
  );
}

export default OrderSuccess;
