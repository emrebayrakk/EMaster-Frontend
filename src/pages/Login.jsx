import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../redux/store";
import { dynamicApiRequest } from "../utils/api";

const Login = ({ toggleTheme, theme }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await dynamicApiRequest("/User/login", "POST", {
        email,
        password,
      });
      const { token, user } = response.data;

      // Redux store'a kaydet
      dispatch(setToken(token));
      dispatch(setUser(user));

      // Token'ı localStorage'a kaydet
      localStorage.setItem("authToken", token);

      // Dashboard'a yönlendir
      navigate("/dashboard");
    } catch (err) {
      alert(err.message || "Login failed");
    }
  };

  return (
    <div
      className={`d-flex align-items-center justify-content-center vh-100 ${
        theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"
      }`}
    >
      <div
        className="card p-4 shadow-lg"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="text-center">Login</h2>
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={toggleTheme}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-2">
            Login
          </button>
          <p className="text-center">
            Don't have an account?{" "}
            <a href="/register" className="text-decoration-none">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
