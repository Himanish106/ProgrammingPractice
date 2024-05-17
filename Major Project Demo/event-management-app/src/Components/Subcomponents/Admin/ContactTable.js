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

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Contacts
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Message</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell>{contact.firstName}</TableCell>
                <TableCell>{contact.lastName}</TableCell>
                <TableCell style={{textTransform : "none"}}>{contact.email}</TableCell>
                <TableCell>{contact.contact}</TableCell>
                <TableCell>{contact.message}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ContactTable;
