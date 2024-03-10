import React from "react";
import CEOImg from "../../Images/photo-1613742743080-a59851f3008d.avif";
const AboutUsCEO = () => {
  return (
    <section className="contact">
      <div className="row">
        <div className="image">
          <img src={CEOImg} alt="" style={{display:"block",height:"42rem"}} />
        </div>
        <div className="content">
          <h3>
            Hear From Our <span className="col">CEO!</span>
          </h3>
          <p>
            Dear Guests, Welcome to Event Vista! We're thrilled to have you join
            our community of event enthusiasts. Our mission is simple: to create
            unforgettable moments that transcend time. With our dedicated team
            and passion for perfection, we're committed to delivering
            extraordinary experiences tailored just for you. Let's make memories
            together!
            <br /> <span className="" style={{fontWeight:"500",color:"white"}}>Warm regards,</span> 
            <br />
            <span style={{fontWeight:"500", color:"white"}}>Ethan Richards</span> <br /> <span style={{fontWeight:"500",color:"white"}}>CEO , <span className="col">Event</span> Vista</span>
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutUsCEO;
