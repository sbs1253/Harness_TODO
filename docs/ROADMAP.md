# 전체 로드맵 (ROADMAP)

> 이 문서는 프로젝트의 전체 Phase 단위 전략 계획입니다.
> `docs/PRD.md`를 달성하기 위한 순차적 단계를 관리합니다.

## 아카이빙 룰
> 완료된 Phase는 세부 체크리스트를 지우고 **1줄 핵심 요약**으로 대체합니다.
> 이를 통해 문서의 토큰을 가볍게 유지합니다.

---

## Phase 1: 프로젝트 초기화 (담당: 00-team-architect)
- [ ] Vite를 이용한 React + TypeScript 프로젝트 생성
- [ ] Tailwind CSS 설치 및 설정
- [ ] 기본 디렉토리 구조 생성

## Phase 2: 핵심 데이터 로직 구현 (담당: 02-logic-specialist)
- [ ] Todo 타입 정의 (id, text, completed, createdAt)
- [ ] CRUD 함수 구현 (Add, Delete, Toggle)
- [ ] LocalStorage 연동 커스텀 훅 (`useTodos`) 구현

## Phase 3: 프리미엄 UI/UX 구현 (담당: 01-frontend-expert)
- [ ] 메인 레이아웃 및 다크 모드 테마 적용
- [ ] Todo 입력 필드 및 리스트 아이템 컴포넌트 개발
- [ ] Framer Motion 등을 활용한 리스트 애니메이션 적용

## Phase 4: 폴리싱 및 테스트 (담당: 01, 02 협업)
- [ ] 빈 목록 처리 및 입력 예외 처리
- [ ] 반응형 레이아웃 최종 점검 (Mobile First)
- [ ] 브라우저 개발자 도구를 통한 성능 및 접근성 확인

## Phase 5: 최종 QA 및 배포 (담당: 00-qa-gate)
- [ ] 요구사항(PRD) 대조 검증
- [ ] Vercel 배포 및 최종 URL 확인
