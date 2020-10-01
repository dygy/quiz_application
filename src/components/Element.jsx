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
    return (
      <div
        style={{ top: this.state.top, transform: this.state.transform }}
        id={this.props.id}
        onClick={this.props.clickFunction}
        className={"element"}
      >
        <p>{this.props.answer.title}</p>
        <div
          className={"box"}
          style={
            this.props.answer.photo
              ? {
                  backgroundImage: `url(${this.props.answer.photo})`,
                  backgroundSize: "100%",
                }
              : {}
          }
        />
        <span>{this.props.answer.description}</span>
      </div>
    );
  }
}

export default Element;
