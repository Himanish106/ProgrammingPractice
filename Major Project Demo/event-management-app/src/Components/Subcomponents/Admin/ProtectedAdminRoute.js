import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";

const ProtectedAdminRoute = ({ element }) => {
  const token = localStorage.getItem("token");
  let isAdmin = false;

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      isAdmin = decodedToken.role === "admin";
    } catch (error) {
      console.error("Token decoding failed:", error);
    }
  }

  if (!isAdmin) {
    Swal.fire({
        icon: "error",
        title: "Access Denied!",
        text: "You are not authorized to access this content.",
        confirmButtonText: "OK",
        width: '500px',
        customClass: {
            container: 'custom-swal-container',
            popup: 'custom-swal-popup',
            title: 'custom-swal-title',
            text: 'custom-swal-content',
            footer: 'custom-swal-footer',
            confirmButton: 'custom-swal-confirm-button'
          }
      });
    return <Navigate to="/login" />;
  }

  return element;
};

export default ProtectedAdminRoute;
