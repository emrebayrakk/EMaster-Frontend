import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "./redux/store";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import PrivateLayout from "./layouts/PrivateLayout";
import PublicLayout from "./layouts/PublicLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicLayout>
                <PublicRoute>
                  <Login />
                </PublicRoute>
              </PublicLayout>
            }
          />
          <Route
            path="/register"
            element={
              <PublicLayout>
                <PublicRoute>
                  <Register />
                </PublicRoute>
              </PublicLayout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateLayout>
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              </PrivateLayout>
            }
          />
          <Route path="*" element={<Login />} />
        </Routes>
        <ToastContainer />
      </Router>
    </Provider>
  );
}

export default App;
