import React, { Component } from "react";
import "./node.css";

class Node extends Component {
  //nodeClicked
  //row
  //column
  //color
  state = { color: this.props.color };

  componentDidMount() {
    if (this.props.color !== "#ffffff") {
      //console.log(this.props.color);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.color !== prevProps.color) {
      //console.log("New color: " + prevProps.color + " >> " + this.props.color);
      this.setState({ color: this.props.color });
    }
  }

  /*
    Node components arent updating when Workspace gets updated after the click
  */

  addFiller() {
    let filler = (
      <div
        className="node-filler"
        style={{ backgroundColor: this.props.color }}
      ></div>
    );
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
