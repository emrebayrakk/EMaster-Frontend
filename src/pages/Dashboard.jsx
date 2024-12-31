import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import DashboardCards from "../components/DashboardCards";
import DashboardHeader from "../components/DashboardHeader";

const Dashboard = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  const handleSidebarToggle = (collapsed) => {
    setIsSidebarCollapsed(collapsed);
  };

  return (
    <div className="dashboard-container">
      <Sidebar onToggle={handleSidebarToggle} />
      <div className={`main-content ${isSidebarCollapsed ? "shifted" : ""}`}>
        <main>
          <DashboardHeader />
          <DashboardCards />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
