# 🚀 프로젝트 사례 (EXAMPLES)

> Harness Builder Team을 통해 실제로 구축된 프로젝트 사례입니다.

---

## 📱 사례: 투투앱 (TwoToo App)

**"심플하고 프리미엄한 감성 할 일 관리 서비스"**

이 프로젝트는 Harness Builder Team의 전체 워크플로우를 거쳐 개발된 첫 번째 공식 데모 프로젝트입니다.

### 1. 요구사항 정의 (`INTAKE_FORM.md`)

- **핵심 목표**: 개인이 사용하기 좋은 프리미엄 디자인의 할 일 관리 앱.
- **디자인 철학**: Indigo/Purple 그라데이션, Glassmorphism, 부드러운 애니메이션.
- **기술 제약**: 백엔드 없이 LocalStorage를 활용한 데이터 영속성 유지.

### 2. 빌더 팀 브리핑 및 설계

- **PM 분석**: React 19와 Tailwind CSS v4를 활용한 최신 스택 추천.
- **문서 설계**: `docs/` 내에 PRD, ARCHITECTURE, ROADMAP 등 SSOT(Single Source of Truth) 체계 구축.
- **전문가 배치**:
  - `01-frontend-expert`: Framer Motion 및 Tailwind 기반 UI 구현 담당.
  - `02-logic-specialist`: CRUD 로직 및 TypeScript 타입 안정성 담당.

### 3. 실무 개발 과정

- **UI 구현**:
  - `framer-motion`의 `AnimatePresence`를 활용한 리스트 추가/삭제 애니메이션.
  - 다크 모드(System preference + Manual toggle) 완벽 대응.
- **로직 구현**:
  - `useMemo`를 활용한 상태별 필터링 (전체, 진행 중, 완료).
  - `useEffect`와 `localStorage`를 연동한 자동 저장 시스템.

### 4. 결과물 하이라이트

- **프리미엄 UI**: 투명도와 블러 효과를 활용한 Glassmorphism 카드 디자인.
- **인터랙션**: 버튼 클릭 시 미세한 스케일 애니메이션 및 부드러운 다크 모드 전환.
- **코드 품질**: TypeScript Strict 모드 적용 및 에이전트 간의 역할 분담을 통한 유지보수성 확보.

### 5. 실행 방법 (Demo)

```bash
# 데모 폴더 이동
cd demo

# 의존성 설치 및 실행
npm install
npm run dev
```

---

## 🛠️ 워크플로우 재현

이 사례와 같은 프로젝트를 다시 시작하려면 아래와 같이 요청하세요:

1. `INTAKE_FORM.md`에 새로운 아이디어 작성
2. `"00-harness-pm 진행해"` 입력
3. 설계 완료 후 `"00-team-architect 진행해"` 입력

---
> **Note**: 이 프로젝트의 모든 소스 코드는 `demo/` 디렉토리에서 확인할 수 있습니다.
