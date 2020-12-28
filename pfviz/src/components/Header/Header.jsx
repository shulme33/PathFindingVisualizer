import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="hdr">
        <button onClick={this.props.beginAlgorithm}>Begin</button>
        <button
          onClick={() => {
            this.props.updateMode("start");
          }}
        >
          Start Node
        </button>
        <button
          onClick={() => {
            this.props.updateMode("end");
          }}
        >
          End Node
        </button>

        <select
          name="algorithms"
          id="algorithms"
          onChange={() => {
            this.props.updateAlgorithm(
              document.getElementById("algorithms").value
            );
          }}
        >
          <option value="dijkstra">Dijkstra’s Alogirthm</option>
          <option value="min-weight">Minimum Weight Spanning Tree</option>
          <option value="shortest-path">Shortest Path</option>
          <option value="single-source">Single Source Shortest Path</option>
          <option value="all-pairs">All Pairs Shortest Path</option>
          <option value="a-star">A*</option>
          <option value="yens">Yen’s K-shortest Paths</option>
          <option value="random-walk">Random Walk</option>
          <option value="breadth-first">Breadth First Search</option>
          <option value="depth-first">Depth First Search</option>
        </select>
      </div>
    );
  }
}

export default Header;

//updateAlgFunction={this.updateAlgorithm} updateModeFunction={this.updateMode}
