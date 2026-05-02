# Harness Builder Team

> **AI가 AI 프로젝트 환경을 스스로 설정해주는 메타-에이전트 시스템**
> 
> "쇼핑몰 만들어줘" 한 마디로 → 전문가 에이전트 팀 자동 구성, MCP/Skills 추천, 보안 룰 주입, QA 검증까지 7단계 자동 완성

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Harness Engineering](https://img.shields.io/badge/Harness-Engineering-blue)](./docs/GUIDELINES.md)

---

## ✨ 주요 기능

| 기능 | 설명 |
|------|------|
| 🧠 **동적 팀 구성** | 프로젝트 요구사항을 분석하여 최적의 전문가 에이전트 팀을 자동 생성 |
| 🔍 **Web Grounding** | MCP/Skills를 사전 학습이 아닌 실시간 웹 검색으로 추천 (환각 방지) |
| 🔄 **반복 검증 루프** | MCP 설치 후 재검증 → 에이전트 팀 자동 강화 |
| 🔒 **보안 주입** | 모든 타겟 에이전트에 보안 룰 강제 적용 |
| ✅ **자동 QA** | 9개 항목 체크리스트로 산출물 무결성 검증 |
| 📊 **진행 현황 표시** | 매 Phase 완료 시 전체 파이프라인 현황 출력 |

---

## 🏗️ 시스템 구조

![Harness Builder Team Architecture](./docs/architecture.png)

```
사용자 요청
    ↓
┌─────────────────────────────────────────┐
│           Harness Builder Team           │  ← 이 레포
│  (00-harness-pm ~ 00-qa-gate, 빌더 팀)  │
└─────────────────────────────────────────┘
    ↓ 동적 생성
┌─────────────────────────────────────────┐
│           Target Agent Team              │  ← 프로젝트별 생성
│  (01-frontend, 02-backend, 03-db ...)   │
└─────────────────────────────────────────┘
    ↓ 실제 개발
```

### 2계층 아키텍처

- **Layer 0 (Builder Team `00-*`)**: 프로젝트 환경 세팅 전담. 개발에는 개입하지 않음.
- **Layer 1 (Target Team `01-*~`)**: 실제 개발 수행. Builder 팀이 프로젝트별로 동적 생성.

---

## 🚀 7단계 파이프라인

```
Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5 → Phase 6 → Phase 7
  PM        문서      팀구성   (설치)    재검증     보안       QA
수집+승인  설계       +추천    사용자    +강화      주입       검증
```

| Phase | 에이전트 | 설명 | 트리거 |
|-------|---------|------|--------|
| 1 | `00-harness-pm` | 요구사항 수집 + HITL 승인 | "하네스 세팅 진행해" |
| 2 | `00-doc-architect` | PRD/ARCHITECTURE/ROADMAP 생성 | "00-doc-architect 진행해" |
| 3 | `00-team-architect` | 1차 팀 구성 + MCP/Skills 추천 | "00-team-architect 진행해" |
| 4 | _(사용자)_ | 추천 도구 선택적 설치 | — |
| 5 | `00-team-architect` | 설치된 도구로 팀 강화 | "MCP 재검증" |
| 6 | `00-security-enforcer` | 보안 룰 주입 | "00-security-enforcer 진행해" |
| 7 | `00-qa-gate` | 최종 품질 검증 + ONBOARDING 생성 | "00-qa-gate 진행해" |

---

## 📦 설치 방법

### 1. 이 레포를 프로젝트에 복사

```bash
# 신규 프로젝트에 빌더 팀 Skills 복사
cp -r .agents/skills/00-* /your-project/.agents/skills/
```

### 2. AI IDE에서 활성화 확인

`.agents/skills/00-*` 폴더가 인식되면 준비 완료.

### 3. 시작

AI에게 다음과 같이 입력하세요:

```
하네스 세팅 진행해
```

---

## 📁 디렉토리 구조

```
harness-builder-team/
├── README.md                   ← 지금 이 파일
├── docs/
│   ├── GUIDELINES.md           ← 상세 사용 가이드
│   ├── EXAMPLES.md             ← 실제 사용 예시 (투투앱 데모 등)
│   └── CONTRIBUTING.md         ← 기여 방법
│
└── .agents/skills/
    ├── 00-harness-pm/          ← Phase 1: 진입점 PM
    │   ├── SKILL.md
    │   └── assets/
    │       └── INTAKE_TEMPLATE.md
    │
    ├── 00-doc-architect/       ← Phase 2: 문서 설계자
    │   ├── SKILL.md
    │   └── assets/
    │       ├── PRD_TEMPLATE.md
    │       ├── ARCHITECTURE_TEMPLATE.md
    │       ├── PLAN_TEMPLATE.md (ROADMAP 전략)
    │       ├── PLANNING_TEMPLATE.md (단기 실행 계획)
    │       └── CHANGELOG_TEMPLATE.md
    │
    ├── 00-team-architect/      ← Phase 3+5: 핵심 에이전트
    │   ├── SKILL.md
    │   └── references/
    │       └── SKILL_TEMPLATE.md
    │
    ├── 00-security-enforcer/   ← Phase 6: 보안 강화
    │   └── SKILL.md
    │
    └── 00-qa-gate/             ← Phase 7: 최종 검증
        ├── SKILL.md
        └── references/
            └── CHECKLIST.md
```

---

## 📚 문서 목록

| 문서 | 설명 |
|------|------|
| [QUICKSTART.md](./docs/QUICKSTART.md) | ⚡ 5분 빠른 시작 (트리거 키워드, 핵심 패턴) |
| [WHY.md](./docs/WHY.md) | 💡 이 프로젝트를 만든 이유 + 설계 결정 |
| [GUIDELINES.md](./docs/GUIDELINES.md) | 📖 Phase별 상세 가이드 + 에러 복구 |
| [EXAMPLES.md](./docs/EXAMPLES.md) | 🎯 투투앱, 쇼핑몰 등 실제 사용 예시 |
| [CONTRIBUTING.md](./docs/CONTRIBUTING.md) | 🔧 에이전트 커스텀 방법, 기여 가이드 |

---

## ⚡ 트리거 키워드 요약

```
하네스 세팅 진행해        → 00-harness-pm  (Phase 1)
00-doc-architect 진행해   → 00-doc-architect (Phase 2)
00-team-architect 진행해  → 00-team-architect (Phase 3)
MCP 재검증               → 00-team-architect (Phase 5)
00-security-enforcer 진행해 → 00-security-enforcer (Phase 6)
00-qa-gate 진행해         → 00-qa-gate (Phase 7)
재검증 / QA 재검증        → 00-qa-gate (재검증)
```

---

## 🏛️ 하네스 엔지니어링 원칙

이 시스템은 3가지 핵심 원칙을 따릅니다:

1. **HITL (Human-in-the-Loop)**: 모든 Phase 완료 후 사용자 승인 필수
2. **네거티브 제약**: 각 에이전트는 자신의 역할 외 영역을 명시적으로 금지
3. **Web Grounding**: 사전 학습 지식이 아닌 실시간 웹 검색으로 최신 정보 참조

---

## 📄 License

MIT License — 자유롭게 사용, 수정, 배포 가능합니다.
