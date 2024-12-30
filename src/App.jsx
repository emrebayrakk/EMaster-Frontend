import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";

const getToken = () => {
  return localStorage.getItem("authToken");
};

const App = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Provider store={store}>
      <Router>
        <div
          className={
            theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"
          }
        >
          <Routes>
            {/* Varsayılan yönlendirme */}
            <Route
              path="/"
              element={
                getToken() ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            {/* Login Sayfası */}
            <Route
              path="/login"
              element={<Login toggleTheme={toggleTheme} theme={theme} />}
            />
            {/* Register Sayfası */}
            <Route
              path="/register"
              element={<Register toggleTheme={toggleTheme} theme={theme} />}
            />
            {/* Dashboard Sayfası */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard toggleTheme={toggleTheme} theme={theme} />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
