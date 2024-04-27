import React from 'react';
// import githubLogo from '../img/github_log.jpeg';
// import tistoryLogo from '../img/Tistory_logo.png';
import '../App.css';
import '../App.js';



function Page4() {
  return (
    <div class="aboutMe">
    <p>4. 웹 개발자의 입장에서 평소에 사용하는 서비스에서 개선하면 좋겠다고 생각했던 점이 있다면 말씀해 주세요.</p>
    <p>저는 웹사이트를 3명의 프론트엔드 개발자들과 서로 브렌치를 파서 작업을 하였고, 병합하는 과정에서 Css충돌이 있었습니다. 내가 만든 브렌치에서는 분명히 정상적으로 작동하던 이미지파일, mp4파일, 음성파일 등이 병합만 하면 이미지가 깨지고 사라지는 문제가 발생했습니다. 무슨 문제때문에 병합을 할 때 오류가 생기는 걸까? 코드를 하나하나 뜯어보니 서로가 사용하고 있는 classname의 속성이 동일할 때 다른 페이지에도 그 classname이 가진 속성들을 가져와서 문제가 발생하고 있었습니다. 이러한 문제를 해결하기 위해 Css속성을 부여할 때는 import styles from “” 이런식으로 만들어야지 발생하는 오류를 최소화하여 진행할 수 있겠다라는 것을 깨달았습니다. 프론트엔드를 하면서 느낀건데 확실히 재미있지만 이러한 부분에 대해서는 어디에서 정확히 오류가 발생할 지 알려주지 않기 때문에 초반에 설계를 하는 작업이 중요하다는 것을 깨달았던 것 같습니다. 그래서 웹 개발자의 입장에서 이러한 오류를 잡아주고 개선방향을 알려주는 프로그램을 Ai를 활용하여 만들어보면 개선되지 않을까? 라는 생각을 해봤습니다.</p>
    <h3>
      <strong>아래에 이미지를 클릭하면 저의 github홈페이지, 운영중인 tistory블로그로 이동합니다. </strong>
    </h3>
  </div>
  );
}

export default Page4;
