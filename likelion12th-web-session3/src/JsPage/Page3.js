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


function Page3() {
  return (
    <div class="aboutMe">
            <Menu />
      <ClickButton />
    <p>3. 이번 멋쟁이사자처럼 12기 활동을 통해서 얻어 가고 싶은 것을 말씀해 주세요.
    </p>
    <p>요즘 AI가 핫하기 때문에 인공지능을 활용하여 웹툰앱을 개발해보고 싶습니다. 최근 인공지능이 그림은 물론, 디자인까지 할 수 있으며 실제 사람이 한 것과 알아보기 힘든 수준으로 발전을 했다고 들었습니다. 그렇기 때문에 인공지능을 활용해서 웹툰을 제작하고 인공지능의 기술을 가져와서 Ai가 자동으로 만들어주는 웹 프로그램 서비스를 만들어 보고 싶습니다.  제가 생각해본 아이디어인데 카메라로 동영상을 찍었을 때 그 파일을 인공지능이 인식해서 만화로 바꿔주는 앱을 만들어보면 어떨까? 라는 생각을 해보았습니다. 여기까지 성공한다면 인간의 목소리를 녹음하여 연예인이든 만화캐릭터든 목소리를 변조하여 입히면 다른 웹툰 사이트와는 차별화된 앱을 만들 수 있다고 생각했습니다. 물론 구현은 어려워보이지만 구현하면서 얻게되는 것이 많을 것이라고 생각합니다. 평소에도 만들어보고 싶은 웹들은 많았는데 이번기회에 좋은 서비스를 만들어 보고 싶습니다.
    </p>
    <h3>
      <strong>아래에 이미지를 클릭하면 저의 github홈페이지, 운영중인 tistory블로그로 이동합니다. </strong>
    </h3>
  </div>
  );
}

export default Page3;
