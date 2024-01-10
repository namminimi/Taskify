## Taskify
- 일정 관리 서비스
- 개발 기간: 12/18 ~ 1/5

## Deploy
- 배포링크
  https://taskify-sand-two.vercel.app/
- 데모계정
  id: guest@email.com
  pw: guest112
  
## Team
<table width="600px">
    <th style="text-align:center">
      <a href = "https://github.com/kanglocal"> 강현지 </a> 
    </th>
    <th style="text-align:center">
      <a href ="https://github.com/kde98892">김다은</a>
    </th>
    <th style="text-align:center">
      <a href = "https://github.com/namminimi">남민섭</a>
    </th>
  <th style="text-align:center">
      <a href = "https://github.com/thisisthewa2">안윤진</a>
    </th>
   <th style="text-align:center">
      <a href = "https://github.com/gw-lim">임건우</a>
    <tr>
        <td width="200px">
            <img src = "https://github.com/Peachy-Peachy/Taskify/assets/119280160/a9f0a518-80d5-4cbe-a1f9-4aa79b45fbf6"/>
        </td>
        <td width="200px">
            <img src = "https://github.com/Peachy-Peachy/Taskify/assets/119280160/83f09667-a69e-416f-8787-766892623d9c"/>
        </td>
        <td width="200px">
           <img src = "https://github.com/Peachy-Peachy/Taskify/assets/119280160/e879d42d-c9bf-40b7-96fb-102fd92fd974"/>
        </td>
        <td width="200px">
           <img src = "https://github.com/Peachy-Peachy/Taskify/assets/119280160/d5b431c4-3eb4-459d-9849-3762d22975b9"/>
        </td>
        <td width="200px">
           <img src = "https://github.com/Peachy-Peachy/Taskify/assets/119280160/4c45aa85-4f44-47ba-9292-6b62868aadac"/>
        </td>
    </tr>
    
</table>

## ⚒️ Stacks

### Environment
<p>
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=NextJS&logoColor=white">
<img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white">
<img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=VisualStudioCode&logoColor=white">
</p>

### Development
<p>
    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white">
    <img src="https://img.shields.io/badge/TS-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
  <img src="https://img.shields.io/badge/tailwind-06B6D4?style=for-the-badge&logo=Tailwindcss&logoColor=white">
    <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white">
      <img src="https://img.shields.io/badge/React Hook Form-EC5990?style=for-the-badge&logo=ReactHookForm&logoColor=white">
</p>


## **Feature**

‘>’ 클릭 시 해당 특징 설명을 보실 수 있습니다.
<details>
<summary>페이지</summary>
<ul>
<details>
<summary>회원가입 & 로그인</summary>
<ul>
    <li><b>react-hook-form</b> 라이브러리를 사용하였습니다. useForm의 controller를 사용하여 각 폼의 역할을 구분해서 유효성 검사를 통과하지 못하면 에러메세지 전달하고 모든 유효성 검사를 통과하면 회원가입/로그인 버튼이 활성화됩니다. 이후 <b>useRequest</b> 커스텀 훅을 사용하여 데이터를 요청합니다.</li>
    <li>  회원가입 기능에서는 이메일, 닉네임, 비밀번호, 비밀번호 확인 그리고 이용약관 동의를 사용하여 회원가입 할 수 있게 하고 로그인 기능에서는 이메일, 비밀번호를 사용하여 로그인할 수 있도록 합니다 </li>
</ul>
</details>

<details>
    <summary>나의 대시보드</summary>
    <ul>
        <li>참여중인 대시보드
            <ul>
                <li>onClick 이벤트 함수로 현재 페이지를 변경하고, 각 페이지에 해당하는 데이터를 <b>useRequest</b> 커스텀 훅으로 요청합니다.</li>
                <li>페이지네이션 UI를 구축하였습니다, 각 대시보드 클릭 시 해당 대시보드로 이동합니다.</li>
            </ul>    
        </li>
        <li>새로운 대시보드 생성
            <ul>
                <li>모달을 통해 폼 제출 시 커스텀훅 <b>useRequest</b>를 사용해 post 요청하게 했습니다.</li>
                <li>대시보드 생성 시 참여중인 대시보드와 사이드메뉴에 새로운 대시보드 추가하도록 했습니다.</li>
            </ul>
        </li>
        <li>초대받은 대시보드
            <ul>
                <li>초대 거절 / 수락
                    <ul>
                        <li>초대 거절 / 수락 시 커스텀 훅 <b>useRequest</b> 을 사용해 put요청하도록 했습니다.</li>
                        <li>초대 거절 / 수락 시 즉시 초대목록에서 삭제, 참여중인 대시보드와 사이드메뉴에 반영하도록 했습니다.</li>
                    </ul>
                </li>
                <li>초대 목록 검색
                    <ul>
                        <li><b>useInfiniteScroll</b> 커스텀 훅을 사용하여 무한스크롤을 구현했습니다.</li>
                        <li>스크롤이 브라우저 최하단에 도달하면 초대목록을 더 불러옵니다.</li>
                    </ul>
                </li>
                <li>무한스크롤
                    <ul>
                        <li><b>useInfiniteScroll</b> 커스텀 훅을 사용하여 무한스크롤을 구현했습니다.</li>
                        <li>스크롤이 브라우저 최하단에 도달하면 초대목록을 더 불러옵니다.</li>
                    </ul>
                </li>            
            </ul>
        </li>
    </ul>
