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

const DesignTable = () => {
  const { venueId } = useParams();
  const [designers, setDesigners] = useState([]);
  const [newDesigners, setNewDesigners] = useState({
    serviceProviderName: "",
    price: "",
  });
  const [editDesigners, setEditDesigners] = useState({});

  useEffect(() => {
    fetchDesigners();
  }, [venueId]);

  const fetchDesigners = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/globalcontroller/designs/${venueId}`
      );
      setDesigners(response.data);
      const initialEditState = {};
      response.data.forEach((designer) => {
        initialEditState[designer.designId] = { ...designer };
      });
      setEditDesigners(initialEditState);
    } catch (error) {
      console.error("Error fetching designers", error);
    }
  };

  const handleAddDesigner = async () => {
    if (newDesigners.serviceProviderName && newDesigners.price) {
      try {
        const response = await axios.post(
          `http://localhost:8080/globalcontroller/designs/${venueId}`,
          newDesigners
        );
        console.log(response.data);
        setDesigners([...designers, response.data]);
        setNewDesigners({
          serviceProviderName: "",
          price: "",
        });
        fetchDesigners();
      } catch (error) {
        console.error("Error adding designs", error);
      }
    }
  };

  const handleEditDesigner = async (designId) => {
    const updateddesigner = editDesigners[designId];
    console.log(updateddesigner);
    if (updateddesigner) {
      try {
        await axios.put(
          `http://localhost:8080/globalcontroller/designs/${designId}`,
          updateddesigner
        );
        fetchDesigners();
      } catch (error) {
        console.error("Error editing designs", error);
      }
    }
  };

  const handleDeleteDesign = async (designId) => {
    await axios.delete(
      `http://localhost:8080/globalcontroller/designs/${designId}`
    );
    fetchDesigners();
  };

  const handleInputChange = (designId, field, value) => {
    setEditDesigners((preveditDesigners) => ({
      ...preveditDesigners,
      [designId]: {
        ...preveditDesigners[designId],
        [field]: value,
      },
    }));
  };

  const handlenewDesignersChange = (field, value) => {
    setNewDesigners({
      ...newDesigners,
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
            {designers.map((designer) => (
              <TableRow key={designer.designId}>
                <TableCell>
                  <TextField
                    value={
                      editDesigners[designer.designId]?.serviceProviderName ??
                      ""
                    }
                    onChange={(e) =>
                      handleInputChange(
                        designer.designId,
                        "serviceProviderName",
                        e.target.value
                      )
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={editDesigners[designer.designId]?.price ?? ""}
                    onChange={(e) =>
                      handleInputChange(
                        designer.designId,
                        "price",
                        e.target.value
                      )
                    }
                  />
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleEditDesigner(designer.designId)}>
                    Save
                  </Button>
                  <Button onClick={() => handleDeleteDesign(designer.designId)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>
                <TextField
                  placeholder="New designer"
                  value={newDesigners.serviceProviderName}
                  onChange={(e) =>
                    handlenewDesignersChange(
                      "serviceProviderName",
                      e.target.value
                    )
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  placeholder="Price"
                  value={newDesigners.price}
                  onChange={(e) =>
                    handlenewDesignersChange("price", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <Button onClick={handleAddDesigner}>Add</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DesignTable;
