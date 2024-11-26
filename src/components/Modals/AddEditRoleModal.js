import React, { useState, useEffect } from "react";
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { createRole, updateRole } from "../../services/api";

const AddEditRoleModal = ({ onClose, fetchRoles, role }) => {
  const [roleName, setRoleName] = useState("");

  useEffect(() => {
    if (role) {
      // If editing an existing role, populate the input with the role name
      setRoleName(role.name);
    } else {
      // If adding a new role, clear the input
      setRoleName("");
    }
  }, [role]);

  const handleSave = async () => {
    try {
      // Check if we are adding or editing a role
      if (role) {
        // Update the existing role
        await updateRole(role.id, { name: roleName });
      } else {
        // Create a new role
        await createRole({ name: roleName });
      }
      // Fetch the updated roles list and close the modal
      fetchRoles();
      onClose();
    } catch (err) {
      console.error("Error saving role:", err);
      alert("Error saving role. Please try again.");
    }
  };

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>{role ? "Edit Role" : "Add New Role"}</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          margin="dense"
          label="Role Name"
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
          error={!roleName}
          helperText={!roleName ? "Role Name is required" : ""}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEditRoleModal;
