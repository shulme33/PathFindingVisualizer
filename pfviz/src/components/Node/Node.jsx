import React, { Component } from "react";
import "./node.css";

class Node extends Component {
  //nodeClicked
  //row
  //column
  //color
  state = { color: this.props.color };

  componentDidMount() {
    if (this.props.color != "#ffffff") {
      console.log(this.props.color);
    }
  }

  addFiller() {
    let filler = <div className="node-filler"></div>;
    return filler;
  }

  render() {
    return (
      <div
        className="node"
        onClick={(e) => {
          this.props.nodeClicked(e, this.props.row, this.props.col);
        }}
      >
        {this.addFiller()}
      </div>
    );
  }
}

export default Node;

//{this.addFiller()}
