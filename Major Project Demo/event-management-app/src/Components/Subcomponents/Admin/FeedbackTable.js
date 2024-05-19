import React, { useState, useEffect } from "react";
import axios from "axios";
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
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "../../../Global Files/global.css"
import "../../CSS/StateTable.css"
const FeedbackTable = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  // Function to fetch feedbacks from the backend
  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/user/userfeedback"
      );
      setFeedbacks(response.data);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    }
  };
  const deleteFeedbacks = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/user/deletefeedback/${id}`);
      // After deletion, fetch updated public orders
      fetchFeedbacks();;
    } catch (error) {
      console.error("Error deleting public order:", error);
    }
  };
  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        feedbacks
      </Typography>
      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}  className="cell-head-font">Email</TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}  className="cell-head-font">Feedback</TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}  className="cell-head-font">Name</TableCell>
              <TableCell style={{ minWidth: 100, whiteSpace: "nowrap" }}  className="cell-head-font">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table-body">
            {feedbacks.map((feedback) => (
              <TableRow key={feedback.id}>
                <TableCell style={{ textTransform: "none" }} className="cell-field-font">
                  {feedback.email}
                </TableCell>
                <TableCell className="cell-field-font">{feedback.feedback}</TableCell>
                <TableCell className="cell-field-font">{feedback.name}</TableCell>
                <TableCell>
                  <IconButton
                   color="error"
                    onClick={() => deleteFeedbacks(feedback.id)}          
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

export default FeedbackTable;
