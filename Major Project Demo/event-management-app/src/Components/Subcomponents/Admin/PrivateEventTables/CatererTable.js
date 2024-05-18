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

const CatererTable = () => {
  const { venueId } = useParams();
  const [caterers, setCaterers] = useState([]);
  const [newCaterer, setNewCaterers] = useState({
   serviceName: "",
    price: "",
  });
  const [editCaterers, setEditCaterers] = useState({});

  useEffect(() => {
    fetchCaterers();
  }, [venueId]);

  const fetchCaterers = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/globalcontroller/caterers/${venueId}`
      );
      setCaterers(response.data);
      const initialEditState = {};
      response.data.forEach((caterer) => {
        initialEditState[caterer.catererId] = { ...caterer };
      });
      setEditCaterers(initialEditState);
    } catch (error) {
      console.error("Error fetching caterers", error);
    }
  };

  const handleAddCaterer = async () => {
    if (
      newCaterer.serviceName && newCaterer.price
    ) {
      try {
        const response = await axios.post(
          `http://localhost:8080/globalcontroller/caterers/${venueId}`,
          newCaterer
        );
        console.log(response.data)
        setCaterers([...caterers, response.data]);
        setNewCaterers({
         serviceName: "",
          price: "",
        });
        fetchCaterers();
      } catch (error) {
        console.error("Error adding venue", error);
      }
    }
  };

  const handleEditCaterer = async (catererId) => {
    const updatedCaterer = editCaterers[catererId];
    console.log(updatedCaterer);
    if (updatedCaterer) {
      try {
        await axios.put(
          `http://localhost:8080/globalcontroller/caterers/${catererId}`,
          updatedCaterer
        );
        fetchCaterers();
      } catch (error) {
        console.error("Error editing caterer", error);
      }
    }
  };

  const handleDeleteCaterer = async (catererId) => {
    await axios.delete(`http://localhost:8080/globalcontroller/caterers/${catererId}`);
    fetchCaterers();
};

  const handleInputChange = (catererId, field, value) => {
    setEditCaterers((preveditCaterers) => ({
      ...preveditCaterers,
      [catererId]: {
        ...preveditCaterers[catererId],
        [field]: value,
      },
    }));
  };

  const handleNewCatererChange = (field, value) => {
    setNewCaterers({
      ...newCaterer,
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
            {caterers.map((caterer) => (
              <TableRow key={caterer.catererId}>
                <TableCell>
                  <TextField
                    value={editCaterers[caterer.catererId]?.serviceName ?? ""}
                    InputProps={{ className: "cell-field-font" }}
                    onChange={(e) =>
                      handleInputChange(
                        caterer.catererId,
                        "serviceName",
                        e.target.value
                      )
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={editCaterers[caterer.catererId]?.price ?? ""}
                    InputProps={{ className: "cell-field-font" }}
                    onChange={(e) =>
                      handleInputChange(caterer.catererId, "price", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleEditCaterer(caterer.catererId)} className="button-styles">
                    Save
                  </Button>
                  <Button onClick={() => handleDeleteCaterer(caterer.catererId)} className="button-styles">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>
                <TextField
                  placeholder="New Caterer"
                  value={newCaterer.serviceName}
                  InputProps={{ className: "cell-field-font" }}
                  onChange={(e) =>
                    handleNewCatererChange("serviceName", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  placeholder="Price"
                  value={newCaterer.price}
                  InputProps={{ className: "cell-field-font" }}
                  onChange={(e) =>
                    handleNewCatererChange("price", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <Button onClick={handleAddCaterer} className="button-styles">Add</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CatererTable;
