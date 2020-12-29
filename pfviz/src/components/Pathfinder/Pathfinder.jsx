import React, { Component } from "react";
import Header from "../Header/Header.jsx";
import Workspace from "../Workspace/Workspace.jsx";

class Pathfinder extends Component {
  //mode --> addStart, addEnd

  state = {
    algorithm: "breadth-first",
    mode: "",
  };

  constructor(props) {
    super(props);
    this.workspace = React.createRef();
  }

  updateAlgorithm = (newAlg) => {
    console.log(newAlg);
    this.setState({ algorithm: newAlg });
  };

  updateMode = (newMode) => {
    console.log(newMode);
    this.setState({ mode: newMode });
  };

  beginAlgorithm = () => {
    console.log("Begin Algorithm");
    this.workspace.current.startAlgorithm();
  };

  render() {
    return (
      <div>
        <Header
          updateAlgorithm={this.updateAlgorithm}
          updateMode={this.updateMode}
          beginAlgorithm={this.beginAlgorithm}
        />
        <Workspace
          ref={this.workspace}
          mode={this.state.mode}
          algorithm={this.state.algorithm}
        />
      </div>
    );
  }
}

export default Pathfinder;
