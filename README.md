# 버킷스토어 사전과제
구현 목표 : 주어진 API를 사용하여 무한스크롤 구현하기

# 기능구현요소
* [x] 무한스크롤
* [x] API로 데이터 수집
* [x] 표시순서 변경 (최신순, 낮은가격순, 높은가격순, 할인률, 베스트)
* [x] 개별 상품 찜하기 / 해제
# 폴더 구조
```
📦src
 ┣ 📂components
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📜Content.tsx
 ┃ ┃ ┣ 📜MobileHeader.tsx
 ┃ ┃ ┣ 📜MobileNavbar.tsx
 ┃ ┃ ┣ 📜Navbar.tsx
 ┃ ┃ ┗ 📜Sidebar.tsx
 ┃ ┣ 📜Card.tsx
 ┃ ┣ 📜Select.tsx
 ┃ ┗ 📜Title.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useData.ts
 ┃ ┣ 📜useIntersection.ts
 ┃ ┗ 📜useLike.ts
 ┣ 📂store
 ┃ ┗ 📜likes.ts
 ┣ 📂types
 ┃ ┗ 📜data.interface.ts
 ┣ 📜App.tsx
 ┣ 📜constants.ts
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┗ 📜setupTests.ts
 ```

# 사용 라이브러리 및 패키지
* Typescript 4
* React 18
* TailwindCSS
* tailwind-merge
* clsx
* Zustand
* axios
* React-icons
* express

# 실행방법
> <b>서버 실행방법</b>
backend 폴더로 이동 후 ```node proxyServer.js``` 명령어 실행

> <b>프론트 실행방법</b>
my-app 폴더로 이동 후 ```yanr start``` 명령어 실행