import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginService, signUpService } from "../../services/services";
import { AuthContext } from "../../context";
import "./SignUp.css";

export function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
  });
  const { firstName, lastName, email, password } = formData;

  const [error, setError] = useState({ hasError: false, message: "" });

  const { isLoggedIn, setIsLoggedIn, setUserDetails } = useContext(AuthContext);

  const navigate = useNavigate();

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      setError({ hasError: false, message: "" });
      if (
        formData.password.length > 0 &&
        formData.password === formData.confirmPassword
      ) {
        const response = await signUpService(
          firstName,
          lastName,
          email,
          password
        );

        if (response.status === 201) {
          const response = await loginService(email, password);
          setIsLoggedIn(true);
          setUserDetails(response?.data?.foundUser);

          localStorage.setItem("encodedToken", response?.data?.encodedToken);
          localStorage.setItem(
            "userDetails",
            JSON.stringify(response?.data?.foundUser)
          );
          navigate("/");
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

  // Signup inaccessable if loggedin
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);
  return (
    <form onSubmit={signupHandler} spellCheck="false" autoComplete="off">
      <div className="signup-container">
        <h2>Sign up</h2>

        <label htmlFor="firstName">First Name</label>
        <input
          required
          value={formData.firstName}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, firstName: e.target.value }))
          }
          type="text"
          name="firstName"
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          required
          value={formData.lastName}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, lastName: e.target.value }))
          }
          type="text"
          name="lastName"
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
          type={formData.showPassword ? "text" : "password"}
          name=""
          id="password"
        />
        <div className="show-pass-container">
          <input
            type="checkbox"
            onChange={() =>
              setFormData((prev) => ({
                ...prev,
                showPassword: !prev.showPassword,
              }))
            }
          />
          <label>Show Password</label>
        </div>
        <label htmlFor="password">Confirm Password</label>
        <input
          required
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              confirmPassword: e.target.value,
            }))
          }
          type={formData.showConfirmPassword ? "text" : "password"}
          name=""
          id="confirmPassword"
        />
        <div className="show-pass-container">
          <input
            type="checkbox"
            onChange={() =>
              setFormData((prev) => ({
                ...prev,
                showConfirmPassword: !prev.showConfirmPassword,
              }))
            }
          />
          <label>Show Password</label>
        </div>
        {error.hasError && <span className="error-msg">{error.message}</span>}
        <button type="submit" className="auth-btn">
          Sign up
        </button>
        <p className="move-to-signup-text">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </form>
  );
}
