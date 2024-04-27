import React from 'react';
// import githubLogo from '../img/github_log.jpeg';
// import tistoryLogo from '../img/Tistory_logo.png';
import '../App.css';
import '../App.js';
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

function Last() {
  return (
    <div class="aboutMe">
            <Menu />
      <ClickButton />
      <p>왜 프론트엔드 파트를 선택하게 되었고 본인이 생각하는 프로젝트 내에서 프론트엔드 파트의 역할을 말씀해주세요.</p>
      <p>프론트엔드를 가야할지 백엔드를 가야할지 고민이 많았습니다. 이번 방학에 Clover라는 디자인 연합동아리가 웹사이트를 만들어달라는 제안을 하였고 함께 협업을 하며 웹 디자인, 모바일 디자인을 하면서 백엔드를 할 때는 느낄 수 없었던 즐거움이 있었습니다. 프론트엔드는 내가 작업하는 것을 실시간으로 볼 수 있기 때문에 성취감이 배로 오는 것 같았고 시간가는 줄 몰랐습니다. 물론 프론트엔드에 대해 경험이 많지 않았기에 어려움이 없었던 것은 아니지만 인공지능, 다른 사람들이 만들었던 웹사이트들을 참고하며 개발을 하였더니 수월하게 협업을 마칠 수 있었던 것 같습니다. 이번에 React를 활용한다고 들었던 것 같은데 부족하지만 합격한다면 열심히 해보고 싶습니다.
        저는 프로젝트 내에서 프론트엔드 파트의 역할은 디자이너가 만든 디자인을 프론트엔드 서버에 형태를 추출하고 화면을 만든 뒤, 조작할 수 있도록 만들어주는 역할이라고 생각합니다. 그렇기에 백엔드가 작업하고 위해 프론트엔드는 웹구현을 빠르게 하는 것이 중요하다고 생각하고 있습니다. 프론트엔드를 시작한지 얼마되지 않아 모르는 모듈, 언어들이 많지만 다양한 경험을 통해 모든 것을 성취해보도록 노력하겟습니다.</p>
      <h3>
        <strong>아래에 이미지를 클릭하면 저의 github홈페이지, 운영중인 tistory블로그로 이동합니다. </strong>
      </h3>
    </div>
  );
}

export default Last;
