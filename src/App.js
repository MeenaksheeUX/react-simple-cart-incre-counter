import React, { Component } from "react";
import NavBar from "./components/navbar";
import Items from "./components/items";
import "./App.css";

class App extends Component {
  state = {
    items: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 }
    ]
  };

  handleIncrement = item => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].value++;
    this.setState({ items });
  };

  handleReset = () => {
    const items = this.state.items.map(i => {
      i.value = 0;
      return i;
    });
    this.setState({ items });
  };

  handleDelete = itemId => {
    const items = this.state.items.filter(item => item.id !== itemId);
    this.setState({ items: items });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalItems={this.state.items.reduce((prev, cur) => {
            return prev + cur.value;
          }, 0)}
        />
        <Items
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          items={this.state.items}
        />
      </React.Fragment>
    );
  }
}

export default App;
