import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ hasError: false, message: "" });
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      setError(() => ({ hasError: false, message: "" }));
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });
      console.log(response);
      if (response.status === 200) {
        console.log("here");
        setIsLoggedIn(true);
        navigate("/");
      }
    } catch (e) {
      setError(() => ({ hasError: true, message: e.response.data.errors[0] }));
    }
  };
  return (
    <form autoComplete="off" onSubmit={loginHandler} action="">
      <div className="login-container">
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          name=""
          id=""
        />
        {error.hasError && <span className="error-msg">{error.message}</span>}
        <button type="submit" className="auth-btn">
          Login
        </button>
        <p className="move-to-signup-text">
          Don't Have An Account? <Link to="/sign-up">Sign up</Link>
        </p>
      </div>
    </form>
  );
}

export default Login;