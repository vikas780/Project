import React, { useState } from "react";
import reactDom from "react-dom";
import { Link } from "react-router-dom";
import ll from "../assets/linkedin.png";
import ln from "../assets/instagram.png";
import git from "../assets/github.png";
import { GiHamburgerMenu } from "react-icons/gi";
import "../styling/navbar.css";
const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>[V</span>ikas]
          </h2>
        </div>
        <div className={showMenu ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li>
              <a>
                <Link to="/">Home</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/about">About</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/Project">Project</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/contact">Contact</Link>
              </a>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.linkedin.com/in/vikas-dhiman-034018191/"
                target="_blank"
              >
                <img src={ll} className="linkedin"></img>
              </a>
            </li>
            <li>
              <a href="https://github.com/vikas780" target="_blank">
                <img src={git} className="github"></img>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/mr._vikas._07/"
                target="_blank"
              >
                <img src={ln} className="instagram"></img>
              </a>
            </li>
          </ul>

          <div className="hamburger-menu">
            <a href="#" onClick={() => setshowMenu(!showMenu)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
