# 기술 아키텍처 명세 (ARCHITECTURE)

## 1. 기술 스택
| 카테고리 | 기술 | 버전/비고 |
|---------|------|----------|
| Framework | React | Vite 기반 |
| Styling | Tailwind CSS | JIT 엔진 활용 |
| Language | TypeScript | 엄격한 타입 체크 |
| State | React Hooks | Context API (필요 시) |
| Persistence | LocalStorage | 브라우저 저장소 |

## 2. 디렉토리 구조
```
프로젝트 루트/
├── src/
│   ├── components/       # 재사용 가능한 UI 컴포넌트
│   ├── hooks/            # 커스텀 훅 (LocalStorage 연동 등)
│   ├── types/            # TypeScript 인터페이스/타입 정의
│   ├── utils/            # 유틸리티 함수
│   ├── App.tsx           # 메인 애플리케이션 컴포넌트
│   └── main.tsx          # 엔트리 포인트
├── docs/                 # 프로젝트 문서 (SSOT)
├── public/               # 정적 자산
└── ...
```

## 3. 데이터 흐름
- 사용자의 입력(Event) 발생 시 React State 업데이트.
- `useEffect` 훅을 사용하여 State 변경 시마다 `localStorage.setItem` 실행.
- 앱 초기 로드 시 `localStorage.getItem`을 통해 초기 상태 복구.

## 4. 외부 연동
| 서비스 | 용도 | 인증 방식 |
|--------|------|----------|
| Vercel | 호스팅 및 배포 | CI/CD 연동 |

## 5. 설계 원칙
- **컴포넌트 기반 설계**: 작은 단위의 재사용 가능한 컴포넌트로 구성.
- **관심사 분리**: UI 로직과 데이터 처리 로직을 분리 (Custom Hooks 활용).
- **디자인 시스템**: Tailwind 설정을 통해 일관된 컬러 및 간격 시스템 유지.
