import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";

const GuardPrivateEventBooking = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      const role = decodedToken.role;
      if (role === "USER") {
        return;
      } else {
        navigate("/");
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
      navigate("/login");
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

  return null; 
};

export default GuardPrivateEventBooking;
