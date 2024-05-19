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
  IconButton,
} from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import "../../../Global Files/global.css"
import "../../CSS/StateTable.css"
const ContactTable = () => {
  const [contacts,setContacts] = useState([]);

  // Function to fetch contacts from the backend
  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/user/usercontact');
     setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const deleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/user/deletecontact/${id}`);
      // After deletion, fetch updated public orders
      fetchContacts();
    } catch (error) {
      console.error("Error deleting public order:", error);
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Contacts
      </Typography>
      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}  className="cell-head-font">First Name</TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}  className="cell-head-font">Last Name</TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}  className="cell-head-font">Email</TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}  className="cell-head-font">Contact</TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}  className="cell-head-font">Message</TableCell> 
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}  className="cell-head-font">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table-body">
            {contacts.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell  className="cell-field-font">{contact.firstName}</TableCell>
                <TableCell  className="cell-field-font">{contact.lastName}</TableCell>
                <TableCell style={{textTransform : "none"}}  className="cell-field-font">{contact.email}</TableCell>
                <TableCell  className="cell-field-font">{contact.contact}</TableCell>
                <TableCell  className="cell-field-font">{contact.message}</TableCell>
                <TableCell>
                  <IconButton
                   color="error"
                    onClick={() => deleteContact(contact.id)}          
                  >
                    <DeleteIcon style={{fontSize: "2rem"}} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ContactTable;
