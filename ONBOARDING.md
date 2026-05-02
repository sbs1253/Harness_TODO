# 🚀 투투앱 (TwoToo App) 개발 온보딩 가이드

하네스(Harness) 빌더 팀에 의해 프로젝트 개발 환경 구축이 완료되었습니다. 이 가이드는 실무 에이전트들이 개발을 즉시 시작할 수 있도록 안내합니다.

---

## 1. 프로젝트 개요
- **목적**: 심플하고 프리미엄한 디자인의 일일 할 일 관리 앱
- **기술 스택**: React (Vite), Tailwind CSS, TypeScript
- **핵심 목표**: 다크 모드, 부드러운 애니메이션, 로컬 스토리지 기반 데이터 유지

## 2. 전문가 에이전트 팀
프로젝트 개발을 담당할 두 명의 전문가가 대기 중입니다.

| 에이전트 | 역할 | 주요 책임 |
|---------|------|----------|
| **01-frontend-expert** | UI/UX 전문가 | Tailwind 디자인, 다크 모드, Framer Motion 애니메이션 |
| **02-logic-specialist** | 로직 전문가 | CRUD 로직, TypeScript 타입 정의, LocalStorage 연동 |

## 3. 개발 가이드라인 (SSOT)
모든 개발 작업은 아래 문서들을 기준으로 수행됩니다:
- [PRD.md](docs/PRD.md): 제품 요구사항 명세서
- [ARCHITECTURE.md](docs/ARCHITECTURE.md): 기술 구조 및 폴더 구성
- [ROADMAP.md](docs/ROADMAP.md): 전체 개발 단계 및 현황
- [RULES.md](docs/RULES.md): 보안 및 품질 표준

## 4. 시작하기 (Getting Started)

실무 개발을 시작하려면 특정 전문가에게 직접 요청하세요:
- **"01-frontend-expert, 투투앱 테마 컬러를 더 화사하게 바꿔줘"** (UI 개발/수정)
- **"02-logic-specialist, 할 일 필터링 로직에 '중요도' 항목 추가해줘"** (데이터/로직 구현)

모든 작업은 `docs/PLANNING.md`에 계획을 세운 뒤 사용자의 승인을 얻고 시작하는 것이 원칙입니다.

---

## 🛡️ 보안 및 품질 주의사항
- 모든 에이전트는 작업 전 `docs/PLANNING.md`에 실행 계획을 작성하고 승인을 받아야 합니다.
- `any` 타입 사용이 금지되어 있으며, 빌드 및 린트 검증을 통과해야 합니다.
- 민감 정보는 반드시 `.env.local`을 통해 관리합니다.

---
**투투앱 프로젝트의 성공적인 런칭을 기원합니다!**
