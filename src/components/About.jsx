import React from "react";
import Navbar from "../components/Navbar";
import about from "../assets/about.svg";
const About = () => {
  return (
    <>
      <Navbar />
      <div>
        <img src={about}></img>
        <h1>About page</h1>
      </div>
    </>
  );
};

export default About;
