import React from 'react';
import ReactDOM from 'react-dom';
import FrontPage from './pages/FrontPage'
import * as serviceWorker from './serviceWorker';
import './index.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import About from './pages/About'

ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
    <FrontPage />
    <About />
    </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
