import React, { Component } from "react";
class Element extends Component {
  state = {
    top: "0px",
    transform: "rotateY(0deg)",
  };
  move = (top) => {
    this.setState({ top: `${top}px`, transform: `rotateY(${top}deg)` });
  };
  render() {
    console.log(this);
    return (
      <div
        style={{ top: this.state.top, transform: this.state.transform }}
        id={this.props.key}
        onClick={this.props.clickFunction}
        className={"element"}
      >
        <p>{this.props.title}</p>
        <div className={"box"} />
        <span>text</span>
      </div>
    );
  }
}

export default Element;
