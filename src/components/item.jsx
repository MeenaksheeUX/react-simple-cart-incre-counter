import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card mb-2">
          <h5 className={this.styleCardHeader()}>{this.styleCount()}</h5>
          <div className="card-body">
            <button
              onClick={() => this.props.onIncrement(this.props.item)}
              className="btn btn-lg btn-outline-secondary"
            >
              Increment
            </button>

            <button
              onClick={() => this.props.onDelete(this.props.item.id)}
              className="btn btn-lg btn-outline-danger ml-4"
            >
              Delete
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  styleCardHeader() {
    let classes = "card-header h4 text-white bg-";
    classes += this.props.item.value === 0 ? "warning" : "primary";
    return classes;
  }

  styleCount() {
    const { value } = this.props.item;
    return value === 0 ? "No Items!" : value;
  }
}

export default Item;
