import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AuthGuard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Token found, redirect to home page
      navigate("/");
      // Show alert using SweetAlert
      Swal.fire({
        icon: "warning",
        title: "You're already logged in!",
        text: "You need to logout to access the login page.",
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

export default AuthGuard;