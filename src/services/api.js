import axios from "axios";

const API_BASE = "http://localhost:3001";

export const getUsers = () => axios.get(`${API_BASE}/users`);
export const getRoles = () => axios.get(`${API_BASE}/roles`);
export const createUser = (data) => axios.post(`${API_BASE}/users`, data);
export const updateUser = (id, data) => axios.put(`${API_BASE}/users/${id}`, data);
export const deleteUser = (id) => axios.delete(`${API_BASE}/users/${id}`);
export const createRole = (data) => axios.post(`${API_BASE}/roles`, data);
export const updateRole = (id, data) => axios.put(`${API_BASE}/roles/${id}`, data);
export const deleteRole = (id) => axios.delete(`${API_BASE}/roles/${id}`);
