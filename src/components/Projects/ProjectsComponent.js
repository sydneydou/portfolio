import React, { Component } from "react";
import "./styles.css";
import SingleProject from "../SingleProject";
class Projects extends Component {
  render() {
    return (
      <div className="all-projects">
        {this.props.projects.map((value) => (
          <SingleProject value={value} />
        ))}
      </div>
    );
  }
}

export default Projects;
