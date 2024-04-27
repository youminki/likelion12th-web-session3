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


function Page2() {
  return (
    <div class="aboutMe">
            <Menu />
      <ClickButton />
    <p>2. 나의 한계점을 극복하기 위해 노력하여 달성해 본 경험을 문제-과정(노력)-목표 달성의 이야기로 서술해 주세요.</p>
    <p>처음 react를 시작할 때 애니메이션 효과를 구현하는 과정은 쉽지 않았던 것 같습니다. react가 처음이기도 했고, 애니메이션을 구현하기 위해서 그 안에 적용되는 효과들을 모두 구현해야하는데 어떻게 이것을 완성할 수 있을까? 라는 문제가 있었습니다. 저는 이를 해결하기 위해 react를 따로 공부했던 것도 아니고 다른사람들의 코드를 보며 이런 상황에서는 이렇게 만들고 저런 상황에서는 저렇게 만들면 되는구나라는 생각이 들었습니다. 또 도움이 많이되었던 것은 GPT, Bing, Bard 모든 Ai에게 질의를 던지며 Ai가 주는 답변을 통해 구현을 할 수 있었습니다. 제가 사용해본 결과 Ai가 완벽하진 않기 때문에 내가 원하는 옵션을 모두 맞추진 못합니다. 그러나 Ai가 틀을 잡아주는 것에 다른사람의 코드를 익히고 응용을 하였더니 원하는 결과를 만들 수 있었습니다. 지금 Ai는 계속해서 발전하고 있지만 아직 완벽하진 않습니다. 실무에서 얼마나 더 빠르고 정확하게 내가 원하는 값을 만드냐는 Ai를 얼마나 잘 다르고 사용할 줄 아는지가 중요하다고 생각합니다. 이번에 멋쟁이사자에 합격한다면  프로젝트를 통해 Ai의 활용 및 응용을 해서 실무에서 활용할 수 있는 나만의 실력을 키우고 싶다는 생각이 들었습니다.</p>
    <h3>
      <strong>아래에 이미지를 클릭하면 저의 github홈페이지, 운영중인 tistory블로그로 이동합니다. </strong>
    </h3>
  </div>
  );
}

export default Page2;
