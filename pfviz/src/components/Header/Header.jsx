import React, { Component } from "react";
import "./header.css";
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

class Header extends Component {
  state = {
    algorithm: "Breadth First Search",
    algorithmCode: "breadth-first",
  };

  constructor() {
    super();
    this.algorithmChosen = this.algorithmChosen.bind(this);
  }

  algorithmChosen(newAlgCode, newAlgorithm) {
    this.props.updateAlgorithm(newAlgCode);
    this.setState({ algorithm: newAlgorithm, algorithmCode: newAlgCode });
  }

  render() {
    return (
      <div className="hdr">
        <h1 className="hdr-title">Pathfinding Visualizer</h1>

        <button
          type="button"
          className="btn btn-outline-light hdr-button"
          onClick={() => {
            this.props.updateMode("wall");
          }}
        >
          Place Wall
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
            this.props.updateMode("start");
          }}
        >
          Place Start Node
        </button>

        <div className="btn-group hdr-button">
          <button
            type="button"
            className="btn btn-outline-light dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {this.state.algorithm}
          </button>
          <div className="dropdown-menu">
            <button
              className="dropdown-item"
              onClick={() => {
                this.algorithmChosen("breadth-first", "Breadth First Search");
              }}
            >
              Breadth First Search
            </button>
            <button
              className="dropdown-item"
              onClick={() => {
                this.algorithmChosen("dijkstra", "Dijkstra’s Alogirthm");
              }}
            >
              Dijkstra’s Alogirthm
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

/*
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
*/
