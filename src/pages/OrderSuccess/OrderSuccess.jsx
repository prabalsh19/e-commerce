import "./OrderSuccess.css";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function OrderSuccess() {
  const date = new Date();
  const futureData = +date + 86400000 * 3;
  const dateString = new Date(futureData).toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <div className="order-success-container">
      <h1>
        <CheckCircleIcon fontSize="large" sx={{ color: "#FF8800" }} /> Order
        Placed Successfully
      </h1>
      <p>
        Your order will be delivered by <span>{dateString}'</span>
      </p>
      <Link to="/products">Explore More</Link>
    </div>
  );
}

export default OrderSuccess;
