import React, { useState, useMemo } from "react";
import { Table, TableHead, TableBody, TableRow, TableCell, TableSortLabel } from "@mui/material";

const EnhancedRoleTable = ({ rows, onEdit, onDelete, searchQuery }) => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
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
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <TableSortLabel
              active={orderBy === "name"}
              direction={order}
              onClick={() => handleRequestSort("name")}
            >
              Role Name
            </TableSortLabel>
          </TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sortedRows.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>
              <button onClick={() => onEdit(row)}>Edit</button>
              <button onClick={() => onDelete(row.id)}>Delete</button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default EnhancedRoleTable;
