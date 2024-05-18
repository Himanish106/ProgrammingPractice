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
import "../../../../Global Files/global.css"
import "../../../CSS/StateTable.css"
const PublicVenueTable = () => {
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
        `http://localhost:8080/privateeventcontroller/publicvenues/${cityId}`
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
          `http://localhost:8080/privateeventcontroller/publicvenues/${cityId}`,
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
          `http://localhost:8080/privateeventcontroller/publicvenues/${venueId}`,
          updatedVenue
        );
        fetchVenues();
      } catch (error) {
        console.error("Error editing venue", error);
      }
    }
  };

  const handleDeleteVenue = async (venueId) => {
    await axios.delete(`http://localhost:8080/privateeventcontroller/publicvenues/${venueId}`);
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
      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow sx={{ width: "1200px" }}>
              <TableCell className="cell-head-font">Venue</TableCell>
              <TableCell className="cell-head-font">Capacity</TableCell>
              <TableCell className="cell-head-font">Location</TableCell>
              <TableCell className="cell-head-font">Price</TableCell>
              <TableCell className="cell-head-font">Contact</TableCell>
              <TableCell className="cell-head-font">Save</TableCell>
              <TableCell className="cell-head-font">Medias</TableCell>
              <TableCell className="cell-head-font">Caterers</TableCell>
              <TableCell className="cell-head-font">Designs</TableCell>
              <TableCell className="cell-head-font">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table-body">
            {venues.map((venue) => (
              <TableRow key={venue.venueId}>
                <TableCell style={{ minWidth: "300px", maxWidth: "600px" }}>
                  <TextField
                    value={editVenues[venue.venueId]?.venueName ?? ""}
                    InputProps={{ className: "cell-field-font" }}
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
                    InputProps={{ className: "cell-field-font" }}
                    onChange={(e) =>
                      handleInputChange(
                        venue.venueId,
                        "capacity",
                        e.target.value
                      )
                    }
                  />
                </TableCell>
                <TableCell style={{ minWidth: "300px", maxWidth: "600px" }}>
                  <TextField
                    value={editVenues[venue.venueId]?.location ?? ""}
                    InputProps={{ className: "cell-field-font" }}
                    onChange={(e) =>
                      handleInputChange(
                        venue.venueId,
                        "location",
                        e.target.value
                      )
                    }
                  />
                </TableCell>
                <TableCell style={{ minWidth: "200px", maxWidth: "400px" }}>
                  <TextField
                    value={editVenues[venue.venueId]?.price ?? ""}
                    InputProps={{ className: "cell-field-font" }}
                    onChange={(e) =>
                      handleInputChange(venue.venueId, "price", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell style={{ minWidth: "250px", maxWidth: "400px" }}>
                  <TextField
                    value={editVenues[venue.venueId]?.contact ?? ""}
                    InputProps={{ className: "cell-field-font" }}
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
                  <Button onClick={() => handleEditVenue(venue.venueId)} className="button-styles">
                    Save
                  </Button>
                </TableCell>
                <TableCell>
                  <Button component={Link} to={`/publicmedias/${venue.venueId}`} className="button-styles">
                    View Medias
                  </Button>
                </TableCell>
                <TableCell>
                  <Button component={Link} to={`/publiccaterers/${venue.venueId}`} className="button-styles">
                    View Caterer
                  </Button>
                </TableCell>
                <TableCell style={{ minWidth: "150px", maxWidth: "210px" }}>
                  <Button component={Link} to={`/publicdesigners/${venue.venueId}`} className="button-styles">
                    View Designers
                  </Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleDeleteVenue(venue.venueId)} className="button-styles">
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
                  InputProps={{ className: "cell-field-font" }}
                  onChange={(e) =>
                    handleNewVenueChange("venueName", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  placeholder="Capacity"
                  value={newVenue.capacity}
                  InputProps={{ className: "cell-field-font" }}
                  onChange={(e) =>
                    handleNewVenueChange("capacity", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  placeholder="Location"
                  value={newVenue.location}
                  InputProps={{ className: "cell-field-font" }}
                  onChange={(e) =>
                    handleNewVenueChange("location", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  placeholder="Price"
                  value={newVenue.price}
                  InputProps={{ className: "cell-field-font" }}
                  onChange={(e) =>
                    handleNewVenueChange("price", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  placeholder="Contact"
                  value={newVenue.contact}
                  InputProps={{ className: "cell-field-font" }}
                  onChange={(e) =>
                    handleNewVenueChange("contact", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <Button onClick={handleAddVenue} className="button-styles">Add</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PublicVenueTable;
