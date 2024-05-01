import React from "react";
import AuthGuard from "./AuthGuard";
import Loginform from "./LoginForm";

const ProtectedLogin = () => {
  return (

    <>
    <AuthGuard />
    <Loginform />
    </>
      
  );
};

export default ProtectedLogin;
