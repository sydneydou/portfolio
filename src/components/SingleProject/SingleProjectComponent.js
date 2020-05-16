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
        className="single-container"
        onMouseEnter={this.handleBoxToggle}
        onMouseLeave={this.mouseLeave}
      >
        <div className="single-project" key={val.id}>
          {!this.state.hover ? (
            <img src={val.images[0]} className={"project-image"} />
          ) : (
            <div className="name-box">
              <h1>{val.title}</h1>
              <p>{val.description}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SingleProject;
