import React, { Component } from "react";
import "./styles.css";
class SingleProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  handleBoxToggle = () => {
    this.setState({ hover: true });
  };

  mouseLeave = () => {
    this.setState({ hover: false });
  };

  render() {
    let val = this.props.value;
    console.log(this.state.hover);
    return (
      <div
        className="single-project"
        key={val.id}
        onMouseEnter={this.handleBoxToggle}
        onMouseLeave={this.mouseLeave}
      >
        <img src={val.images[0]} className="project-image" />
        <h1>{this.state.hover ? val.title : ""}</h1>
        <p>{this.state.hover ? val.description : ""}</p>
      </div>
    );
  }
}

export default SingleProject;