</details>

<details>
    <summary>대시보드</summary>
        <ul>
            <li>DnD</li>
                <ul>
                    <li><b>react-beautiful-dnd</b> 라이브러리를 활용하여  핸들, 드래그, 드롭이 가능한 영역을 각각 지정하고, 드래그 전 후에 이벤트 함수를 통해 동작을 제어합니다.</li>
                    <li> 칼럼 간, 카드 간, 서로 다른 칼럼의 카드 간의 이동이 가능합니다. </li>
                </ul>
            <li>더보기 버튼</li>
            <ul>
                <li><b>useState</b> 훅을 통해 이벤트 함수 작동 시 기존 데이터와 새로 불러온 데이터를 병합한 새 리스트를 저장합니다. </li>
                <li>세로스크롤 기반의 Mobile, Tablet 사이즈에서 더보기 버튼을 통해 카드리스트가 확장됩니다.</li>
            </ul>
            <li>무한 스크롤</li>
            <ul>
            <li><b>useInfiniteScroll</b> 커스텀 훅을 사용하여 스크롤이 브라우저 최하단 요소에 도달했을 시 작동할 함수를 넘겨줍니다. </li>
            <li>가로 스크롤 기반의 PC 사이즈에서, 스크롤이 브라우저 최하단 요소에 도달했을 때 카드리스트가 확장됩니다.</li>
            </ul>
        <li>컬럼 관리</li>
            <ul>
            <li><b>useRequest</b> 커스텀 훅을 사용하여 데이터를 요청하였고 응답을 받으면 데이터를 jotai로 전역 상태 관리하였습니다.</li>
            <li> 대시보드 내에서 새로운 컬럼 생성, 이미 존재하는 컬럼 이름 변경 그리고 컬럼 삭제할 수 있습니다. </li>
            </ul>
            <li>할 일 생성, 수정</li>
            <ul>
            <li>  
                 커스텀한 이미지 업로드 기능은 사용자가 선택한 이미지를 formData 객체에 추가하고, 이벤트 핸들러를 통해 <b>useRequest</b> 커스텀 훅으로 서버에 업로드 됩니다. 응답으로는 새 이미지 데이터를 받습니다.
            </li>
            <li>
                jotai 전역 상태관리를 사용해 페이지와 모달간에 전달하는 props를 줄였습니다.
            </li>
            </ul>
        </details>
    </ul>
</details>
</details>
</details>
<details>
<summary>Hook</summary>
<ul>
  <details>
<summary>api 연결</summary>
      
<ul>
    <li>useRequest</li>
<ul>
<li><b>axios</b> 라이브러리를 사용하여 instance를 생성해 data를 fetch 합니다.</li>
<li>url과 params 등을 파라미터로 받아 fetch 해온 데이터 또는 오류, 그리고 isLoading 변수를 리턴합니다.</li>
</ul>

<li> axios interceptor </li>
<ul><li><b>axios</b> 라이브러리의 instance interceptor를 활용했습니다.</li>
    <li>매번 요청을 보낼 때 access token을 넣어주지 않아도 access token을 갖고 있다면 자동으로 요청의 헤더에 추가되도록 하였습니다.</li>
</ul>
</ul>
</details>

<details>
<summary>무한스크롤</summary>

<ul><li>useInfiniteScroll</li>

<ul><li><b>Intersection Observer API</b>를 사용하여 실행 될 함수를 보내고 containerRef 를 리턴받아 스크롤이 일어날 구역에 ref로 추가합니다.</li>
<li>서비스 내 다수의 페이지에서 무한스크롤 기능을 활용하고 있어 커스텀 훅을 통해 observe와 unobserve 상태를 관리하도록 하였습니다.</li>
</ul>
</details>
</details>
</ul>
    </ul>
    </details>

