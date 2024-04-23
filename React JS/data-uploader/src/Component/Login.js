import React, { useState } from "react";

const fetchData = async () => {
  const token = localStorage.getItem("token");

  try {
    const response = await fetch("http://localhost:8080/api/view", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      // Handle the data
      console.log(data);
    } else {
      // Handle the error
      if (response.status === 401) {
        alert("Unauthorized: Please login again.");
        localStorage.removeItem("token"); // Remove invalid token
      } else {
        console.log(data.message || "Error fetching data");
      }
    }
  } catch (error) {
    console.error("There was a problem fetching the data", error);
  }
};

const Login = () => {
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
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.jwt);
        alert("Login successful!");
        fetchData(); // Fetch data after successful login
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("There was a problem with the login request", error);
      alert("An error occurred while logging in");
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
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              name="email"
              value={formData.email}
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
              className="form-control"
              aria-describedby="passwordHelpBlock"
              name="password"
              value={formData.password}
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
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
