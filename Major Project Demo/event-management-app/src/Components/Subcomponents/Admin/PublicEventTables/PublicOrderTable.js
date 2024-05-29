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
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ImageIcon from "@mui/icons-material/Image";
import "../../../../Global Files/global.css";
import "../../../CSS/StateTable.css";

const PublicOrderTable = () => {
  const [publicOrders, setPublicOrders] = useState([]);
  const [ticketPrice, setTicketPrice] = useState({});

  // Function to fetch public orders from the backend
  const fetchPublicOrders = async () => {
    try {
      const response = await axios.get("http://localhost:8080/privateeventcontroller/allorder");
      setPublicOrders(response.data);
      // Initialize ticketPrice state with fetched data
      const initialTicketPrices = response.data.reduce((acc, order) => {
        acc[order.id] = order.ticketPrice;
        return acc;
      }, {});
      setTicketPrice(initialTicketPrices);
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

  // Function to update the ticket price of a public order by ID
  const updateTicketPrice = async (id) => {
    try {
      await axios.put(`http://localhost:8080/privateeventcontroller/${id}/ticketprice`, null, {
        params: { ticket: ticketPrice[id] },
      });
      // After update, fetch updated public orders
      fetchPublicOrders();
    } catch (error) {
      console.error("Error updating ticket price:", error);
    }
  };

  const handleTicketPriceChange = (id, value) => {
    setTicketPrice((prevTicketPrice) => ({
      ...prevTicketPrice,
      [id]: value,
    }));
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
      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ minWidth: 150, whiteSpace: "nowrap" }} className="cell-head-font">
                Email
              </TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }} className="cell-head-font">
                Event Type
              </TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }} className="cell-head-font">
                State
              </TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }} className="cell-head-font">
                City
              </TableCell>
              <TableCell style={{ minWidth: 150, whiteSpace: "nowrap" }} className="cell-head-font">
                Venue Name
              </TableCell>
              <TableCell style={{ minWidth: 200, whiteSpace: "nowrap" }} className="cell-head-font">
                Event Description
              </TableCell>
              <TableCell style={{ minWidth: 150, whiteSpace: "nowrap" }} className="cell-head-font">
                Event Date
              </TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }} className="cell-head-font">
                Catering
              </TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }} className="cell-head-font">
                Caterer
              </TableCell>
              <TableCell style={{ minWidth: 150, whiteSpace: "nowrap" }} className="cell-head-font">
                Design and Media
              </TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }} className="cell-head-font">
                Design
              </TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }} className="cell-head-font">
                Media
              </TableCell>
              <TableCell style={{ minWidth: 150, whiteSpace: "nowrap" }} className="cell-head-font">
                Onsite Management
              </TableCell>
              <TableCell style={{ minWidth: 150, whiteSpace: "nowrap" }} className="cell-head-font">
                Advertising
              </TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }} className="cell-head-font">
                Capacity
              </TableCell>
              <TableCell style={{ minWidth: 150, whiteSpace: "nowrap" }} className="cell-head-font">
                Total Price
              </TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }} className="cell-head-font">
                Ticket Price
              </TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }} className="cell-head-font">
                Image
              </TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }} className="cell-head-font">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table-body">
            {publicOrders.map((publicOrder) => (
              <TableRow key={publicOrder.id}>
                <TableCell className="cell-field-font" style={{ textTransform: "none" }}>
                  {publicOrder.email}
                </TableCell>
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
                <TableCell className="cell-field-font">{publicOrder.onsiteManagementFacility}</TableCell>
                <TableCell className="cell-field-font">{publicOrder.advertisingFacility}</TableCell>
                <TableCell className="cell-field-font">{publicOrder.capacity}</TableCell>
                <TableCell className="cell-field-font">{publicOrder.totalPrice}</TableCell>
                <TableCell className="cell-field-font">
                  <TextField
                    value={ticketPrice[publicOrder.id] || ""}
                    onChange={(e) => handleTicketPriceChange(publicOrder.id, e.target.value)}
                    type="number"
                    InputProps={{ className: "cell-field-font" }}
                  />
                  <Button
                    onClick={() => updateTicketPrice(publicOrder.id)}
                    size="small"
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "5px", fontSize: "0.875rem" }}
                  >
                    Update
                  </Button>
                </TableCell>
                <TableCell>
                  {publicOrder.data ? (
                    <Tooltip title="Image Uploaded">
                      <CheckCircleIcon color="success" style={{ fontSize: "2rem" }} />
                    </Tooltip>
                  ) : (
                    <Tooltip title="No Image Uploaded">
                      <ImageIcon style={{ color: "red", fontSize: "2rem" }} />
                    </Tooltip>
                  )}
                </TableCell>
                <TableCell>
                  <IconButton
                    color="error"
                    style={{ fontSize: "2rem" }}
                    onClick={() => deletePublicOrder(publicOrder.id)}
                  >
                    <DeleteIcon style={{ fontSize: "2rem" }} />
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
                      <AddPhotoAlternateIcon style={{ fontSize: "2rem" }} />
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
