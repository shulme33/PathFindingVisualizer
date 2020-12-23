import React, { Component } from "react";
import "./workspace.css";
import Node from "../Node/Node.jsx";
import { render } from "@testing-library/react";

class Workspace extends Component {
  state = {
    nodes: [],
  };

  nodeClicked = (e, row, col) => {
    /*console.log(
      "Clicked: (" +
        row +
        "," +
        col +
        ") >> " +
        this.state.nodes[row][col].color
    );
    */
    let newNodes = this.state.nodes;
    newNodes[row][col].color = "#00ff00";

    this.setState({ nodes: newNodes });
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
          color: "#ffffff",
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
                  color={this.state.nodes[rowIndex][col].color}
                  nodeClicked={this.nodeClicked}
                />
              );
            });
          })}
        </div>
      </div>
    );
  }
}

//<div className="wrk-grid">{this.state.nodes}</div>
export default Workspace;

/*
return (
  <Node
    key={row + "-" + col}
    row={row}
    col={col}
    color={color}
    nodeClicked={this.nodeClicked}
  />
);

console.log("Inner Row: " + rowIndex);
              console.log("Inner Col: " + col);
              console.log(
                "Inner Color: " + this.state.nodes[rowIndex][col].color
              );
              
*/
