import React from 'react';
// import githubLogo from '../img/github_log.jpeg';
// import tistoryLogo from '../img/Tistory_logo.png';
import './App.css';

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

const AboutMe = () => (
  <div className="aboutMe">
    <p>1. 저희 멋쟁이사자처럼 12기에 지원해 주심에 감사드리며, 지원자분의 지원 동기를 올해의 목표와 연관 지어 서술해 주세요.</p>
    <p>멋쟁이사자를 지원하게 된 동기는 학기중에 내가 배운 언어와 지식들을 프로젝트로 진행했을 때 얼마나 할 수 있을지 확인해보고 싶었고 평소에 관심있었던 앱/웹을 다른 분들과 같이 제작을 하였을 때 가질 수 있는 내 이력서가 될 수 있기 때문에 멋쟁이사자 활동을 해보고 싶다는 생각이 들게 되었습니다. 이번 방학 때 Clover 디자인 팀과 협업을 하여 웹사이트를 제작했었는데  프로젝트를 진행하면서 프론트엔드에 관심이 생겼고 더 많은 프로젝트를 다양한 사람들과 함께 진행해보고 싶다는 생각이 들었습니다.  주위에 연합동아리로 활동을 하고 있는 사람들의 github아이디를 검색해서 어떤 프로젝트를 하고있나 탐색해봤는데 프로젝트는 물론 알고리즘 공부등 다양한 활동을 하고 있는 것 같아서 좋아보였습니다. 
      일단 MBTI로 저를 소개하자면 INFP입니다. 내성적이라 처음엔 어색할 수 있지만 친해지면 어색함이 사라지고 항상 열정적으로 임할 생각입니다. 내 의견만 내세우는 편이 아닌, 다른 사람의 의견을 잘 들어주고 좋아하는 일에 열정이 높아지기 때문에 잘할 수 있을 것 같습니다. 또한 다른 사람들에 비해 창의력도 있는 편이라고 생각합니다. 많이 부족할 수는 있지만 멋쟁이사자 활동을 통해 배우면서 함께 성장할 수 있는 시간이 되었으면 좋겠습니다. 멋쟁이사자 모든 과정을 수료하고 끝났을 때 어떤 성과물, 발전을 했을지는 모르겠지만 그것을 하는 과정에서 항상 최선을 다하도록 노력하도록 하겠습니다. 저는 학기 과목을 수강하면서 백엔드 쪽보다는 프론트엔드 쪽이 좀 더 흥미가 생겻던 것 같습니다. 웹 프로그래밍이라는 과목을 수강할 때 웹을 제작하고 디자인 하는 것이 다른 과목을 수강할 때보다 좋았던 것 같습니다. 하지만 아직 웹/앱에 대한 경험들이 부족하기 때문에 모르는 모듈, 언어들이 많았습니다. 이를 해결하기 위해 연합동아리에 들어가서 다양한 프로젝트를 하며 실무경험을 쌓아보자라는 생각이 들어서 멋쟁이사자에 지원하게 되었습니다.</p>
    <h3>
      <strong>아래에 이미지를 클릭하면 저의 github홈페이지, 운영중인 tistory블로그로 이동합니다. </strong>
    </h3>
  </div>
);

const ClickButton = () => (
  <div id="clickButton">
    <div id="clickButton1">
      <a href="https://github.com/youminki">
        {/* <img src={githubLogo} alt="Github logo" /> */}
      </a>
    </div>
    <div id="clickButton2">
      <a href="https://dbalsrl7648.tistory.com/">
        {/* <img src={tistoryLogo} alt="Tistory logo" /> */}
      </a>
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Menu />
      <h1>멋쟁이사자 자기소개서</h1>
      <AboutMe />
      <ClickButton />
    </div>
  );
}

export default App;
