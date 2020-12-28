import React, { PureComponent } from "react";
import "./node.css";

class Node extends PureComponent {
  //nodeClicked
  //row
  //column
  //color
  //status
  state = { status: this.props.status };

  componentDidUpdate(prevProps) {
    if (this.props.status !== prevProps.status) {
      this.setState({ color: this.props.statusr });
    }
  }

  //shouldComponentUpdate(nextProps) {
  //  return this.props.status !== nextProps.status;
  // }

  addFiller() {
    let fillColor = "#ffffff";

    if (this.props.status === "end") {
      fillColor = "#eb3465";
    } else if (this.props.status === "end-found") {
      fillColor = "#ebc334";
    } else if (this.props.status === "start") {
      fillColor = "#34eb67";
    } else if (this.props.status === "visited") {
      fillColor = "#b5ffca";
    } else if (this.props.status === "wall") {
      fillColor = "#000000";
    }

    let filler = (
      <div className="node-filler" style={{ backgroundColor: fillColor }}></div>
    );
    return filler;
  }

  render() {
    //console.log("Rerender Child");
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
