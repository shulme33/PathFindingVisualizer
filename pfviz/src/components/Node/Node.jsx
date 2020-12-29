import React, { PureComponent } from "react";
import "./node.css";
import { ReactComponent as StartIcon } from "../../icons/chevron-circle-right-solid.svg";
import { ReactComponent as EndIcon } from "../../icons/bullseye-solid.svg";

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
    let fillIcon = undefined;

    switch (this.props.status) {
      case "end":
        //fillColor = "#eb3465";
        fillIcon = <EndIcon />;
        break;
      case "end-found":
        fillColor = "#ebc334";
        fillIcon = <EndIcon className="icon-light" />;
        break;
      case "start":
        //fillColor = "#34eb67";
        fillIcon = <StartIcon />;
        break;
      case "start-searching":
        fillColor = "#1fad47";
        fillIcon = <StartIcon className="icon-light" />;
        break;
      case "visited":
        fillColor = "#b5ffca";
        break;
      case "wall":
        fillColor = "#000000";
        break;
      default:
        break;
    }

    let filler = (
      <div className="node-filler" style={{ backgroundColor: fillColor }}>
        {fillIcon}
      </div>
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
