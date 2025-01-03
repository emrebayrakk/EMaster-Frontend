import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { useState } from "react";

const PrivateLayout = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleSidebarToggle = (collapsed) => {
    setIsSidebarCollapsed(collapsed);
  };

  return (
    <div className="dashboard-container">
      <Sidebar onToggle={handleSidebarToggle} />
      <div className={`main-content ${isSidebarCollapsed ? "shifted" : ""}`}>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default PrivateLayout;
