import React from "react";
import "./styles.css";
import { Parallax } from "react-parallax";

function About() {
  return (
    <div className="about-container" id="about">
      <h1 className="title">About Me</h1>
      <div className="about-flex">
        <div className="headshot-container">
          <img
            className="headshot"
            src={require("../../assets/images/headshot.jpg")}
          ></img>
        </div>
        <div className="description-container">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
      <Parallax
        blur={0}
        bgImage={require("../../assets/images/leaf-banner.webp")}
        bgImageAlt="banner image"
        strength={400}
      >
        <div className="leaf-banner"></div>
      </Parallax>
    </div>
  );
}

export default About;
