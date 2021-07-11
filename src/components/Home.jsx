import React from "react";
import Navbar from "./Navbar";
import "../styling/Home.css";
import Photo from "../assets/arrow.png";
import Hero from "../assets/hero.svg";
const Home = () => {
  return (
    <>
      <Navbar />
      <div class="con">
        <div class="container">
          <div class="row">
            <div class="col-1">
              <h2>
                HELLO, <br />
                I'm Vikas
              </h2>
              <h3>currently learning web development</h3>
              <p>( B.Tech 4th) year student )</p>
              <br />
              <button type="button">
                My Resume
                <img src={Photo} />
              </button>
            </div>

            <div class="col-2">
              <img src={Hero} class="controller" />
              <div class="color-box"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
