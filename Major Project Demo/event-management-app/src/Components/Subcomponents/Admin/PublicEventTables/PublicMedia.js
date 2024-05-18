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
import { useParams } from "react-router-dom";

const PublicMediaTable = () => {
  const { venueId } = useParams();
  const [medias, setMedias] = useState([]);
  const [newMedia, setNewMedia] = useState({
    serviceProviderName: "",
    price: "",
  });
  const [editMedias, setEditMedias] = useState({});

  useEffect(() => {
    fetchMedias();
  }, [venueId]);

  const fetchMedias = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/privateeventcontroller/publicmedias/${venueId}`
      );
      setMedias(response.data);
      const initialEditState = {};
      response.data.forEach((media) => {
        initialEditState[media.mediaId] = { ...media };
      });
      setEditMedias(initialEditState);
    } catch (error) {
      console.error("Error fetching medias", error);
    }
  };

  const handleAddMedia = async () => {
    if (
      newMedia.serviceProviderName && newMedia.price
    ) {
      try {
        const response = await axios.post(
          `http://localhost:8080/privateeventcontroller/publicmedias/${venueId}`,
          newMedia
        );
        console.log(response.data)
        setMedias([...medias, response.data]);
        setNewMedia({
          serviceProviderName: "",
          price: "",
        });
        fetchMedias();
      } catch (error) {
        console.error("Error adding venue", error);
      }
    }
  };

  const handleEditVenue = async (mediaId) => {
    const updatedVenue = editMedias[mediaId];
    console.log(updatedVenue);
    if (updatedVenue) {
      try {
        await axios.put(
          `http://localhost:8080/privateeventcontroller/publicmedias/${mediaId}`,
          updatedVenue
        );
        fetchMedias();
      } catch (error) {
        console.error("Error editing venue", error);
      }
    }
  };
  const handleDeleteMedia = async (mediaId) => {
    await axios.delete(`http://localhost:8080/privateeventcontroller/publicmedias/${mediaId}`);
    fetchMedias();
};
  const handleInputChange = (mediaId, field, value) => {
    setEditMedias((prevEditMedias) => ({
      ...prevEditMedias,
      [mediaId]: {
        ...prevEditMedias[mediaId],
        [field]: value,
      },
    }));
  };

  const handleNewMediaChange = (field, value) => {
    setNewMedia({
      ...newMedia,
      [field]: value,
    });
  };

  return (
    <div>
      <Button onClick={() => window.history.back()}>Back to Venues</Button>
      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="cell-head-font">Service Name</TableCell>
              <TableCell className="cell-head-font">Price</TableCell>
              <TableCell className="cell-head-font">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table-body">
            {medias.map((media) => (
              <TableRow key={media.mediaId}>
                <TableCell>
                  <TextField
                    value={editMedias[media.mediaId]?.serviceProviderName ?? ""}
                    InputProps={{ className: "cell-field-font" }}
                    onChange={(e) =>
                      handleInputChange(
                        media.mediaId,
                        "serviceProviderName",
                        e.target.value
                      )
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={editMedias[media.mediaId]?.price ?? ""}
                    InputProps={{ className: "cell-field-font" }}
                    onChange={(e) =>
                      handleInputChange(media.mediaId, "price", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleEditVenue(media.mediaId)} className="button-styles">
                    Save
                  </Button>
                  <Button onClick={() => handleDeleteMedia(media.mediaId)} className="button-styles">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>
                <TextField
                  placeholder="New Media"
                  value={newMedia.serviceProviderName}
                  InputProps={{ className: "cell-field-font" }}
                  onChange={(e) =>
                    handleNewMediaChange("serviceProviderName", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  placeholder="Price"
                  value={newMedia.price}
                  InputProps={{ className: "cell-field-font" }}
                  onChange={(e) =>
                    handleNewMediaChange("price", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <Button onClick={handleAddMedia} className="button-styles">Add</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PublicMediaTable;
