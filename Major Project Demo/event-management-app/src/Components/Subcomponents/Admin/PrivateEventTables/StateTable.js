// src/components/StateTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import "../../../../Global Files/global.css"
import "../../../CSS/StateTable.css"
const StateTable = () => {
    const [states, setStates] = useState([]);
    const [newStateName, setNewStateName] = useState('');
    const [editStateNames, setEditStateNames] = useState({}); // Track edit state for each state

    useEffect(() => {
        fetchStates();
    }, []);

    const fetchStates = async () => {
        const response = await axios.get('http://localhost:8080/globalcontroller/states');
        setStates(response.data);
        console.log(response.data)
    };

    const handleAddState = async () => {
        if (newStateName) {
            const response = await axios.post('http://localhost:8080/globalcontroller/states', { stateName: newStateName });
            setStates([...states, response.data]);
            setNewStateName('');
            fetchStates();
        }
    };

    const handleEditState = async (state) => {
        const updatedStateName = editStateNames[state.stateId] || state.stateName; // Get the updated state name
        if (updatedStateName) {
            const updatedState = { ...state, stateName: updatedStateName };
            await axios.put(`http://localhost:8080/globalcontroller/states/${state.stateId}`, updatedState);
            fetchStates();
            setEditStateNames({ ...editStateNames, [state.stateId]: '' }); // Clear edit state for this state
        }
    };

    const handleDeleteState = async (stateId) => {
        await axios.delete(`http://localhost:8080/globalcontroller/states/${stateId}`);
        fetchStates();
    };

    const handleInputChange = (stateId, value) => {
        setEditStateNames({ ...editStateNames, [stateId]: value }); // Update edit state for this state
    };

    return (
        <TableContainer component={Paper} className='table-container'>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className='cell-head-font'>States</TableCell>
                        <TableCell className='cell-head-font'>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className='table-body'>
                    {states.map((state) => (
                        <TableRow key={state.stateId}>
                            <TableCell>
                                <TextField
                                    value={editStateNames[state.stateId] || state.stateName}
                                    onChange={(e) => handleInputChange(state.stateId, e.target.value)} // Pass state id as argument
                                    InputProps={{ className: 'cell-field-font' }}
                                />
                            </TableCell>
                            <TableCell>
                                <Button onClick={() => handleEditState(state)} className="button-styles">Edit</Button>
                                <Button onClick={() => handleDeleteState(state.stateId)} className="button-styles">Delete</Button>
                                <Button component={Link} to={`/cities/${state.stateId}`} className="button-styles">View Cities</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell>
                            <TextField
                                placeholder="New State"
                                value={newStateName}
                                onChange={(e) => setNewStateName(e.target.value)}
                                InputProps={{ className: 'cell-field-font' }}
                            />
                        </TableCell>
                        <TableCell>
                            <Button onClick={handleAddState} className="button-styles">Add</Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default StateTable;
