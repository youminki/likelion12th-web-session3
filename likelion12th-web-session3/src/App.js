import React from 'react';
// import githubLogo from '../img/github_log.jpeg';
// import tistoryLogo from '../img/Tistory_logo.png';
import './App.css';
import AboutMe from './JsPage/about';
import Education from './JsPage/education';
import Last from './JsPage/Last';
import Page1 from './JsPage/Page1';
import Page2 from './JsPage/Page2';
import Page3 from './JsPage/Page3';
import Page4 from './JsPage/Page4';
import Page5 from './JsPage/Page5';

const Menu = () => (
  <div id="menu">
    <a href="page1.html"><b>page1</b></a>
    <a href="page2.html"><b>page2</b></a>
    <a href="page3.html"><b>page3</b></a>
    <a href="page4.html"><b>page4</b></a>
    <a href="page5.html"><b>page5</b></a>
    <a href="about.html">ABOUT</a>
    <a href="Last.html">Last</a>
    <a href="education.html">EDUCATION</a>
  </div>
);

const ClickButton = () => (
<div id="clickButton">
      <div id="clickButton1">
        <a href="https://github.com/youminki">
        <img src="../img/github_log.jpg" width="50%" />
        </a>
        </div>
      <div id="clickButton2">
        <a href="https://dbalsrl7648.tistory.com/">
        <img src="../img/Tistory_logo.png" width="50%" />
        </a>
      </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Menu />
      <AboutMe />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Last />
      <Education />
      <ClickButton />
    </div>
  );
}

export default App;
