├── public/ # 정적 파일 (이미지, 아이콘, manifest.json 등)
│   └── icons/
│       ├── icon-192x192.png
│       └── icon-512x512.png
│
├── src/
│   ├── app/ # 라우트 중심 폴더
│   │   ├── (auth)/ # Route Group: 인증 관련 페이지
│   │   │   ├── layout.tsx # 그룹 공통 레이아웃
│   │   │   ├── login/page.tsx
│   │   │   └── register/page.tsx
│   │   │
│   │   ├── (dashboard)/ # Route Group: 대시보드 관련 페이지
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   │
│   │   ├── api/ # 서버 액션 및 API 라우트 (Next.js server functions)
│   │   │   └── users/route.ts
│   │   │
│   │   ├── layout.tsx # 루트 레이아웃
│   │   └── page.tsx   # 루트 페이지
│   │
│   ├── features/ # 기능 단위 코드 (UI + hooks + api)
│   │   ├── auth/
│   │   │   ├── components/     # 로그인 폼, 회원가입 폼
│   │   │   ├── hooks/          # auth 관련 custom hooks
│   │   │   └── api/
│   │   │       ├── dto.ts      # 요청/응답 타입 정의
│   │   │       ├── axios.ts    # axios 인스턴스
│   │   │       ├── queries.ts  # react-query query/mutation
│   │   │       └── index.ts    # export 모음
│   │   │
│   │   └── user/
│   │       ├── components/     
│   │       └── api/
│   │           ├── dto.ts
│   │           ├── axios.ts
│   │           ├── queries.ts
│   │           └── index.ts
│   │
│   ├── entities/ # 도메인 모델/타입 (공유 타입)
│   │   ├── user.ts
│   │   └── post.ts
│   │
│   ├── shared/ # 전역 컴포넌트/유틸/스타일
│   │   ├── components/ # Button, Modal 등
│   │   ├── hooks/      # 전역 hooks
│   │   ├── lib/        # 유틸 함수
│   │   └── styles/     # 글로벌 스타일
│   │
│   └── server/ # 서버 전용 로직
│       ├── services/   # 비즈니스 로직
│       └── db/         # DB 연결/ORM
│
├── next.config.mjs      # Next.js 설정 (PWA, 이미지, i18n 등)
├── tsconfig.json
├── tailwind.config.ts   # Tailwind 설정
└── package.json
