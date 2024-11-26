import React, { useState } from "react";
import { TextField } from "@mui/material";

const RoleSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <TextField
      label="Search Roles"
      variant="outlined"
      fullWidth
      margin="normal"
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
};

export default RoleSearch;
