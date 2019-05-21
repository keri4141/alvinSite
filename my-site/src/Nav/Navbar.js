import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navbar.css";
function OnSoftware() {
  return (
    <div className="nav">
      <div className="nav-item">
        <Link to="/">Home</Link>
        <Link to="films">Films</Link>
        <Link to="photography">Photos</Link>
      </div>
    </div>
  );
}
function OnPhotography() {
  return (
    <div className="nav">
      <div className="nav-item">
        <Link to="/">Home</Link>
        <Link to="films">Films</Link>
        <Link to="software">Software</Link>
      </div>
    </div>
  );
}
function OnFilms() {
  return (
    <div className="nav">
      <div className="nav-item">
        <Link to="/">Home</Link>
        <Link to="photography">Photos</Link>
        <Link to="software">Software</Link>
      </div>
    </div>
  );
}
function OnHome() {
  return <></>;
}
function NavList(pathname) {
  let NavList;
  console.log(pathname.location);
  switch (pathname.location) {
    case "/software":
      NavList = OnSoftware;

      break;
    case "/photography":
      NavList = OnPhotography;
      break;
    case "/films":
      NavList = OnFilms;
      break;
    default:
      NavList = OnHome;
  }

  return <NavList />;
}
class Navbar extends Component {
  openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };
  render() {
    const { location } = this.props;
    console.log(location.pathname);
    return <NavList location={location.pathname} />;
  }
}
export default withRouter(Navbar);
