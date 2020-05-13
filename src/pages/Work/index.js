import { Parallax } from "react-parallax";
import React, { Component } from "react";
import "./styles.css";
import data from "../../data/projects.json";

console.log(data.projects);

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Parallax
        blur={0}
        bgImage={require("../../assets/images/head.webp")}
        bgImageAlt="banner image"
        strength={400}
      >
        <div className="leaf-banner">
          <h1 className="portfolio-text">Portfolio</h1>
        </div>
      </Parallax>
    );
  }
}

export default Work;
