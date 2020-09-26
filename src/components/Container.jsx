import React, { Component } from "react";
import Element from "./Element.jsx";
import data from "../data/questions.json";

class Container extends Component {
  state = {
    renderChildes: true,
    finish: false,
  };
  current = 0;
  data = data;
  childes = [];
  level = 0;
  moveDown = (index) => {
    this.level -= 10;
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
      sessionStorage.setItem(this.current, this.data[index]);
      this.setState({ renderChildes: false });
      this.childes = [];
      setTimeout(this.nextWave, 1000);
    }
  };
  nextWave = () => {
    if (this.data.questions.length > this.current + 1) {
      this.current += 1;
      this.level = 0;
      this.setState({ renderChildes: true });
    } else {
      this.setState({ finish: true });
    }
  };
  render() {
    return (
      <>
        <h1>
          {" "}
          {this.state.finish
            ? "Congratulations, you've done this!"
            : this.data.questions[this.current].title}
        </h1>
        <div className={"container"}>
          {this.state.renderChildes
            ? this.data.questions[this.current].answers.map((answer, index) => {
                const ref = React.createRef();
                this.childes.push(ref);
                return (
                  <Element
                    id={index}
                    ref={ref}
                    clickFunction={() => {
                      if (this.level === 0) {
                        this.moveDown(index);
                      }
                    }}
                    title={answer}
                    top={this.level}
                  />
                );
              })
            : ""}
        </div>
      </>
    );
  }
}

export default Container;
