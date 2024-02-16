import React from "react";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Link } from "react-router-dom";
import { FormRow, Logo } from "../Components";
const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type="email" name="email" defaultValue="himanish@gmail.com" />
        <FormRow type="password" name="password" defaultValue="secret@123" />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <button type="button" className="btn btn-block">
          Explore the App
        </button>
        <p>
        Not a Member Yet?
        <Link to="/register" className="member-btn">
          Register
        </Link>
      </p>
      </form>
    </Wrapper>
  );
};

export default Login;
