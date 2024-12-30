import React, { useState } from "react";
import { dynamicApiRequest } from "../utils/api";
import { Link } from "react-router-dom";

const Register = ({ toggleTheme, theme }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    passwordHash: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await dynamicApiRequest("/User/register", "POST", formData);
      alert("Registration successful");
    } catch (err) {
      alert(err.message || "Registration failed");
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
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="text-center">Register</h2>
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={toggleTheme}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
        <form onSubmit={handleRegister}>
          {["firstName", "lastName", "username", "email", "passwordHash"].map(
            (field) => (
              <div key={field} className="mb-3">
                <label className="form-label" htmlFor={field}>
                  {field.replace("Hash", "")}
                </label>
                <input
                  type={field === "passwordHash" ? "password" : "text"}
                  id={field}
                  className="form-control"
                  placeholder={`Enter your ${field.replace("Hash", "")}`}
                  value={formData[field]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                />
              </div>
            )
          )}
          <button type="submit" className="btn btn-success w-100 mb-2">
            Register
          </button>
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-decoration-none">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
