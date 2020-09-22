import React, { Component } from "react";
import Element from "./Element";
class Container extends Component {
  childes = [];
  data = ["first", "second", "third", "ford", "five"];
  level = 0;
  moveDown = (index) => {
    this.level -= 5;
    this.childes.forEach((elem, i) => {
      if (elem.current) {
        elem.current.move(index === i ? this.level * -1 : this.level);
      } else {
        this.level = -500;
      }
    });
    if (this.level > -500) {
      setTimeout(() => {
        return this.moveDown(index);
      }, 16.6);
    } else {
      sessionStorage.setItem("answer", this.data[index]);
      this.level = 0;
      this.render();
    }
  };
  render() {
    return (
      <>
        <div className={"container"}>
          {this.data.map((name, index) => {
            const ref = React.createRef();
            this.childes.push(ref);
            return (
              <Element
                ref={ref}
                clickFunction={() => {
                  this.moveDown(index);
                }}
                title={name}
                top={this.level}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Container;
