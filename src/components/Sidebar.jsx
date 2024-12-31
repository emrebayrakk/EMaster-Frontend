import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import {
  FaHome,
  FaSignOutAlt,
  FaBars,
  FaChartBar,
  FaUsers,
  FaCog,
} from "react-icons/fa";

const Sidebar = ({ onToggle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
    onToggle(!isCollapsed);
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/login");
  };

  const menuItems = [
    { icon: FaHome, text: "Dashboard", path: "/dashboard" },
    { icon: FaChartBar, text: "Analytics", path: "/analytics" },
    { icon: FaUsers, text: "Users", path: "/users" },
    { icon: FaCog, text: "Settings", path: "/settings" },
  ];

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <h3 className={`brand ${isCollapsed ? "d-none" : ""}`}>EMaster</h3>
        <button
          className="toggle-btn"
          onClick={handleToggle}
          title={isCollapsed ? "Expand" : "Collapse"}
        >
          <FaBars />
        </button>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="nav-link"
            title={isCollapsed ? item.text : ""}
          >
            <item.icon className="nav-icon" />
            {!isCollapsed && <span className="nav-text">{item.text}</span>}
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button
          onClick={handleLogout}
          className="logout-btn"
          title={isCollapsed ? "Logout" : ""}
        >
          <FaSignOutAlt className="nav-icon" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
