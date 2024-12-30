import React from "react";

const Sidebar = () => (
  <div className="bg-dark text-white vh-100" style={{ width: "250px" }}>
    <h3 className="text-center py-3">Admin Panel</h3>
    <ul className="list-group list-group-flush">
      {["Dashboard", "Settings", "Profile", "Logout"].map((item) => (
        <li key={item} className="list-group-item bg-dark text-white border-0">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default Sidebar;
