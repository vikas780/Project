import React from "react";
import Navbar from "./Navbar";
import "../styling/contact.css";
import Hero from "../assets/ccc.svg";
import ll from "../assets/linkedin.png";
import ln from "../assets/instagram.png";
import git from "../assets/github.png";
import fb from "../assets/facebook.png";
import mail from "../assets/gmail.png";
const Contact = () => {
  return (
    <>
      <Navbar />
      <div class="con">
        <div class="container">
          <div class="row">
            <div class="col-2">
              <img src={Hero} class="controller" />
            </div>

            <div class="col-1">
              <h2>Contact Me</h2>
              <h4>
                I am available on almost every social media. You can message me,
                I will reply within 24 hours. I can help you with React, C++,
                MERN stack and Opensource Development.
              </h4>

              <br />
              <div className="contact-heading-img-div">
                <div className="column">
                  <a
                    href="https://www.linkedin.com/in/vikas-dhiman-034018191/"
                    target="_blank"
                  >
                    <img src={ll} className="insta"></img>
                  </a>
                </div>
                <div className="column">
                  <a href="https://github.com/vikas780" target="_blank">
                    <img src={git} className="insta"></img>
                  </a>
                </div>
                <div className="column">
                  <a
                    href="https://www.instagram.com/mr._vikas._07/"
                    target="_blank"
                  >
                    <img src={ln} className="insta"></img>
                  </a>
                </div>
                <div className="column">
                  <a href="mailto:vikas1000dhiman@gmail.com" target="_blank">
                    <img src={mail} className="insta"></img>
                  </a>
                </div>
                <div className="column">
                  <a
                    href="https://www.facebook.com/profile.php?id=100014647546166"
                    target="_blank"
                  >
                    <img src={fb} className="insta"></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
