# [파킹랏]: 서울시의 공영주차장을 찾아주는 웹 서비스]

### 링크
- [실행화면](#실행화면)
- [느낀점/배운점](#느낀점/배운점)

## 실행화면
<details>
<summary><b>모바일 기준 실행화면</b></summary>
<div markdown="1">

<img src="https://user-images.githubusercontent.com/54667577/135610973-7f9b53c7-4317-427e-a385-8acd55016343.gif" alt="실행화면" width="50%" height="50%" >

</details>
</div>

## 느낀점/배운점

<details>
<summary><b>~2021/08/21[백엔드 작업 전, 프론트 틀은 잡아둔 상태에서]</b></summary>
<div markdown="1">

- 웹을 통해 나름대로의 서비스를 만드는 거에서 성취감을 얻어, 맨땅에 헤딩을 해왔는데 이에 한계를 느끼고, css/js/react의 기본을 더 다질 필요가 있다고 느낌.
- 프로젝트의 구조를 잘 잡아놓고 시작하는 것의 중요성을 느꼈음. 혼자하는 프로젝트라 일단 생각나는 대로 이름을 지어대고 폴더를 구성했었는데 나중에 다 뒤바꾸는 것이 힘들었음.
- 추가로, 너무 한 페이지를 만드는 것에만 급급해서 styled component의 강력한 기능들을 못쓰고, 유지보수가 힘들게 짜지 않았나.
- 코드는 다른 사람도 읽을 수 있어야 하는데, 이거 다른 사람이 읽을 수 있을까? 다른 사람도 볼 수 있도록 폴더, 파일명 정하는 건 어려운 듯 하다...
- 연습하기 위한 토이프로젝트라 주제를 대충 정했다. 첫 프로젝트(격투기 선수 찾아주는 사이트)는 정말 필요에 의해서 만들었는데, 이번 프로젝트는 너무 주제를 대충 잡아서 실용성이 좀 적을 것 같다는 생각이 든다.
- 사지방에서 시간날 때 마다 구름으로 코드를 짰는데, 포매터가 마땅하지 않아서(내가 못찾은건가) 정말 코드가 더러웠던 적이 한둘이 아니다. 이건 아니다 싶을때만 alt shift P로 포매팅을 해줬는데 prettier가 보고싶었다... 포매터가 왜 필요한지 알아버린 순간...

</details>
</div>

<details>
<summary><b>~2021/09/21[프로젝트가 겉으론 모두 완성된 상태에서]</b></summary>
<div markdown="1">

어쩌다보니, 군대 내에서 예상치 못한 일들이 많이 생겨 프로젝트도 길어지고 한동안 컴퓨터를 잡지 못했다. 정말 약간 어거지로 빨리 완성은 시켜버린 느낌이다. (이렇게 끝내고 싶진 않았는데) 어찌됐든 프로젝트가 진행되면서 정말 나의 부족함(위에서도 언급했지만 더 이상 막무가내로는 안 되겠구나...)을 느낄 수 있었는데,
1. 커밋규칙, 코드 명명 규칙 등 아무것도 정하지 않고 시작해서 (애초에 혼자하는 프로젝트라 생각을 안했다.) 점점 규모가 커지고, 나중에 다시 봤을 때 너무 읽기 어려웠다.
	- 폴더 구조도 통일성이 없고, 네이밍도 너무 지저분하다. 통일성이 없는 느낌...
	- 운동으로 치면, 어떻게든 자세 흉내만 내고 있는 느낌.. (겉보기만 멀쩡하고 속은 이상하단 그런 뜻...) 
2. 구조/기능을 구상하고 만드는 것이 아니라 일단 만들면서 생각을 하다보니, 코드 결과물이 너무 재활용이 안되는 면이 많았고, 작업 효율도 떨어졌다.
3. 전체적으로 공부의 양이 부족해서 모든 기술 스택들을 겉핥기 식으로 쓰는 느낌이다.
	- 대표적으로 styled component에서 팔레트를 둬서 색이라도 뽑아쓸 수 있도록 하던가, 아니면 폰트 크기라도 조금 일정하게 맞췄으면 작업시간도 줄어들고 수정도 편했을 듯. 그리고 css-in-js의 의의를 못살리고 그냥 css처럼 상호작용이 거의 없다 싶이 썼다.

</details>
</div>

<details>
<summary><b>~2021/10/01[그나마 조금이라도 프로젝트를 다른 누군가도 알아보게 만드려고 노력하며...]</b></summary>
<div markdown="1">

프로젝트를 대충 완성하고 보니, 코드도 도저히 알아 볼 수 없었다. 그래서 처음부터 싹 뜯어고치며
- 개인 블로그를 위한 디자인 시스템을 주변에 만드는 사람들이 있었는데, 디자인 시스템이 왜 필요할 지 알았다.
- 그리고 나니 생각이 난건데, reactstrap을 이용한 프로젝트 였는데 bootstrap 자체에 대한 이해가 적다보니, 정말 carousel이나 nav를 복붙하는 용으로만 사용한 듯 하다...
	- 이 부분이 정말 아쉬운게, 차라리 처음부터 다 내가 짜던가, bootstrap이라는 좋은 디자인 시스템을 이렇게 밖에 이용을 못했다는 게 참 바보같다. 처음엔 그저 bootstrap이 귀찮은 걸 복붙하는... 그런 걸로만 알았다...

</details>
</div>