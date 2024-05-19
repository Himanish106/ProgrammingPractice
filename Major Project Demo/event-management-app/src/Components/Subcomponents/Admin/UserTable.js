import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';
import "../../../Global Files/global.css"
import "../../CSS/StateTable.css"
const UserTable = () => {
  const [users, setUsers] = useState([]);

  // Function to fetch users from the backend
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/globalcontroller/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>
      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}  className="cell-head-font">First Name</TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}  className="cell-head-font">Last Name</TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}  className="cell-head-font">Email</TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}  className="cell-head-font">Contact</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table-body">
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="cell-field-font">{user.firstName}</TableCell>
                <TableCell className="cell-field-font">{user.lastName}</TableCell>
                <TableCell style={{textTransform : "none"}} className="cell-field-font">{user.email}</TableCell>
                <TableCell className="cell-field-font">{user.contact}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserTable;
