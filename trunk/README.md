# React + TypeScript + Vite
# ybr study start : 2025 12


## project folder tree structure. 내 멋대로 폴더구조
## 전체 표기가 아닌, 일부 표기. 풀스택을 이해하기 위한 임의 구조임. Open Source는 사용X.
## [FE] Front End | [BE] Back End | [C] Common

## src/
##  ├── app/[FE]                          # 앱의 뼈대 및 전역 설정
##  │   ├── layouts/                      # 모든 페이지가 사용하는 레이아웃 (헤더, 푸터 등)
##  │   │   └── Header.tsx
##  │   │   └── Content.tsx
##  │   │   └── Footer.tsx
##  │   │   └── Layout.tsx
##  │   │   └── Sidebar.tsx
##  │   ├── router/                       # 라우팅 설정 파일(오직URL과 컴포넌트(페이지)를 연결)
##  │   │   └── MainRouter.tsx            # 앱 전체의 최상위 라우터(모든 라우팅 파일을 import)
##  │   │   └── AuthRouter.tsx            # 인증(로그인, 회원가입) 관련 경로만 모음
##  │   │   └── ProductsRouter.tsx        # 상품 관리 관련 경로만 모음
##  │   │   └── PrivateRoute.tsx          # 인증이 필요한 경로를 감싸는 Wrapper 컴포넌트
##  │   │   └── PublicRoute.tsx           # 인증 없이 접근 가능한 경로를 감싸는 Wrapper 컴포넌트
##  │   │   └── types.ts                  # 라우팅 경로 상수 및 파라미터 타입 정의 (TypeScript)
##  │   └── index.tsx                     # 앱의 최상위 컴포넌트
##  |   ...
##  ├── features/[FE/C]                   # 핵심 비즈니스 로직 및 기능 구현 (도메인 중심)
##  │   ├── auth/                         # 사용자 인증, 로그인/회원가입 관련
##  │   │   ├── components/               # Auth 기능 전용 컴포넌트
##  │   │   │   └── LoginForm.tsx
##  │   │   │   └── LoginForm.module.scss # 기능 전용 스타일 (CSS Modules 권장)
##  │   │   ├── hooks/                    # Auth 기능 전용 비즈니스 훅
##  │   │   │   └── useLogin.js
##  │   │   └── authApi.ts[BE]            # Auth 관련 서버 통신 로직
##  │   └── products/                     # 상품 목록/상세 보기 관련
##  │       ├── components/               # Products 기능 전용 컴포넌트
##  │       │   └── ProductCard.tsx
##  │       │   └── ProductCard.module.scss # 기능 전용 스타일
##  │       ├── hooks/                    # Products 기능 전용 비즈니스 훅
##  │       │   └── useProductFilter.js
##  │       └── productApi.ts[BE]         # Products 관련 서버 통신 로직
##  |   ...
##  ├── shared/                           # 전역 재사용 가능한 공통 요소 (순수 로직/UI)
##  │   ├── ui/[FE]                       # 전역 재사용 UI 컴포넌트 (Design System) 상태/로직 X
##  │   │   └── Fieldset.tsx
##  │   │   └── Popup.tsx
##  │   │   └── Table.tsx
##  │   │   └── Tab.tsx
##  │   │   └── Card.tsx
##  │   │   └── Button.tsx
##  │   │   └── Flag.tsx
##  │   │   └── Etc.tsx
##  │   │   └── Slider.tsx
##  │   ├── hooks/[FE]                    # 전역에서 재사용되는 범용 커스텀 훅
##  │   │   └── useDebounce.js
##  │   │   └── useThrottle.js
##  │   │   └── useDarkMode.js
##  │   │   └── useAlert.js               # 알림을 띄우기 위한 notificationSlice의 dispatch 로직을 캡슐화한 훅
##  │   ├── utils/[C]                     # 순수 JavaScript 유틸리티 함수(hooks가 필요하지 않은 경우)
##  │   │   └── validation.js
##  │   │   └── currency.js
##  │   ├── api/[BE/C]                    # 공통 API 클라이언트 설정 (서버통신을 위한 전역 로직)
##  │   │   └── httpClient.ts             # Axios 또는 Fetch API 기반의 HTTP 클라이언트 인스턴스
##  │   │   └── config.ts                 # API Base URL, 타임아웃 등 서버 통신 관련 상수를 정의
##  │   │   └── interceptor.ts            # 요청시 인증토큰 삽입, 응답시 에러코드 처리 등
##  │   │   └── errorHandler.ts           # API 응답시 발생한 오류 메시지를 표준화하여 처리 할 수 있도록 변환
##  │   └── types/[C]                     # 전역 타입 정의 TypeScript
##  │       └── global.d.ts               # 전역 환경 변수(process.env)
##  │       └── user.ts                   # 사용자 객체 타입 정의
##  │       └── common.ts                 # ApiResponse<T>, PaginationMeta, SortOption 등
##  |   ...
##  ├── store/[FE]                        # 전역 상태 관리 (Redux, Zustand 등) 컴포넌트간 공유데이터
##  │   ├── config/                       # 전역 Store 설정 관련 파일 모음
##  │   │   └── index.js                  # 최종적인 전역 Store를 생성하고 설정 (Redux Toolkit의 configureStore)
##  │   ├── middlewares/                  # 비동기 처리 및 추가 기능 로직
##  │   │   └── logger.js                 # 콘솔에 액션과 상태 변화를 기록하는 미들웨어 (선택 사항)
##  │   │   └── thunk.js                  # 비동기 작업을 처리하는 로직 (Redux Thunk 등)
##  │   ├── modules/                      # Reducer/Slice 모음 (기능/도메인별 상태)
##  │   │   ├── userSlice.js              # 사용자(User) 상태, Actions, Reducers 정의
##  │   │   ├── productsSlice.js          # 상품(Products) 상태, Actions, Reducers 정의
##  │   │   ├── notificationSlice.js      # 화면에 띄울 토스트, 팝업 등의 메시지 내용과 표시 여부를 저장
##  │   │   └── index.js                  # 모든 슬라이스를 하나로 합치는 rootReducer 역할
##  │   └── types/                        # Redux 관련 타입 정의 (TypeScript 사용 시)
##  │       └── store.d.ts                # 전역 상태 및 액션 타입 정의
##  ├── styles/[FE]                       # 전역 스타일 정의 (가장 중요한 Sass 위치)
##  │   ├── base/                         # 공통 요소 셋팅
##  │   │   └── _fonts.scss
##  │   │   └── _reset.scss               # reset, font, input, button, img 등 기본 default reset 정의
##  │   │   └── _global.scss              # 브라우저 기본 스타일 초기화 정의
##  │   ├── themes/                       # 다크모드, 라이트모드 등 기본 테마별 컬러 변수파일
##  │   │   └── _dark-mode.scss  
##  │   │   └── _light-mode.scss  
##  │   ├── abstracts/                    # 추상화된 공통 요소
##  │   │   └── _variables.scss           # 전역변수, splite image 변수, 기타 공통 변수선언
##  │   │   └── _mixins.scss   
##  │   │   └── _functions.scss
##  │   ├── components/                   # 공통 컴포넌트 모음
##  │   │   └── _fieldset.scss
##  │   │   └── _layout.scss
##  │   │   └── _popup.scss
##  │   │   └── _table.scss
##  │   │   └── _tab.scss
##  │   │   └── _card.scss
##  │   │   └── _button.scss
##  │   │   └── _flag.scss
##  │   │   └── _etc.scss
##  │   │   └── _slider.scss
##  │   ├── error/                        # 에러페이지 전용 스타일
##  │   │   └── _error.scss
##  │   ├── main.scss                     # 모든 _scss 파일을 import하는 최종 진입점
##  ├── fonts/                            # 폰트 파일 (.woff, .woff2. otf..)
##      ...