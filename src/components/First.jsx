import React, { Component } from "react";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import Container from "./Container.jsx";
class First extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Container />
        <Footer />
      </>
    );
  }
}

export default First;
