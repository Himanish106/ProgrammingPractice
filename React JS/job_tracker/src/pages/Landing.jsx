import React from "react";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg"
import { Link } from "react-router-dom";
import { Logo } from "../Components";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
       <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            quas, maxime officiis atque neque nobis quisquam fugit illo error,
            beatae doloremque dolores aut consequuntur adipisci enim sequi quae,
            laudantium accusamus! Eligendi optio dolorem, quam minus quasi qui
            natus, minima iste earum modi ad porro possimus nam excepturi. Ipsa,
            atque maiores.
          </p>
          <Link to='/register' className="btn register-link">Register</Link>
          <Link to='/login' className="btn">Login/Demo User</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};
export default Landing;
