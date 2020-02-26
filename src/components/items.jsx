import React, { Component } from "react";
import Item from "./item";

class Items extends Component {
  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.props.onReset}
          className="btn btn-success btn-lg m-3"
        >
          Reset All
        </button>
        {this.props.items.map(item => (
          <Item
            key={item.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            item={item}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Items;
