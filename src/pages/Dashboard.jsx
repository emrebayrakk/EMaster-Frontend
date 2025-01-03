import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import DashboardCards from "../components/DashboardCards";
import DashboardHeader from "../components/DashboardHeader";
import { dashboardAPI } from "../services/api";

const Dashboard = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await dashboardAPI.getUsers();
      setUserData(response.data);
    };
    fetchData();
  }, []);

  return (
    <main>
      <DashboardHeader />
      <DashboardCards />
      <div className="container mt-4">
        <h3>User Data</h3>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
