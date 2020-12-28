import React, { Component } from "react";
import "./header.css";
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

class Header extends Component {
  algorithmChosen(buttonName) {
    console.log("Button: " + buttonName);
  }

  render() {
    return (
      <div className="hdr">
        <h1 className="hdr-title">Pathfinding Visualizer</h1>
        <button
          type="button"
          className="btn btn-outline-light hdr-button"
          onClick={() => {
            this.props.updateMode("start");
          }}
        >
          Place Start Node
        </button>

        <button
          type="button"
          className="btn btn-outline-light hdr-button"
          onClick={() => {
            this.props.updateMode("end");
          }}
        >
          Place End Node
        </button>

        <button
          type="button"
          className="btn btn-outline-light hdr-button"
          onClick={() => {
            this.props.updateMode("wall");
          }}
        >
          Place Wall
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

        <div className="btn-group hdr-button">
          <button
            type="button"
            className="btn btn-outline-light dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Algorithm
          </button>
          <div className="dropdown-menu">
            <button
              id="breadth-first"
              className="dropdown-item"
              onClick={() => {
                this.algorithmChosen(this.id).bind(this);
              }}
            >
              Action
            </button>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-success hdr-button"
          onClick={this.props.beginAlgorithm}
        >
          Start Algorithm
        </button>
      </div>
    );
  }
}

export default Header;

//updateAlgFunction={this.updateAlgorithm} updateModeFunction={this.updateMode}
