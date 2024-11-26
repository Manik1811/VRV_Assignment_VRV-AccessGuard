import React from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

const RoleFilter = ({ roles, selectedRole, onRoleChange }) => {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel>Filter by Role</InputLabel>
      <Select value={selectedRole} onChange={(e) => onRoleChange(e.target.value)} label="Filter by Role">
        <MenuItem value="">
          <em>All</em>
        </MenuItem>
        {roles.map((role) => (
          <MenuItem key={role.id} value={role.name}>
            {role.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default RoleFilter;
