import React, { useEffect, useState } from "react";
import axios from "axios";
const View = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/view");
        setUserData(response.data);
        console.log(response.data)
      } catch (error) {
        console.log("Error");
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container mt-5">
      <h2 className="text-white mb-4">User Data</h2>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default View;