</details>
</details>
<details>
<summary>공통 컴포넌트</summary>
<ul>
<details>
<summary>모달</summary>
<ul>
    <li><b>Compound Pattern</b>을 적용해 모달과 관련된 데이터를 context, jotai로 관리하며, 기능의 관심사를 분리하여 구현했습니다. </li>
    <li>모달 위에서 모달을 또 여는 경우, 두번째 모달이 열릴 때 첫번째 모달이 닫히도록 구현했습니다.</li>
</ul>

</details>
<details>
<summary>사이드메뉴</summary>
<ul>
<li>무한 스크롤</li>
<ul>
<li><b>useInfiniteScroll</b>훅을 사용하고, <b>react query</b> 라이브러리 <b>useInfiniteQuery</b>를 통해 데이터 fetch합니다. </li>
<li> 스크롤이 브라우저 최하단 요소에 도달했을 때 자동으로 다음 대시보드들을 불러옵니다. </li>
</ul>
<li>스켈레톤 UI</li>
<ul>
<li> <b>Material UI</b> 라이브러리를 사용해 스켈레톤 UI를 만들고, <b>useRequest</b> 훅을 통해 표시 여부를 확인합니다.</li>
<li> 다음 대시보드가 로딩될 동안 스켈레톤 UI를 보여줍니다. 로딩 시간이 짧을 시 스켈레톤 UI가 짧게 나타났다가 사라지는 현상을 방지하기 위해 로딩 시간이 300ms 이상일 때만 스켈레톤 UI가 나타나도록 구현했습니다.</li>
</ul>
</ul>
</details>
</details>
<details>
<summary>기타</summary>
<ul>
<details>
<summary>디자인 시스템</summary>
<ul>
    <li>폰트</li>
    <ul>
        <li>프로젝트에서 사용되는 폰트 크기를 총 6가지, 폰트 굵기를 총 3가지로 한정지어 heading1-normal 과 같은 방식으로 폰트 스타일을 하나의 클래스로 줄 수 있도록 했습니다.</li>
        <li>tailwind.config.ts 파일에서 폰트 크기 및 굵기에 대한 custom theme을 설정하고 global.css에서 utility layer로 폰트 클래스를 선언하여 사용했습니다.</li>
<ul>
<li>heading1 (24px)</li>
<li>heading2 (20px)</li>
<li>subheading (18px)</li>
<li>body1 (16px)</li>
<li>body2 (14px)</li>
<li>caption (12px)</li>
<li>light (400)</li>
<li>normal (500)</li>
<li>bold (700)</li>
</ul>
    </ul>
<li>컬러 팔레트</li>
    <ul>
        <li>프로젝트에서 사용되는 색상들을 custom theme으로 설정하여 사용했습니다.</li>
        <li>global.css에서 base layer에 지정해둔 컬러 값들이 data-theme에 따라 다르게 들어가도록 설정하여 추가적인 스타일 코드 없이 다크 모드를 구현했습니다.</li>
    </ul>
<li>컴포넌트</li>
<ul><li>프로젝트에서 주로 사용되는 컴포넌트들의 스타일을 global.css에서 component layer에 선언해두어 사용하였습니다.</li></ul>
</ul>
</details>
<details>
<summary>레이아웃</summary>
<ul><li>_app.tsx에서 공통 레이아웃을 주어 레이아웃 적용했습니다.</li></ul>
</ul>
</details>

</details>

