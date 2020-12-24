import React, { Component } from "react";
import "./workspace.css";
import Node from "../Node/Node.jsx";

class Workspace extends Component {
  state = {
    nodes: [],
    start: {
      row: -1,
      col: -1,
    },
    end: {
      row: -1,
      col: -1,
    },
  };

  nodeClicked = (e, row, col) => {
    let newNodes = this.state.nodes;
    newNodes[row][col].status = this.props.mode; //HERE
    console.log("Mode: " + this.props.mode);

    var newStart = this.state.start;
    var newEnd = this.state.end;
    switch (this.props.mode) {
      case "start":
        if (this.state.start.row !== -1) {
          newNodes[this.state.start.row][this.state.start.col].status = "";
        }
        newStart = { row: row, col: col };
        break;
      case "end":
        if (this.state.end.row !== -1) {
          newNodes[this.state.end.row][this.state.end.col].status = "";
        }
        newEnd = { row: row, col: col };
        break;
      default:
        break;
    }

    this.setState({ nodes: newNodes, start: newStart, end: newEnd });
  };

  componentDidMount() {
    const mainHeight = document.getElementById("main-wrk").clientHeight;
    const mainWidth = document.getElementById("main-wrk").clientWidth;

    const totalHigh = Math.floor(mainHeight / 20);
    const totalWide = Math.floor(mainWidth / 20);

    let newNodes = [];
    for (var i = 0; i < totalHigh; i++) {
      let newLine = [];
      for (var j = 0; j < totalWide; j++) {
        newLine.push({
          key: i + "-" + j,
          row: i,
          col: j,
          status: "",
        });
      }
      newNodes.push(newLine);
    }

    this.setState({
      nodes: newNodes,
    });
  }

  render() {
    return (
      <div className="wrk" id="main-wrk">
        <div className="wrk-grid">
          {this.state.nodes.map((row, rowIndex) => {
            return row.map((row, col) => {
              return (
                <Node
                  key={this.state.nodes[rowIndex][col].key}
                  row={rowIndex}
                  col={col}
                  status={this.state.nodes[rowIndex][col].status}
                  nodeClicked={this.nodeClicked}
                  mode={this.props.mode}
                />
              );
            });
          })}
        </div>
      </div>
    );
  }
}

export default Workspace;
