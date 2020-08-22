import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Booogey Man",
        },
        {
          name: "Dracula",
        },
        {
          name: "React Monster",
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster, index) => (
          <h1 key={index}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
