import { Parallax } from "react-parallax";
import React, { Component } from "react";
import "./styles.css";
import data from "../../data/projects.json";
import Projects from "../../components/Projects";

const projects = data.projects;

class Work extends Component {
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
        <Projects projects={projects} />
      </div>
    );
  }
}

export default Work;
