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
| email & password      |![personalInfo](https://github.com/jaylenyu/vue-signup/assets/124610396/479d5774-c1fd-47b9-adf9-c736356e6a17)| 이메일 유효성검사와 비밀번호 유효성 검사 및 일치 확인 구현 <br/> |
| address          | ![Address](https://github.com/jaylenyu/vue-signup/assets/124610396/6e01d735-b764-4fa1-9b7b-f8bafa3ee984)| 사용자 경험을 높이기 위해 전화번호에 하이픈 자동으로 삽입. <br/> 전화번호가 10자리면 000-000-0000, 11자리면 000-0000-0000으로 자동으로 하이픈이 교체되도록 구현. <br/> daumpost api에서 우편번호와 주소를 return받아 input에 삽입되도록 구현. |
| credit              | ![Creditdemo](https://github.com/jaylenyu/vue-signup/assets/124610396/968f4a28-7f91-42cb-980f-21edc4f17989)| 사용자 경험을 높이기 위해 4자리 입력 후 다음 input으로 focus를 이동. <br/> 카드번호 유효성검사 및 입력값이 16자리인지 감지 후 에러메세지 구현.  |
| complete           | ![complete](https://github.com/jaylenyu/vue-signup/assets/124610396/86b5eaa7-69c9-45cd-b33e-a928900efdb4)| 사용자가 입력한 정보를 Piana에 저장 및 관리. <br/> 데이터를 해당 컴포넌트로 불러와 페이지 구현. |

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