## Feature Demonstration GIF
<details>
    <summary>페이지</summary>
     <ul>
  <details>
  <summary>랜딩페이지</summary>
  
  ![랜딩페이지](https://github.com/Peachy-Peachy/Taskify/assets/119280160/0bcb5070-b67b-40f8-aa3a-94e625088a66)
  
  </details>
  <details>
  <summary>회원가입</summary>
      
![회원가입](https://github.com/Peachy-Peachy/Taskify/assets/119280160/635cb542-9272-45e2-bbab-5787d6e1bf84)
  </details>
  <details>
  <summary>로그인</summary>
      
  ![로그인](https://github.com/Peachy-Peachy/Taskify/assets/119280160/92ec67f0-8380-4293-bc70-e9d4c577e94c)

  </details>
   <details>
  <summary>나의 대시보드 </summary>
       <ul>
  <details>
  <summary>참여중인 대시보드 </summary>
      
  ![참여중인대시보드](https://github.com/Peachy-Peachy/Taskify/assets/119280160/09d19da6-77bb-4610-9917-27f96b464b15)
  </details>
  <details>
  <summary> 새로운 대시보드 생성 </summary>
      
  ![새로운대시보드](https://github.com/Peachy-Peachy/Taskify/assets/119280160/916b69d2-161b-4031-98a1-97b64f52732b)

  </details>
   <details>
  <summary>초대받은 대시보드 </summary>
       <ul>
<details>
  <summary>초대 목록 무한스크롤 </summary>
    
![초대목록 무한스크롤](https://github.com/Peachy-Peachy/Taskify/assets/119280160/0c772086-7f7c-40d8-a3e1-3c3da93262fa)

  </details>
  <details>
  <summary>초대 거절, 수락 </summary>
      
![초대수락거절](https://github.com/Peachy-Peachy/Taskify/assets/119280160/753c29a4-c78d-4a63-a296-5b3911484977)

  </details>
  <details>
  <summary>초대 목록 검색</summary>
      
![초대목록검색2](https://github.com/Peachy-Peachy/Taskify/assets/119280160/b403fa85-229a-4c3c-b256-215160619956)

  </details>
  </ul>
  </ul>
  </details>
   <details>
      <summary>대시보드</summary>
        <ul>
            <details>
              <summary>DnD</summary>
                
![디앤디](https://github.com/Peachy-Peachy/Taskify/assets/119280160/607c1b9a-305f-495c-8cb3-db0ffa7e428d)
            </details>
          <details>
              <summary>더보기 버튼</summary>
              ![더보기버튼](https://github.com/Peachy-Peachy/Taskify/assets/119280160/8e16dad1-dce8-4b5f-8f83-98acab3c7019) </details>
          <details>
              <summary>무한 스크롤</summary>
              ![대시보드무한스크롤](https://github.com/Peachy-Peachy/Taskify/assets/119280160/8821116a-73d4-4d67-b84b-189e8bc96a9e)
                </details>
            <details>
              <summary>컬럼관리</summary>
![컬럼관리](https://github.com/Peachy-Peachy/Taskify/assets/119280160/5679791c-467e-4984-bcd3-edeefb67d5c4)

 </details>
                        <details>
              <summary>할 일 생성, 수정</summary>
    
![할일생성](https://github.com/Peachy-Peachy/Taskify/assets/119280160/b6c35d75-252c-47f2-998d-4437424b870b)
    
![할일수정](https://github.com/Peachy-Peachy/Taskify/assets/119280160/eac26b34-3d39-4353-8664-216ca408cb18)
            </details>
        </ul>
  </details>
  <details>
      <summary>마이 페이지</summary>
      <ul>
           <details>
              <summary>프로필 수정 및 비밀번호 변경</summary>
               
![프로필변경2](https://github.com/Peachy-Peachy/Taskify/assets/119280160/f7412c42-6dbd-4a1b-99e4-88c00050225d)

![비밀번호변경](https://github.com/Peachy-Peachy/Taskify/assets/119280160/768878f6-e59b-4cd9-b89f-9e3d6bd1db89)

</details>
      </ul>
  </details>
  </details>
  </ul>
</details>
  <details>
      <summary>공통 컴포넌트</summary>
      <ul>
           <details>
              <summary>헤더</summary>
               
![헤더](https://github.com/Peachy-Peachy/Taskify/assets/119280160/a2bb95f9-7a8c-4d4b-9edb-63e31a50cb12)
           </details>
          <details>
              <summary>모달</summary>
              <ul>
                  <li>
                  <bold>대시보드 생성하기</bold>
                  
![대시보드생성하기](https://github.com/Peachy-Peachy/Taskify/assets/119280160/336ad772-2423-4b9c-8b16-3f5e3b5ad0d5)</li>
                <li>
                <bold>칼럼 생성</bold>
                
![칼럼생성](https://github.com/Peachy-Peachy/Taskify/assets/119280160/1804ccc8-b915-424a-a9be-bd177b208b4d)</li>
 
<li>
    <bold>칼럼 생성 초과</bold>
    
![칼럼생성초과](https://github.com/Peachy-Peachy/Taskify/assets/119280160/5c9af165-866d-4cf8-a7ba-d2de03b303c1)
</li>
 
<li>
    <bold>칼럼 수정</bold>
    
    
![칼럼수정](https://github.com/Peachy-Peachy/Taskify/assets/119280160/a0165998-7cff-47bd-8bf0-f633ae95eac4)
 </li>
 <li>
     
<bold>대시보드 초대하기</bold>  
     ![대시보드초대](https://github.com/Peachy-Peachy/Taskify/assets/119280160/d5ae7f13-dab6-4559-9d06-b566234a39c0)
 </li>
 <li>
     <bold>대시보드 초대하기 (없는 이메일)</bold>
     
![대시보드초대에러](https://github.com/Peachy-Peachy/Taskify/assets/119280160/3de007fb-e705-4dcb-ac58-001c37677a93)
 </li>
 </ul>
           </details>
           <details>
              <summary>사이드메뉴</summary>
               
![사이드메뉴3](https://github.com/Peachy-Peachy/Taskify/assets/119280160/15f5c6dd-e524-49b5-8da4-1cd759053277)
   
  </details>



