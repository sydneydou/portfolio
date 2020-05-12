import React from 'react';
import './styles.css';
import Header from "../../components/Header"
import { Parallax } from 'react-scroll-parallax';

function FrontPage() {
  return (
    <div className="img">
      <Parallax>
      <Header />
      <div className = "front-page">
        <div className="title-name">
            <h1>Hi, I'm Sydney!</h1>
            <h2>Front End Developer. Professional Problem Solver.</h2>
        </div>
       
        </div>
        </Parallax>
    </div>
  );
}

export default FrontPage;
