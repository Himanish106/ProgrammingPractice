import React from "react";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";
import { Link, useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  if(error.status === 404){
    return(
      <Wrapper>
        <div>
          <img src={img} alt="Not Found" />
          <h3>Ohh! Page Not Found</h3>
          <p>We can't seem to find the page you are looking for</p>
          <Link to='/dashboard'>Back Home</Link>
        </div>
      </Wrapper>
    )
    };
  return (
    <div>
      <h1>Error Page</h1>
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default Error;
