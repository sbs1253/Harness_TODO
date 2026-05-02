# 기여 가이드 (CONTRIBUTING)

> Harness Builder Team 개선에 기여하는 방법을 안내합니다.

---

## 빌더 에이전트 수정

### 수정 가능 영역

| 파일 | 수정 가능 항목 | 주의 사항 |
|------|-------------|----------|
| `00-*/SKILL.md` | Instructions 로직 | frontmatter의 `name`/`description` 필수 유지 |
| `00-*/assets/` | 템플릿 내용 | 섹션 구조 유지 |
| `00-team-architect/references/SKILL_TEMPLATE.md` | 타겟 에이전트 기본 구조 | Harness Rules 블록 삭제 금지 |
| `00-qa-gate/references/CHECKLIST.md` | 검증 기준 추가/수정 | 기존 9개 항목 삭제 금지 |

### 수정 금지 사항

- 각 에이전트의 `name` 필드 변경 (시스템 인식에 사용)
- `00-*` 폴더 이름 변경 (보호구역 규칙 기반)
- Harness Rules 상속 블록 제거

---

## 새 빌더 에이전트 추가

새로운 역할이 필요한 경우 `00-` 접두사로 추가합니다.

```yaml
---
name: 00-새에이전트이름
description: >
  역할 설명 (200자 이내)
  트리거 키워드 명시
  네거티브 트리거 명시
  ONBOARDING.md가 이미 존재하면 활성화하지 마시오.
---
```

> [!IMPORTANT]
> 새 에이전트를 추가하면 `00-qa-gate/references/CHECKLIST.md`에
> 해당 에이전트의 검증 항목을 반드시 추가하세요.

---

## 타겟 에이전트 템플릿 커스터마이징

`00-team-architect/references/SKILL_TEMPLATE.md`를 수정하면
이후 생성되는 모든 타겟 에이전트에 자동 반영됩니다.

**Harness Rules 블록은 삭제하지 마세요.** 이 블록이 하네스 엔지니어링 원칙을 강제합니다.

---

## 버전 관리 규칙

각 `SKILL.md`의 `Version` 필드를 업데이트하세요:
- 마이너 수정: `1.0 → 1.1`
- 구조 변경: `1.x → 2.0`
