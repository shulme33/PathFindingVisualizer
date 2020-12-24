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

  constructor() {
    super();
    this.breadthFirstSearch = this.breadthFirstSearch.bind(this);
  }

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

  startAlgorithm() {
    switch (this.props.algorithm) {
      case "breadth-first":
        console.log("Breadth First Search >> " + this.state.start.col);
        this.breadthFirstSearch(this.state.start.row, this.state.start.col);
        break;
      default:
        console.log("Algorithm not setup");
        break;
    }
  }

  isOnGrid(row, col) {
    if (row < 0 || col < 0) return false;
    if (row >= this.state.nodes.length || col >= this.state.nodes[0].length) {
      return false;
    }
    return true;
  }

  breadthFirstSearch(row, col, checked = {}) {
    if (row === this.state.end.row && col === this.state.end.col) {
      return true;
    }
    if ([row, col] in checked) {
      return false;
    }
    var dir = [
      [1, 1],
      [-1, 1],
      [-1, -1],
      [1, -1],
    ];

    console.log("Checking: (" + row + ", " + col + ")");

    for (var i = 0; i < dir.length; i++) {
      var newRow = row + dir[i][0];
      var newCol = col + dir[i][1];
      if (this.isOnGrid(newRow, newCol)) {
        //Spot is on grid and has not been visited
        checked[[newRow, newCol]] = true;
        if (this.breadthFirstSearch(newRow, newCol)) {
          return true;
        }
      }
    }
  }
}

export default Workspace;
