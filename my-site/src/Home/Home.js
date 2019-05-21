import React, { Component } from "react";
import Particle from "../Particle/particle";
import { Link } from "react-router-dom";
import { ReactComponent as Name } from "../assets/GoogleFontAlvin.svg";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className=" home container-fluid">
        <div className="row">
          <div className="col">
            <div className="name">
              <Name />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="link col text-center">
            <Link className="link-item" to="software">
              Software
            </Link>
            <Link className="link-item" to="photography">
              Photos
            </Link>
            <Link className="link-item" to="films">
              Films
            </Link>
          </div>
        </div>

        <Particle />
      </div>
    );
  }
}
export default Home;
