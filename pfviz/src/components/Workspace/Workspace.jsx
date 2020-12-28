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

  endFound = false;

  constructor() {
    super();
    this.updateNode = this.updateNode.bind(this);
    this.breadthFirstSearch = this.breadthFirstSearch.bind(this);
    this.dijkstras_algorithm = this.dijkstras_algorithm.bind(this);
    this.isStartNode = this.isStartNode.bind(this);
    this.isEndNode = this.isEndNode.bind(this);
    this.isWall = this.isWall.bind(this);
  }

  componentDidMount() {
    const mainHeight = document.getElementById("main-wrk").clientHeight;
    const mainWidth = document.getElementById("main-wrk").clientWidth;

    const totalHigh = Math.floor(mainHeight / 30);
    const totalWide = Math.floor(mainWidth / 30);

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
    //console.log("Mode: " + this.props.mode);

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
    //console.log("----------------------------Render Parent");
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
      case "dijkstra":
        this.dijkstras_algorithm();
        break;
      case "breadth-first":
        //console.log("Breadth First Search >> " + this.state.start.col);
        console.log(
          ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> BFS: " +
            this.breadthFirstSearch(this.state.start.row, this.state.start.col)
        );
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

  isStartNode(row, col) {
    return row === this.state.start.row && col === this.state.start.col;
  }

  isEndNode(row, col) {
    return row === this.state.end.row && col === this.state.end.col;
  }

  isWall(row, col) {
    return this.state.nodes[row][col].status === "wall";
  }

  updateNode(row, col, newStatus) {
    if (this.endFound) return;
    //console.log("Update: (" + row + ", " + col + ")");
    let newNodes = [...this.state.nodes];
    let changeNode = {
      ...newNodes[row][col],
    };
    changeNode.status = newStatus;
    newNodes[row][col] = changeNode;
    this.setState({ nodes: newNodes });
  }

  dijkstras_algorithm() {}

  breadthFirstSearch(row, col, cost = 0, checked = {}) {
    //console.log("Checking: (" + row + ", " + col + ")");

    setTimeout(() => {
      console.log("Update: (" + row + ", " + col + ") >> " + this.endFound);

      if (!this.isStartNode(row, col)) {
        let newStatus = "visited";
        if (this.isEndNode(row, col)) {
          newStatus = "end-found";
        }

        this.updateNode(row, col, newStatus);
      }

      if (row === this.state.end.row && col === this.state.end.col) {
        this.endFound = true;
        console.log(
          " >>>>>>>>>>>>>>>>>>>>> End Found: (" +
            row +
            ", " +
            col +
            ") >> " +
            cost
        );
        return cost;
      }

      let dir = [
        [0, 1],
        [-1, 0],
        [0, -1],
        [1, 0],
      ];

      let smallestCost = Infinity;
      for (let i = 0; i < dir.length; i++) {
        let newRow = row + dir[i][0];
        let newCol = col + dir[i][1];
        let key = newRow + "-" + newCol;

        if (
          !this.endFound &&
          this.isOnGrid(newRow, newCol) &&
          !this.isWall(newRow, newCol) &&
          (!(key in checked) || checked[key] > cost + 1)
        ) {
          /*console.log(
          "New: (" +
            newRow +
            ", " +
            newCol +
            ") >> " +
            checked[key] +
            " <<>> " +
            (cost + 1)
        );*/
          checked[key] = cost + 1;
          let curSmallest = this.breadthFirstSearch(
            newRow,
            newCol,
            cost + 1,
            checked
          );
          if (curSmallest < smallestCost) {
            smallestCost = curSmallest;
          }
        }
      }
      return smallestCost;
    }, 0);
  }
}
/*
bfs(){
  if at the end, return cost

  for each direction
    getDistance()

  return shortest of all distances
}


*/

export default Workspace;
