import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Home from "./components/Home";
import { Route, Link } from "react-router-dom";
const App = () => {
  return (
    <switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route path="/project">
        <Project />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </switch>
  );
};

export default App;
