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
import "../../../../Global Files/global.css"
import "../../../CSS/StateTable.css"
const PrivateOrderTable = () => {
  const [publicOrders, setPublicOrders] = useState([]);

  // Function to fetch public orders from the backend
  const fetchPublicOrders = async () => {
    try {
      const response = await axios.get("http://localhost:8080/globalcontroller/allorder");
      setPublicOrders(response.data);
    } catch (error) {
      console.error("Error fetching public orders:", error);
    }
  };

  // Function to delete a public order by ID
  const deletePublicOrder = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/globalcontroller/deleteorder/${id}`);
      // After deletion, fetch updated public orders
      fetchPublicOrders();
    } catch (error) {
      console.error("Error deleting public order:", error);
    }
  };

  const formatDate = (dateString) => {
    const dateParts = dateString.split(" ")[0].split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]);
    const day = parseInt(dateParts[2]);

    const date = new Date(year, month - 1, day); // Months are 0-indexed in JavaScript
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    // Fetch public orders when the component mounts
    fetchPublicOrders();
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
              <TableCell style={{ minWidth: 150, whiteSpace: "nowrap" }}  className="cell-head-font">Event Type</TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}  className="cell-head-font">State</TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}  className="cell-head-font">City</TableCell>
              <TableCell style={{ minWidth: 150, whiteSpace: "nowrap" }}  className="cell-head-font">Venue Name</TableCell>
              <TableCell style={{ minWidth: 200, whiteSpace: "nowrap" }}  className="cell-head-font">Event Description</TableCell>
              <TableCell style={{ minWidth: 150, whiteSpace: "nowrap" }}  className="cell-head-font">Event Date</TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}  className="cell-head-font">Catering</TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}  className="cell-head-font">Caterer</TableCell>
              <TableCell style={{ minWidth: 150, whiteSpace: "nowrap" }}  className="cell-head-font">Design and Media</TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}  className="cell-head-font">Design</TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}  className="cell-head-font">Media</TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}  className="cell-head-font">Capacity</TableCell>
              <TableCell style={{ minWidth: 150, whiteSpace: "nowrap" }}  className="cell-head-font">Total Price</TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}  className="cell-head-font">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table-body">
            {publicOrders.map((publicOrder) => (
              <TableRow key={publicOrder.id}>
                <TableCell style={{textTransform:"none"}} className="cell-field-font" >{publicOrder.email}</TableCell>
                <TableCell className="cell-field-font">{publicOrder.eventType}</TableCell>
                <TableCell className="cell-field-font">{publicOrder.state}</TableCell>
                <TableCell className="cell-field-font">{publicOrder.city}</TableCell>
                <TableCell className="cell-field-font">{publicOrder.venueName}</TableCell>
                <TableCell className="cell-field-font">{publicOrder.eventDescription}</TableCell>
                <TableCell className="cell-field-font">{formatDate(publicOrder.eventDate)}</TableCell>
                <TableCell className="cell-field-font">{publicOrder.cateringFacility}</TableCell>
                <TableCell className="cell-field-font">{publicOrder.caterer}</TableCell>
                <TableCell className="cell-field-font">{publicOrder.designAndMediaFacility}</TableCell>
                <TableCell className="cell-field-font">{publicOrder.designService}</TableCell>
                <TableCell className="cell-field-font">{publicOrder.mediaService}</TableCell>
                <TableCell className="cell-field-font">{publicOrder.capacity}</TableCell>
                <TableCell className="cell-field-font">{publicOrder.totalPrice}</TableCell>
                <TableCell>
                  <IconButton
                   color="error"
                    onClick={() => deletePublicOrder(publicOrder.id)}
                    
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

export default PrivateOrderTable;
