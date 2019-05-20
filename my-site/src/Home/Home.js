import React, { Component } from "react";
import Particle from "../Particle/particle";
import { Link } from "react-router-dom";
import { ReactComponent as Name } from "../assets/name.svg";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="name">
          <Name />
        </div>
        <div className="link">
          <Link to="software">Software</Link>
          <Link to="photography">Photography</Link>
        </div>

        <Particle />
      </div>
    );
  }
}
export default Home;
