import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";

const GuardFeedback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Decode the JWT token to extract role
      const decodedToken = jwtDecode(token);
      const role = decodedToken.role;
      // Check if the role is "user"
      if (role === "USER") {
        // Role is user, allow access
        return;
      } else {
        // Role is not user, deny access
        navigate("/");
        // Show alert using SweetAlert
        Swal.fire({
          icon: "error",
          title: "Access Denied!",
          text: "You need to log in as a user to access this page.",
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
      }
    } else {
      // Token not found, redirect to login page
      navigate("/login");
      // Show alert using SweetAlert
      Swal.fire({
        icon: "error",
        title: "Access Denied!",
        text: "You need to log in to access this page.",
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
    }
  }, [navigate]);

  return null; // Render nothing
};

export default GuardFeedback;
