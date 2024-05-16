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
import { Link, useParams } from "react-router-dom";

const VenueTable = () => {
  const { cityId } = useParams();
  const [venues, setVenues] = useState([]);
  const [newVenue, setNewVenue] = useState({
    venueName: "",
    capacity: "",
    location: "",
    price: "",
    contact: "",
  });
  const [editVenues, setEditVenues] = useState({});

  useEffect(() => {
    fetchVenues();
  }, [cityId]);

  const fetchVenues = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/globalcontroller/venues/${cityId}`
      );
      setVenues(response.data);
      // Initialize edit state for each venue
      const initialEditState = {};
      response.data.forEach((venue) => {
        initialEditState[venue.venueId] = { ...venue };
      });
      setEditVenues(initialEditState);
    } catch (error) {
      console.error("Error fetching venues", error);
    }
  };

  const handleAddVenue = async () => {
    if (
      newVenue.venueName &&
      newVenue.capacity &&
      newVenue.location &&
      newVenue.price &&
      newVenue.contact
    ) {
      try {
        const response = await axios.post(
          `http://localhost:8080/globalcontroller/venues/${cityId}`,
          newVenue
        );
        setVenues([...venues, response.data]);
        setNewVenue({
          venueName: "",
          capacity: "",
          location: "",
          price: "",
          contact: "",
        });
        fetchVenues();
      } catch (error) {
        console.error("Error adding venue", error);
      }
    }
  };

  const handleEditVenue = async (venueId) => {
    const updatedVenue = editVenues[venueId];
    console.log(updatedVenue);
    if (updatedVenue) {
      try {
        await axios.put(
          `http://localhost:8080/globalcontroller/venues/${venueId}`,
          updatedVenue
        );
        fetchVenues();
      } catch (error) {
        console.error("Error editing venue", error);
      }
    }
  };

  const handleDeleteVenue = async (venueId) => {
    await axios.delete(`http://localhost:8080/globalcontroller/venues/${venueId}`);
    fetchVenues();
};

  const handleInputChange = (venueId, field, value) => {
    setEditVenues((prevEditVenues) => ({
      ...prevEditVenues,
      [venueId]: {
        ...prevEditVenues[venueId],
        [field]: value,
      },
    }));
  };

  const handleNewVenueChange = (field, value) => {
    setNewVenue({
      ...newVenue,
      [field]: value,
    });
  };

  return (
    <div>
      <Button onClick={() => window.history.back()}>Back to Cities</Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Venue Name</TableCell>
              <TableCell>Capacity</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {venues.map((venue) => (
              <TableRow key={venue.venueId}>
                <TableCell>
                  <TextField
                    value={editVenues[venue.venueId]?.venueName ?? ""}
                    onChange={(e) =>
                      handleInputChange(
                        venue.venueId,
                        "venueName",
                        e.target.value
                      )
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={editVenues[venue.venueId]?.capacity ?? ""}
                    onChange={(e) =>
                      handleInputChange(
                        venue.venueId,
                        "capacity",
                        e.target.value
                      )
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={editVenues[venue.venueId]?.location ?? ""}
                    onChange={(e) =>
                      handleInputChange(
                        venue.venueId,
                        "location",
                        e.target.value
                      )
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={editVenues[venue.venueId]?.price ?? ""}
                    onChange={(e) =>
                      handleInputChange(venue.venueId, "price", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={editVenues[venue.venueId]?.contact ?? ""}
                    onChange={(e) =>
                      handleInputChange(
                        venue.venueId,
                        "contact",
                        e.target.value
                      )
                    }
                  />
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleEditVenue(venue.venueId)}>
                    Save
                  </Button>
                </TableCell>
                <TableCell>
                  <Button component={Link} to={`/medias/${venue.venueId}`}>
                    View Medias
                  </Button>
                </TableCell>
                <TableCell>
                  <Button component={Link} to={`/caterers/${venue.venueId}`}>
                    View Caterer
                  </Button>
                </TableCell>
                <TableCell>
                  <Button component={Link} to={`/designers/${venue.venueId}`}>
                    View Designers
                  </Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleDeleteVenue(venue.venueId)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>
                <TextField
                  placeholder="New Venue"
                  value={newVenue.venueName}
                  onChange={(e) =>
                    handleNewVenueChange("venueName", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  placeholder="Capacity"
                  value={newVenue.capacity}
                  onChange={(e) =>
                    handleNewVenueChange("capacity", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  placeholder="Location"
                  value={newVenue.location}
                  onChange={(e) =>
                    handleNewVenueChange("location", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  placeholder="Price"
                  value={newVenue.price}
                  onChange={(e) =>
                    handleNewVenueChange("price", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  placeholder="Contact"
                  value={newVenue.contact}
                  onChange={(e) =>
                    handleNewVenueChange("contact", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <Button onClick={handleAddVenue}>Add</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default VenueTable;
