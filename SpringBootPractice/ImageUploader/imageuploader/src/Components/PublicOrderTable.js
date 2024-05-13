import React, { useState, useEffect } from "react";
import axios from "axios";

const PublicOrderTable = () => {
  const [publicOrders, setPublicOrders] = useState([]);

  // Function to fetch public orders from the backend
  const fetchPublicOrders = async () => {
    try {
      const response = await axios.get("http://localhost:8080/privateeventcontroller/allorder");
      setPublicOrders(response.data);
    } catch (error) {
      console.error("Error fetching public orders:", error);
    }
  };

  // Function to delete a public order by ID
  const deletePublicOrder = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/privateeventcontroller/deleteorder/${id}`);
      // After deletion, fetch updated public orders
      fetchPublicOrders();
    } catch (error) {
      console.error("Error deleting public order:", error);
    }
  };

  useEffect(() => {
    // Fetch public orders when the component mounts
    fetchPublicOrders();
  }, []);

  return (
    <div>
      <h2>Public Orders</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Event Type</th>
            <th>State</th>
            <th>City</th>
            <th>Venue Name</th>
            <th>Event Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {publicOrders.map((publicOrder) => (
            <tr key={publicOrder.id}>
              <td>{publicOrder.id}</td>
              <td>{publicOrder.eventType}</td>
              <td>{publicOrder.state}</td>
              <td>{publicOrder.city}</td>
              <td>{publicOrder.venueName}</td>
              <td>{publicOrder.eventDate}</td>
              <td>
                <button onClick={() => deletePublicOrder(publicOrder.id)}>Delete</button>
                {/* Add image option */}
                <input
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    const formData = new FormData();
                    formData.append("file", file);
                    axios.post(`http://localhost:8080/privateeventcontroller/${publicOrder.id}/image`, formData, {
                      headers: {
                        "Content-Type": "multipart/form-data",
                      },
                    })
                    .then(() => {
                      // After adding image, fetch updated public orders
                      fetchPublicOrders();
                    })
                    .catch((error) => {
                      console.error("Error adding image:", error);
                    });
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PublicOrderTable;
