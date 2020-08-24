import React, { Component } from "react";
import CardList from "./components/card-list/Cardlist.jsx";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    return (
      <div className="App">
        <CardList name="Matt">
          {this.state.monsters.map((monster, index) => (
            <h1 key={index}>{monster.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
