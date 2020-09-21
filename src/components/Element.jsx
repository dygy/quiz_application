import React, { Component } from "react";
class Element extends Component {
  render() {
    console.log(this);
    return (
      <div className={"element"}>
        <p>{this.props.title}</p>
        <div className={"box"} />
        <span>text</span>
      </div>
    );
  }
}

export default Element;
