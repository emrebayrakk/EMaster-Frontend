import { useState } from "react";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className="d-flex"
      style={{
        backgroundColor: "#f0f2f5", // Tüm alan için açık renkli arka plan
      }}
    >
      <Sidebar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
      <div
        className="flex-grow-1"
        style={{
          marginLeft: collapsed ? "20px" : "16px",
          transition: "margin-left 0.3s ease",
          padding: "24px", // Kenar boşlukları artırıldı
          minHeight: "100vh",
        }}
      >
        <main>
          <div
            style={{
              display: "flex",
              gap: "16px",
              marginBottom: "24px", // Daha fazla alt boşluk
              justifyContent: "space-between", // Kartların hizalaması
            }}
          >
            <div
              className="card bg-info text-white text-center"
              style={{
                flex: 1,
                padding: "16px",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h5>Campaign Sent</h5>
              <p className="display-6">197</p>
            </div>
            <div
              className="card bg-success text-white text-center"
              style={{
                flex: 1,
                padding: "16px",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h5>Annual Profit</h5>
              <p className="display-6">$489.4k</p>
            </div>
            <div
              className="card bg-warning text-white text-center"
              style={{
                flex: 1,
                padding: "16px",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h5>Lead Conversion</h5>
              <p className="display-6">32.89%</p>
            </div>
            <div
              className="card bg-danger text-white text-center"
              style={{
                flex: 1,
                padding: "16px",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h5>Sales Forecast</h5>
              <p className="display-6">75.35%</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <div style={{ flex: 2 }}>
              <div
                className="card"
                style={{
                  padding: "16px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h5>Total Revenue</h5>
                <p className="display-6">$9,542.00</p>
                <small>From Jan 2022 to Jul 2022</small>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div
                className="card"
                style={{
                  padding: "16px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h5>Order Summary</h5>
                <ul className="list-unstyled">
                  <li>Completed: 56,236</li>
                  <li>Processing: 12,596</li>
                  <li>Cancelled: 1,568</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
