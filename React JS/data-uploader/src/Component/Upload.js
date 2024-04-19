import React, { useState } from "react";
import axios from "axios";
const Upload = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/upload",
        formData
      );
      console.log("Response:", response.data);
      alert("Upload Successful");
    } catch (error) {
      console.log("Error");
      alert("Error Uploading user data");
    }
  };
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "100vh", backgroundColor: "black" }}
    >
      <form
        className="col-md-6 text-white d-flex justify-content-center align-items-center"
        onSubmit={handleSubmit}
      >
        <div className="col-md-6 text-white">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword5" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="inputPassword5"
              name="password"
              value={formData.password}
              className="form-control"
              aria-describedby="passwordHelpBlock"
              onChange={handleChange}
            />
            <div id="passwordHelpBlock" className="form-text text-white">
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </div>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Upload;
