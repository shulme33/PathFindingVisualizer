import React, { Component } from "react";
import Header from "../Header/Header.jsx";
import Workspace from "../Workspace/Workspace.jsx";

class Pathfinder extends Component {
  //mode --> addStart, addEnd

  state = {
    algorithm: "",
    mode: "",
  };

  updateAlgorithm = (newAlg) => {
    console.log(newAlg);
    this.setState({ algorithm: newAlg });
  };

  updateMode = (newMode) => {
    console.log(newMode);
    this.setState({ mode: newMode });
  };

  render() {
    return (
      <div>
        <Header
          updateAlgorithm={this.updateAlgorithm}
          updateMode={this.updateMode}
        />
        <Workspace mode={this.state.mode} algorithm={this.state.algorithm} />
      </div>
    );
  }
}

export default Pathfinder;
