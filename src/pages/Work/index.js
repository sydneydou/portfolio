import { Parallax } from "react-parallax";
import React, { Component } from "react";
import "./styles.css";
import data from "../../data/projects.json";

console.log(data.projects);
const projects = data.projects;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Parallax
          blur={0}
          bgImage={require("../../assets/images/head.webp")}
          bgImageAlt="banner image"
          strength={400}
        >
          <div className="leaf-banner" id="work">
            <h1 className="portfolio-text">Portfolio</h1>
          </div>
        </Parallax>

        {/* map over data here */}
        <div className="all-projects">
          {projects.map((value) => (
            <div className="single-project">
              <h1>{value.title}</h1>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Work;
