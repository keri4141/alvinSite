import React, { Component } from "react";
import { ReactComponent as Instagram } from "../assets/instagram.svg";

import "./Photography.css";

class Photography extends Component {
  // componentDidMount() {
  //   fetch("https://us-central1-alvinsiteapi-c68f6.cloudfunctions.net/images")
  //     .then(function(response) {
  //       return response.json();
  //     })
  //     .then(function(myJson) {
  //       console.log(JSON.stringify(myJson));
  //     });
  // }
  render() {
    return (
      <div className=" photography container-fluid">
        <Instagram />
        <img
          src="https://res.cloudinary.com/dsjx3wqn1/image/upload/v1558379572/photography/VaticanOG-2_uk2pke.jpg"
          alt="test"
        />
      </div>
    );
  }
}
export default Photography;
