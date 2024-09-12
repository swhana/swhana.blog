# swhana.blog
Next.js 14 / Typescript / Tailwindcss로 개발된 블로그입니다.

## Features

-   게시글 목록 페이지
-   게시글 상세 페이지
-   댓글 기능
-   다크모드 / 라이트모드
-   목차 사이드 바(ToC)
- 	프로젝트 소개 페이지
    - 카드형으로 프로젝트 개요 소개, 누르면 상세페이지
- 	글 목록 리스트 그리드형 / 리스트형 분리(deprecated)
- 	반응형 레이아웃
    - sm, md
- 	자기소개 페이지


## Tech Stacks

1. Framework - Next.js + Typescript
   
2. Design - Tailwind CSS + Shadcn/ui
   
3. 글 작성 - MDX
    Markdown + JSX 문법이 가능한 문서

4. 글 파싱 - Gray-matter + Next-MDX-Remote

5. 배포 - Vercel

## Convention

```jsx
Feat: 새로운 기능 추가
Refactor: 코드 리팩토링
Fix: 버그 수정
Design: CSS 등 디자인 추가 / 수정
Env: 개발 환경설정
Style: 코드 스타일 수정
Comment: 주석 추가 / 수정
Docs: 내부 문서 추가 / 수정
Test: 테스트 추가 / 수정
Chore: 빌드 관련 코드 수정
Rename: 파일 및 폴더명 수정
Remove: 파일 삭제
Post: 블로그에 포스팅
```

## File Structure

![디렉토리 구조](/blog/posts/nextjs/test/imgs/1.png)