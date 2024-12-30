import React from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Dashboard = () => (
  <div className="d-flex vh-100">
    <Sidebar />
    <div className="flex-grow-1 d-flex flex-column">
      <header className="bg-primary text-white p-3">Admin Dashboard</header>
      <main className="flex-grow-1 p-4 bg-light">
        <h1>Welcome to the Dashboard</h1>
        <p>This is a simple admin dashboard created with Bootstrap.</p>
      </main>
      <Footer />
    </div>
  </div>
);

export default Dashboard;
