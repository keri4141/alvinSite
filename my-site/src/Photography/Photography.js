import React, { Component } from "react";
import { ReactComponent as Instagram } from "../assets/instagram.svg";

import "./Photography.css";

class Photography extends Component {
  render() {
    return (
      <div className=" photography container-fluid">
      <Instagram/>
        <img src="https://res.cloudinary.com/dsjx3wqn1/image/upload/v1558379572/VaticanOG-2_uk2pke.jpg" alt="test"></img>
      </div>
    );
  }
}
export default Photography;
