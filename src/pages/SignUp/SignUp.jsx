import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    cPassword: "",
    showPass: false,
    showCPass: false,
  });
  const [error, setError] = useState({ hasError: false, message: "" });
  const navigate = useNavigate();
  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      setError({ hasError: false, message: "" });
      if (
        formData.password.length > 0 &&
        formData.password === formData.cPassword
      ) {
        const response = await axios.post("/api/auth/signup", {
          ...formData,
        });
        console.log(response);
        if (response.status === 201) {
          navigate("/login");
        }
      } else {
        setError({
          hasError: true,
          message: "Passwords Do Not Match",
        });
      }
    } catch (e) {
      setError({ hasError: true, message: "Account Already Exists!" });
    }
  };
  return (
    <form onSubmit={signupHandler} autoComplete="off" action="">
      <div className="signup-container">
        <h2>Sign up</h2>

        <label htmlFor="fName">First Name</label>
        <input
          required
          value={formData.fName}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, fName: e.target.value }))
          }
          type="text"
          name="fName"
        />
        <label htmlFor="lName">Last Name</label>
        <input
          required
          value={formData.lName}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, lName: e.target.value }))
          }
          type="text"
          name="lName"
        />
        <label htmlFor="email">Email</label>
        <input
          required
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          type="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          required
          value={formData.password}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, password: e.target.value }))
          }
          type={formData.showPass ? "text" : "password"}
          name=""
          id="password"
        />
        <div className="show-pass-container">
          <input
            type="checkbox"
            onChange={() =>
              setFormData((prev) => ({ ...prev, showPass: !prev.showCPass }))
            }
          />
          <label>Show Password</label>
        </div>
        <label htmlFor="password">Confirm Password</label>
        <input
          required
          value={formData.cPassword}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, cPassword: e.target.value }))
          }
          type={formData.showCPass ? "text" : "password"}
          name=""
          id="cPassword"
        />
        <div className="show-pass-container">
          <input
            type="checkbox"
            onChange={() =>
              setFormData((prev) => ({ ...prev, showCPass: !prev.showCPass }))
            }
          />
          <label>Show Password</label>
        </div>
        {error.hasError && <span className="error-msg">{error.message}</span>}
        <button type="submit" className="auth-btn">
          Sign up
        </button>
      </div>
    </form>
  );
}

export default SignUp;
