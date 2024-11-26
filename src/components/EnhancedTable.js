import React, { useState, useMemo } from "react";
import { Table, TableHead, TableBody, TableRow, TableCell, TableSortLabel, TextField, Button } from "@mui/material";

const EnhancedTable = ({ rows, onEdit, onDelete }) => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [searchQuery, setSearchQuery] = useState("");

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRows = useMemo(
    () => rows.filter((row) => row.name.toLowerCase().includes(searchQuery.toLowerCase())),
    [rows, searchQuery]
  );

  const sortedRows = useMemo(() => {
    return filteredRows.sort((a, b) => {
      if (orderBy === "name") {
        if (order === "asc") return a.name.localeCompare(b.name);
        return b.name.localeCompare(a.name);
      }
      return 0;
    });
  }, [filteredRows, order, orderBy]);

  return (
    <div>
      <TextField
        label="Search Users"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={orderBy === "name"}
                direction={order}
                onClick={() => handleRequestSort("name")}
              >
                Name
              </TableSortLabel>
            </TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => onEdit(row)}
                  style={{ marginRight: 10 }}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => onDelete(row.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default EnhancedTable;
