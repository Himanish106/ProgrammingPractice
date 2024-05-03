import React from "react";
import AuthGuard from "../LoginForm/AuthGuard";
import Register from "./Register";

const ProtectedRegister = () => {
  return (
    <>
      <AuthGuard />
      <Register />
    </>
  );
};
export default ProtectedRegister;
