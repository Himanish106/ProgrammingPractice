import React from "react";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Link } from "react-router-dom";
import { FormRow, Logo } from "../Components";
const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="Name" labelText="First Name" defaultValue="Himanish" />
        <FormRow type="text" name="Last Name" defaultValue="Das" />
        <FormRow type="email" name="Email" defaultValue="himanish@gmail.com" />
        <FormRow type="password" name="Password" defaultValue="secret@123" />
        <button type="submit" className="btn btn-block">
        Submit
      </button>
      <p>
        Already a Member?
        <Link to="/login" className="member-btn">
          Login
        </Link>
      </p>
      </form>
      
    </Wrapper>
  );
};

export default Register;
