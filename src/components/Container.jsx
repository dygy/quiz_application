import React, { Component } from "react";
import Element from "./Element";
class Container extends Component {
  data = ["first", "second", "third", "ford", "five"];
  render() {
    return (
      <>
        <div className={"container"}>
          {this.data.map(function (name, index) {
            return (
              <Element key={index} title={name}>
                {" "}
              </Element>
            );
          })}{" "}
        </div>
      </>
    );
  }
}

export default Container;
