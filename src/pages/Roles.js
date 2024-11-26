import React, { useState, useEffect } from "react";
import { getRoles, deleteRole } from "../services/api";
import AddEditRoleModal from "../components/Modals/AddEditRoleModal";
import EnhancedTable from "../components/EnhancedTable";
import { Button } from "@mui/material";  // Importing Material UI Button for styling

const Roles = () => {
  const [roles, setRoles] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const fetchRoles = async () => {
    try {
      const { data } = await getRoles();
      setRoles(data);
    } catch (err) {
      console.error("Error fetching roles:", err);
    }
  };

  const handleDelete = async (id) => {
    await deleteRole(id);
    fetchRoles();
  };

  const handleEdit = (role) => {
    setSelectedRole(role);
    setOpenModal(true);
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  return (
    <div>
      <h1>Roles</h1>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => setOpenModal(true)} 
        sx={{ marginBottom: 2 }}
      >
        Add Role
      </Button>
      
      <EnhancedTable 
        rows={roles} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
      />

      {openModal && (
        <AddEditRoleModal
          onClose={() => {
            setOpenModal(false);
            setSelectedRole(null);
          }}
          fetchRoles={fetchRoles}
          role={selectedRole}
        />
      )}
    </div>
  );
};

export default Roles;
