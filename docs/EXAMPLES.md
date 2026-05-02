# 사용 예시 (EXAMPLES)

> 실제 프로젝트에서 Harness Builder Team을 사용한 예시 모음입니다.

---

## 예시 1: 커플 챌린지 앱 (투투, TwoToo)

### 시나리오
커플이 함께 22일간 챌린지를 수행하는 감성 앱 개발

### 사용 흐름

**Step 1**: `INTAKE_FORM.md` 작성
```markdown
- 핵심 목표: 커플이 함께 22일 챌린지를 수행하며 꽃을 키우는 앱
- 기술 스택: React + Tailwind (Vite), 백엔드 없음 (LocalStorage)
- 제약 조건: 모바일 반응형 필수
```

**Step 2**: PM 브리핑 결과
```
프로젝트: 투투(TwoToo) — 커플 챌린지 앱
기술 스택: Vite + React 19 + Tailwind CSS v4 + Zustand
추천 에이전트: 01-frontend-specialist, 02-logic-architect
```

**Step 3**: 1차 팀 구성 후 추천 MCP
```
| 도구 | 유형 | 효과 |
|------|------|------|
| context7 | MCP | React 19 / Tailwind v4 최신 문서 참조 |
| sequential-thinking | MCP | 22일 챌린지 복잡 로직 설계 |
```

**Step 4**: "MCP 재검증" 후 강화된 팀
- `01-frontend-specialist`: "context7로 Tailwind v4 최신 문서 참조" 추가
- `02-logic-architect`: "sequential-thinking으로 챌린지 계산 로직 설계" 추가

### 결과물
- 타겟 에이전트 2개
- 프로젝트 문서 5개 (PRD, ARCHITECTURE, ROADMAP, PLANNING, CHANGELOG)
- `ONBOARDING.md` 생성

---

## 예시 2: 쇼핑몰 (스택 모를 때)

### 시나리오
기술 스택을 모르는 사용자의 쇼핑몰 프로젝트

### INTAKE_FORM 작성
```markdown
- 핵심 목표: 의류 쇼핑몰, 관리자 페이지 포함
- 기술 스택: 추천해줘
- 외부 연동: 결제 필요
```

### PM 추천 결과
```
🛒 쇼핑몰 전용 추천 스택:
- Framework: Next.js 15 (App Router)
  이유: SEO 최적화 + SSR로 상품 페이지 노출 유리
- DB: Supabase
  이유: 무료 PostgreSQL + RLS 내장 + 실시간 재고 업데이트
- 결제: Toss Payments / 포트원
  이유: 국내 최다 사용, 공식 Next.js 예제 제공

추천 에이전트 팀:
- 01-frontend-dev (상품 목록, 장바구니 UI)
- 02-backend-dev (API 라우트, 비즈니스 로직)
- 03-db-architect (Supabase 스키마, RLS 정책)
- 04-payment-specialist (결제 연동)
```

---

## 예시 3: 기획 변경 대응

### 시나리오
개발 중 "결제 기능 추가" 요청

**입력**: `docs/PRD.md`에 결제 기능 추가 후 `"기획 변경 반영"` 입력

**00-team-architect Mode C 출력**:
```
PRD 변경 사항 감지:
- [신규] 결제 시스템 연동 기능 추가

영향받는 에이전트:
- 02-backend-dev: 결제 API 라우트 추가 필요
- [신규] 04-payment-specialist 에이전트 생성 제안

진행할까요? (예/아니오)
```

---

## 예시 4: 중간 재검증

### 시나리오
Phase 7 완료 후 에이전트 품질 재점검

**입력**: `"재검증"` 또는 `"QA 재검증"`

→ 00-qa-gate가 9개 항목 전수 재검사 수행
→ 이전 결과와 무관하게 새로 검증
