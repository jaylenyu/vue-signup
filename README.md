# Nuxt-signup
<br/>
<br/>

## 시작가이드

```bash
$ git clone
$ npm install
$ npm run dev
```
<br/>

## 요약
<br/>
1. 메인페이지에서 회원가입 버튼을 통해 signup 페이지로 이동 <br/>
2. signup 페이지에서 유저정보, 주소, 카드번호 컴포넌트를 렌더링<br/>
3. 이전, 다음 버튼으로 컴포넌트 순서대로 교체되도록 구현<br/>
4. Piana로 데이터를 전역으로 관리하고 컴포넌트에서 업데이트 하도록 구성<br/>

<br/>

## 미리보기

| Page              | GIF                                                                                                     | Contents |
|-------------------|---------------------------------------------------------------------------------------------------------|----------|
| email & password      | ![personalInfo](https://github.com/jaylenyu/vue-signup/assets/124610396/618278f3-5296-42ea-9996-88bae2ed85f1)| 이메일 유효성검사와 비밀번호 유효성 검사 및 일치 확인 구현 <br/> |
| address          | ![Address](https://github.com/jaylenyu/vue-signup/assets/124610396/b0163693-7f8b-4be5-a5c9-e0da38ffc2f6)| 사용자 경험을 높이기 위해 전화번호에 하이픈 자동으로 삽입. <br/> 전화번호가 10자리면 000-000-0000, 11자리면 000-0000-0000으로 자동으로 하이픈이 교체되도록 구현. <br/> daumpost api에서 우편번호와 주소를 return받아 input에 삽입되도록 구현. |
| credit              |  ![Creditdemo](https://github.com/jaylenyu/vue-signup/assets/124610396/56793b37-cb6b-465f-9031-7ba4ce60251d)| 사용자 경험을 높이기 위해 4자리 입력 후 다음 input으로 focus를 이동. <br/> 카드번호 유효성검사 및 입력값이 16자리인지 감지 후 에러메세지 구현.  |
| complete           |  ![complete](https://github.com/jaylenyu/vue-signup/assets/124610396/43f53115-660c-4840-bd60-11f7284bc296)| 사용자가 입력한 정보를 Piana에 저장 및 관리. <br/> 데이터를 해당 컴포넌트로 불러와 페이지 구현. |

<br/>

## 프로젝트 구조

<br/>

```
.
├── components
│   ├── Address.vue
│   ├── Credit.vue
│   └── PersonalInfo.vue
│
├── pages
│   ├── signup
│   │   └── index.vue
│   ├── complete
│   │   └── index.vue
│   └── index.vue
│
├── store
│   ├── address.js
│   └── personalInfo.js
.
```

<br/>

## 사용한 패키지

1. Piana : 전역상태관리
2. Plain-css : 발란몰에서 사용중
