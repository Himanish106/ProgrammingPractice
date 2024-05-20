import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AuthGuard = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      const userRole = decodedToken.role;
      setRole(userRole);
    }
    if (token && role === "ADMIN") {
      navigate("/adminpanel");
      Swal.fire({
        icon: "warning",
        title: "You're already logged in!",
        text: "You need to logout to access this page.",
        confirmButtonText: "OK",
        width: "500px",
        customClass: {
          container: "custom-swal-container",
          popup: "custom-swal-popup",
          title: "custom-swal-title",
          text: "custom-swal-content",
          footer: "custom-swal-footer",
          confirmButton: "custom-swal-confirm-button",
        },
      });
    } else if (token && role == "USER") {
      navigate("/");
      Swal.fire({
        icon: "warning",
        title: "You're already logged in!",
        text: "You need to logout to access this page.",
        confirmButtonText: "OK",
        width: "500px",
        customClass: {
          container: "custom-swal-container",
          popup: "custom-swal-popup",
          title: "custom-swal-title",
          text: "custom-swal-content",
          footer: "custom-swal-footer",
          confirmButton: "custom-swal-confirm-button",
        },
      });
    }
  }, [role, navigate]);

  return null;
};

export default AuthGuard;
