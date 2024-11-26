import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to the RBAC Dashboard</h1>
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
        <div style={{ padding: "20px", backgroundColor: "#f0f0f0", borderRadius: "8px", width: "30%" }}>
          <h3>Users</h3>
          <p>Manage your users and assign roles.</p>
          <Link to="/users" style={{ color: "#007bff", textDecoration: "none" }}>View Users</Link>
        </div>
        <div style={{ padding: "20px", backgroundColor: "#f0f0f0", borderRadius: "8px", width: "30%" }}>
          <h3>Roles</h3>
          <p>Define roles and assign permissions to them.</p>
          <Link to="/roles" style={{ color: "#007bff", textDecoration: "none" }}>View Roles</Link>
        </div>
        <div style={{ padding: "20px", backgroundColor: "#f0f0f0", borderRadius: "8px", width: "30%" }}>
          <h3>Permissions</h3>
          <p>Set permissions for various roles and users.</p>
          <Link to="/permissions" style={{ color: "#007bff", textDecoration: "none" }}>View Permissions</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
