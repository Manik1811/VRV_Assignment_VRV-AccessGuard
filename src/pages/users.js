import React, { useState, useEffect } from "react";
import { getUsers, deleteUser } from "../services/api";
import AddEditUserModal from "../components/Modals/AddEditUserModal";
import EnhancedTable from "../components/EnhancedTable";
import { Button } from "@mui/material";  // Importing Material UI Button for styling

const Users = () => {
  const [users, setUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const { data } = await getUsers();
      setUsers(data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setOpenModal(true);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => setOpenModal(true)} 
        sx={{ marginBottom: 2 }}
      >
        Add User
      </Button>
      
      <EnhancedTable 
        rows={users} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
      />

      {openModal && (
        <AddEditUserModal
          onClose={() => {
            setOpenModal(false);
            setSelectedUser(null);
          }}
          fetchUsers={fetchUsers}
          user={selectedUser}
        />
      )}
    </div>
  );
};

export default Users;
