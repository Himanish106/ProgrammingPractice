import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "../../../Global Files/global.css"
import "../../CSS/StateTable.css"
const TicketInfoTable = () => {
  const [ticketingInfo, setTicketingInfos] = useState([]);

  // Function to fetch public orders from the backend
  const fetchInfos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/ticketing/allinfos");
      setTicketingInfos(response.data);
    } catch (error) {
      console.error("Error fetching public orders:", error);
    }
  };

  // Function to delete a public order by ID
  const deletePublicInfo = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/ticketing/deleteinfo/${id}`);
      // After deletion, fetch updated public orders
      fetchInfos();
    } catch (error) {
      console.error("Error deleting public order:", error);
    }
  };

  useEffect(() => {
    fetchInfos();
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Private Orders
      </Typography>
      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}  className="cell-head-font">Email</TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}  className="cell-head-font">Event Type</TableCell>
              <TableCell style={{ minWidth: 150, whiteSpace: "nowrap" }}  className="cell-head-font">Date</TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}  className="cell-head-font">No of Persons</TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}  className="cell-head-font">Paid Price</TableCell>
              <TableCell style={{ minWidth: 150, whiteSpace: "nowrap" }}  className="cell-head-font">State</TableCell>
              <TableCell style={{ minWidth: 200, whiteSpace: "nowrap" }}  className="cell-head-font">Venue</TableCell>
              <TableCell style={{ minWidth: 200, whiteSpace: "nowrap" }}  className="cell-head-font">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table-body">
            {ticketingInfo.map((ticketinfo) => (
              <TableRow key={ticketinfo.id}>
                <TableCell style={{textTransform:"none"}} className="cell-field-font" >{ticketinfo.email}</TableCell>
                <TableCell className="cell-field-font">{ticketinfo.eventName}</TableCell>
                <TableCell className="cell-field-font">{ticketinfo.date}</TableCell>
                <TableCell className="cell-field-font">{ticketinfo.noOfPersons}</TableCell>
                <TableCell className="cell-field-font">{ticketinfo.paidPrice}</TableCell>
                <TableCell className="cell-field-font">{ticketinfo.state}</TableCell>
                <TableCell className="cell-field-font">{ticketinfo.venue}</TableCell>
                <TableCell>
                  <IconButton
                   color="error"
                    onClick={() => deletePublicInfo(ticketinfo.id)}
                    
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

export default TicketInfoTable;
