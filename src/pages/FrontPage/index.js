import React from "react";
import "./styles.css";
import Header from "../../components/Header";
import { Parallax } from "react-parallax";

function FrontPage() {
  return (
    <Parallax
      blur={0}
      bgImage={require("../../assets/images/head.webp")}
      bgImageAlt="banner image"
      strength={400}
    >
      <div className="img">
        <Header />
        <div className="front-page">
          <div className="title-name">
            <h1>Hi, I'm Sydney!</h1>
            <h2>Front End Developer. Professional Problem Solver.</h2>
          </div>
        </div>
      </div>
    </Parallax>
  );
}

export default FrontPage;
