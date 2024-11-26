import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Users from "./pages/users";
import Roles from "./pages/Roles";
import Permissions from "./components/Permissions";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Add your custom Navbar component */}
      <Box sx={{ display: "flex", marginTop: "20px" }}>
        <Box component="main" sx={{ flexGrow: 1, padding: "20px" }}>
          <Routes>
            {/* Redirect root URL to /dashboard */}
            <Route path="/" element={<Navigate to="/dashboard" />} />
            
            {/* Define other routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/permissions" element={<Permissions />} />
            {/* Add other routes as needed */}
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
