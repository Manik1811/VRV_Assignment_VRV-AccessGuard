import React, { useState, useEffect } from "react";
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { createUser, updateUser } from "../../services/api";

const AddEditUserModal = ({ onClose, fetchUsers, user }) => {
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [role, setRole] = useState(user?.role || "");
  const [error, setError] = useState("");

  const validateForm = () => {
    if (!name || !email || !role) {
      setError("All fields are required.");
      return false;
    }
    setError(""); // clear error if validation passes
    return true;
  };

  const handleSave = async () => {
    if (!validateForm()) return; // Only proceed if form is valid

    try {
      if (user) {
        await updateUser(user.id, { name, email, role });
      } else {
        await createUser({ name, email, role });
      }
      fetchUsers();
      onClose();
    } catch (err) {
      console.error("Error saving user:", err);
    }
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setRole(user.role);
    }
  }, [user]);

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>{user ? "Edit User" : "Add User"}</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          margin="dense"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={!name && error}
          helperText={!name && error ? "Name is required" : ""}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!email && error}
          helperText={!email && error ? "Email is required" : ""}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          error={!role && error}
          helperText={!role && error ? "Role is required" : ""}
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

export default AddEditUserModal;
