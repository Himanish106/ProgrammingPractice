import React, { useState, useEffect } from "react";
import axios from "axios";

const PublicOrderList = () => {
  const [publicOrders, setPublicOrders] = useState([]);

  // Function to fetch all public orders from the backend
  const fetchPublicOrders = async () => {
    try {
      const response = await axios.get("http://localhost:8080/privateeventcontroller/allorder");
      setPublicOrders(response.data);
    } catch (error) {
      console.error("Error fetching public orders:", error);
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
            <th>Name</th>
            <th>Image</th>
            {/* Add other fields here */}
          </tr>
        </thead>
        <tbody>
          {publicOrders.map((publicOrder) => (
            <tr key={publicOrder.id}>
              <td>{publicOrder.id}</td>
              <td>{publicOrder.caterer}</td>
              {/* Display image */}
              <td><img src={`data:image/jpeg;base64,${publicOrder.data}`} alt="Image" style={{ maxWidth: "100px" }} /></td>
              {/* Add other fields here */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PublicOrderList;
