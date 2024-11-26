import React, { useState } from "react";

const Permissions = () => {
  // Sample roles and their associated permissions
  const roles = [
    { name: "Boss", permissions: ["Read", "Write", "Delete", "Admin", "Assign Roles", "Manage Permissions"] },
    { name: "Admin", permissions: ["Read", "Write", "Delete", "Admin", "Assign Roles", "Manage Permissions"] },
    { name: "Editor", permissions: ["Read", "Write"] },
    { name: "Employee", permissions: ["Read", "Write"] },
    { name: "Viewer", permissions: ["Read"] },
  ];

  const [selectedRole, setSelectedRole] = useState(null);
  const [rolePermissions, setRolePermissions] = useState([]);

  const handleRoleSelection = (roleName) => {
    const role = roles.find((role) => role.name === roleName);
    setSelectedRole(roleName);
    setRolePermissions(role ? role.permissions : []);
  };

  const togglePermission = (permission) => {
    setRolePermissions((prevPermissions) =>
      prevPermissions.includes(permission)
        ? prevPermissions.filter((perm) => perm !== permission)
        : [...prevPermissions, permission]
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Manage Permissions</h1>
      <p>Select a role to manage its permissions.</p>

      {/* Role Selection Dropdown */}
      <select onChange={(e) => handleRoleSelection(e.target.value)} value={selectedRole} style={{ padding: "10px", margin: "20px 0" }}>
        <option value="">Select a Role</option>
        {roles.map((role) => (
          <option key={role.name} value={role.name}>
            {role.name}
          </option>
        ))}
      </select>

      {/* Display Permissions for the Selected Role */}
      {selectedRole && (
        <div>
          <h3>Permissions for {selectedRole}:</h3>
          <ul>
            {["Read", "Write", "Delete", "Admin", "Assign Roles", "Manage Permissions"].map((permission) => (
              <li key={permission} style={{ marginBottom: "10px" }}>
                <label>
                  <input
                    type="checkbox"
                    checked={rolePermissions.includes(permission)}
                    onChange={() => togglePermission(permission)}
                  />
                  {permission}
                </label>
              </li>
            ))}
          </ul>
          <div>
            <button
              onClick={() => alert(`Permissions for ${selectedRole} have been updated.`)}
              style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", cursor: "pointer" }}
            >
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Permissions;
