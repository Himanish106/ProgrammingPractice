// src/components/eventTable.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";

const PublicEventTypes = () => {
  const [events, setEvents] = useState([]);
  const [newEventName, setNewEventName] = useState("");
  const [editEventNames, setEditEventNames] = useState({}); // Track edit state for each state

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const response = await axios.get(
      "http://localhost:8080/privateeventcontroller/publiceventdisplay"
    );
    setEvents(response.data);
    console.log(response.data);
  };

  const handleAddEvents = async () => {
    if (newEventName) {
      const response = await axios.post(
        "http://localhost:8080/privateeventcontroller/publiceventadd",
        { eventType: newEventName }
      );
      setEvents([...events, response.data]);
      setNewEventName("");
      fetchEvents();
    }
  };

  const handleEditEvents = async (event) => {
    const updatedEventName = editEventNames[event.eventId] || event.eventType;
    if (updatedEventName) {
      const updatedEvent = { ...event, eventType: updatedEventName };
      console.log(updatedEvent)
      const response =  await axios.put(
        `http://localhost:8080/privateeventcontroller/publicevents/${event.eventId}`,
        updatedEvent
      );
      console.log(response.data)
      fetchEvents();
      setEditEventNames({ ...editEventNames, [event.eventId]: "" });
    }
  };

  const handleDeleteEvents = async (eventId) => {
    await axios.delete(
      `http://localhost:8080/privateeventcontroller/publicevents/${eventId}`
    );
    fetchEvents();
  };

  const handleInputChange = (eventId, value) => {
    setEditEventNames({ ...editEventNames, [eventId]: value });
  };

  return (
    <TableContainer component={Paper} className="table-container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="cell-head-font">Event Name</TableCell>
            <TableCell className="cell-head-font">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="table-body">
          {events.map((event) => (
            <TableRow key={event.eventId}>
              <TableCell>
                <TextField
                  value={editEventNames[event.eventId] || event.eventType}
                  InputProps={{ className: "cell-field-font" }}
                  onChange={(e) =>
                    handleInputChange(event.eventId, e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <Button onClick={() => handleEditEvents(event)} className="button-styles">Edit</Button>
                <Button onClick={() => handleDeleteEvents(event.eventId)} className="button-styles">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell>
              <TextField
                placeholder="New event"
                value={newEventName}
                InputProps={{ className: "cell-field-font" }}
                onChange={(e) => setNewEventName(e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Button onClick={handleAddEvents} className="button-styles">Add</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PublicEventTypes;
