import React, { Component } from "react";
import Element from "./Element.jsx";
import data from "../data/questions.json";
let json;
fetch(`${window.location.href.replace("quest", "data")}`)
  .then((value) => {
    return value.json();
  })
  .then((value) => {
    json = value;
  })
  .catch((error) => {
    console.error(error);
    json = undefined;
  });
class Container extends Component {
  state = {
    renderChildes: true,
    finish: false,
  };
  current = 0;
  data = json ? json : data;
  childes = [];
  level = 0;
  moveDown = (index) => {
    this.level -= 15;
    this.childes.forEach((elem, i) => {
      if (elem.current) {
        elem.current.setState(
          index === i
            ? {
                top: `${this.level * -1}px`,
                transform: `rotateY(${this.level * -1}deg)`,
              }
            : { top: `${this.level}px`, transform: `rotateY(${this.level}deg)` }
        );
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
      window.postMessage(JSON.stringify(sessionStorage), window.location.href);
      this.setState({ finish: true });
      sessionStorage.clear();
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
                    key={index}
                    ref={ref}
                    clickFunction={() => {
                      if (this.level === 0) {
                        this.moveDown(index);
                      }
                    }}
                    answer={answer}
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
