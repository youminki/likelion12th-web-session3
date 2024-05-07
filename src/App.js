import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import './App.css';
import AboutMe from './JsPage/about';
import Education from './JsPage/education';
import Last from './JsPage/Last';
import LoginPage from './JsPage/LoginPage';
import Page1 from './JsPage/Page1';
import Page2 from './JsPage/Page2';
import Page3 from './JsPage/Page3';
import Page4 from './JsPage/Page4';
import Page5 from './JsPage/Page5';
import Sidebar from './JsPage/Sidebar';
import "./Login.css";

const Menu = () => (
  <div id="menu">
    <Link to="/page1"><b>page1</b></Link>
    <Link to="/page2"><b>page2</b></Link>
    <Link to="/page3"><b>page3</b></Link>
    <Link to="/page4"><b>page4</b></Link>
    <Link to="/page5"><b>page5</b></Link>
    <Link to="/about">ABOUT</Link>
    <Link to="/last">Last</Link>
    <Link to="/education">EDUCATION</Link>
  </div>
);

const ClickButton = () => (
  <div id="clickButton">
    <div id="clickButton1">
      <a href="https://github.com/youminki">
        <img src="../img/github_log.jpg" width="50%" alt="Github Logo" />
      </a>
    </div>
    <div id="clickButton2">
      <a href="https://dbalsrl7648.tistory.com/">
        <img src="../img/Tistory_logo.png" width="50%" alt="Tistory Logo" />
      </a>
    </div>
  </div>
);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const handleLogin = (loginStatus) => {
    setIsLoggedIn(loginStatus);
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <button onClick={toggleDarkMode} className="BackgroundMode">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        {!isLoggedIn ? <LoginPage onLogin={handleLogin} /> : (
          <>
            <Menu />
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
              <Route path="/page3" element={<Page3 />} />
              <Route path="/page4" element={<Page4 />} />
              <Route path="/page5" element={<Page5 />} />
              <Route path="/last" element={<Last />} />
              <Route path="/education" element={<Education />} />
              <Route path="/sidebar" element={<Sidebar />} />
            </Routes>
            <ClickButton />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
