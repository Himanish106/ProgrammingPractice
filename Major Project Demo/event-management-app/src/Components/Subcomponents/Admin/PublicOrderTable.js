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
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ImageIcon from "@mui/icons-material/Image";

const PublicOrderTable = () => {
  const [publicOrders, setPublicOrders] = useState([]);

  // Function to fetch public orders from the backend
  const fetchPublicOrders = async () => {
    try {
      const response = await axios.get("http://localhost:8080/privateeventcontroller/allorder");
      setPublicOrders(response.data);
    } catch (error) {
      console.error("Error fetching public orders:", error);
    }
  };

  // Function to delete a public order by ID
  const deletePublicOrder = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/privateeventcontroller/deleteorder/${id}`);
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
        Public Orders
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}>Event Type</TableCell>
              <TableCell style={{ minWidth: 150, whiteSpace: "nowrap" }}>Email</TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}>State</TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}>City</TableCell>
              <TableCell style={{ minWidth: 150, whiteSpace: "nowrap" }}>Venue Name</TableCell>
              <TableCell style={{ minWidth: 200, whiteSpace: "nowrap" }}>Event Description</TableCell>
              <TableCell style={{ minWidth: 150, whiteSpace: "nowrap" }}>Event Date</TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}>Catering</TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}>Caterer</TableCell>
              <TableCell style={{ minWidth: 150, whiteSpace: "nowrap" }}>Design and Media</TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}>Design</TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}>Media</TableCell>
              <TableCell style={{ minWidth: 150, whiteSpace: "nowrap" }}>Onsite Management</TableCell>
              <TableCell style={{ minWidth: 150, whiteSpace: "nowrap" }}>Advertising</TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}>Capacity</TableCell>
              <TableCell style={{ minWidth: 150, whiteSpace: "nowrap" }}>Total Price</TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}>Image</TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {publicOrders.map((publicOrder) => (
              <TableRow key={publicOrder.id}>
                <TableCell style={{textTransform:"none"}}>{publicOrder.email}</TableCell>
                <TableCell>{publicOrder.eventType}</TableCell>
                <TableCell>{publicOrder.state}</TableCell>
                <TableCell>{publicOrder.city}</TableCell>
                <TableCell>{publicOrder.venueName}</TableCell>
                <TableCell>{publicOrder.eventDescription}</TableCell>
                <TableCell>{formatDate(publicOrder.eventDate)}</TableCell>
                <TableCell>{publicOrder.cateringFacility}</TableCell>
                <TableCell>{publicOrder.caterer}</TableCell>
                <TableCell>{publicOrder.designAndMediaFacility}</TableCell>
                <TableCell>{publicOrder.designService}</TableCell>
                <TableCell>{publicOrder.mediaService}</TableCell>
                <TableCell>{publicOrder.onsiteManagementFacility}</TableCell>
                <TableCell>{publicOrder.advertisingFacility}</TableCell>
                <TableCell>{publicOrder.capacity}</TableCell>
                <TableCell>{publicOrder.totalPrice}</TableCell>
                <TableCell>
                  {publicOrder.data ? (
                    <Tooltip title="Image Uploaded">
                      <CheckCircleIcon color="success" />
                    </Tooltip>
                  ) : (
                    <Tooltip title="No Image Uploaded">
                      <ImageIcon color="disabled" />
                    </Tooltip>
                  )}
                </TableCell>
                <TableCell>
                  <IconButton
                    color="error"
                    onClick={() => deletePublicOrder(publicOrder.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <label htmlFor={`file-input-${publicOrder.id}`}>
                    <input
                      id={`file-input-${publicOrder.id}`}
                      type="file"
                      style={{ display: "none" }}
                      onChange={(e) => {
                        const file = e.target.files[0];
                        const formData = new FormData();
                        formData.append("file", file);
                        axios
                          .post(
                            `http://localhost:8080/privateeventcontroller/${publicOrder.id}/image`,
                            formData,
                            {
                              headers: {
                                "Content-Type": "multipart/form-data",
                              },
                            }
                          )
                          .then(() => {
                            fetchPublicOrders();
                          })
                          .catch((error) => {
                            console.error("Error adding image:", error);
                          });
                      }}
                    />
                    <IconButton component="span" color="primary">
                      <AddPhotoAlternateIcon />
                    </IconButton>
                  </label>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PublicOrderTable;
