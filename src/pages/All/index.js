import React, { Component } from "react";
import { render } from "@testing-library/react";
import FrontPage from "../FrontPage";
import About from "../About";
import Work from "../Work";
const All = () => {
  return (
    <div>
      <FrontPage />
      <About />
      <Work />
    </div>
  );
};

export default All;
