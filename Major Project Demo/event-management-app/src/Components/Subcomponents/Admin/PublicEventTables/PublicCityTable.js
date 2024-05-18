// src/components/PublicCityTable.js
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

const PublicCityTable = () => {
  const { stateId } = useParams();
  const [cities, setCities] = useState([]);
  const [newCityName, setNewCityName] = useState("");
  const [editCityNames, setEditCityNames] = useState({});

  useEffect(() => {
    fetchCities();
  }, [stateId]);

  const fetchCities = async () => {
    const response = await axios.get(
      `http://localhost:8080/privateeventcontroller/publiccities/${stateId}`
    );
    setCities(response.data);
  };

  const handleAddCity = async () => {
    if (newCityName) {
      const response = await axios.post(
        `http://localhost:8080/privateeventcontroller/publiccities/${stateId}`,
        { cityName: newCityName }
      );
      setCities([...cities, response.data]);
      setNewCityName("");
    }
  };

  const handleEditCity = async (city) => {
    const updatedCityName = editCityNames[city.cityId] || city.cityName;
    if (updatedCityName) {
      const updatedCity = { ...city, cityName: updatedCityName };
      await axios.put(
        `http://localhost:8080/privateeventcontroller/publiccities/${city.cityId}`,
        updatedCity
      );
      fetchCities();
      setEditCityNames({ ...editCityNames, [city.cityId]: "" });
    }
  };
  const handleDeleteCity = async (cityId) => {
    await axios.delete(`http://localhost:8080/privateeventcontroller/publiccities/${cityId}`);
    fetchCities();
};
  const handleInputChange = (cityId, value) => {
    setEditCityNames({ ...editCityNames, [cityId]: value });
  };

  return (
    <div>
      <Button onClick={() => window.history.back()}>Back to States</Button>
      <TableContainer component={Paper} className='table-container'>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className='cell-head-font'>City Name</TableCell>
              <TableCell className='cell-head-font'>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className='table-body'>
            {cities.map((city) => (
              <TableRow key={city.cityId}>
                <TableCell>
                  <TextField
                    value={editCityNames[city.cityId] || city.cityName}
                    onChange={(e) => handleInputChange(city.cityId, e.target.value)}
                    InputProps={{ className: 'cell-field-font' }}
                  />
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleEditCity(city)} className="button-styles">Edit</Button>
                  <Button onClick={() => handleDeleteCity(city.cityId)} className="button-styles">Delete</Button>
                  <Button component={Link} to={`/publicvenues/${city.cityId}`} className="button-styles">
                    View Venues
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>
                <TextField
                  placeholder="New City"
                  value={newCityName}
                  onChange={(e) => setNewCityName(e.target.value)}
                  InputProps={{ className: 'cell-field-font' }}
                />
              </TableCell>
              <TableCell>
                <Button onClick={handleAddCity} className="button-styles">Add</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PublicCityTable;
