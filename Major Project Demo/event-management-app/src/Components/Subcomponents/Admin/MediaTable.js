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

const MediaTable = () => {
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
        `http://localhost:8080/globalcontroller/medias/${venueId}`
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
          `http://localhost:8080/globalcontroller/medias/${venueId}`,
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
          `http://localhost:8080/globalcontroller/medias/${mediaId}`,
          updatedVenue
        );
        fetchMedias();
      } catch (error) {
        console.error("Error editing venue", error);
      }
    }
  };
  const handleDeleteMedia = async (mediaId) => {
    await axios.delete(`http://localhost:8080/globalcontroller/medias/${mediaId}`);
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
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Service Name</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {medias.map((media) => (
              <TableRow key={media.mediaId}>
                <TableCell>
                  <TextField
                    value={editMedias[media.mediaId]?.serviceProviderName ?? ""}
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
                    onChange={(e) =>
                      handleInputChange(media.mediaId, "price", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleEditVenue(media.mediaId)}>
                    Save
                  </Button>
                  <Button onClick={() => handleDeleteMedia(media.mediaId)}>
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
                  onChange={(e) =>
                    handleNewMediaChange("serviceProviderName", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  placeholder="Price"
                  value={newMedia.price}
                  onChange={(e) =>
                    handleNewMediaChange("price", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <Button onClick={handleAddMedia}>Add</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MediaTable;
