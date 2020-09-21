import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Container from "./Container";
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
