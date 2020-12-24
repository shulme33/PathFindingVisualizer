import React, { Component } from "react";
import "./node.css";

class Node extends Component {
  //nodeClicked
  //row
  //column
  //color
  //mode
  state = { status: this.props.status };

  componentDidUpdate(prevProps) {
    if (this.props.status !== prevProps.status) {
      this.setState({ color: this.props.statusr });
    }
  }

  addFiller() {
    let fillColor = "#ffffff";

    if (this.props.status === "end") {
      fillColor = "#ff0000";
    } else if (this.props.status === "start") {
      fillColor = "#00ff00";
    }

    let filler = (
      <div className="node-filler" style={{ backgroundColor: fillColor }}></div>
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
