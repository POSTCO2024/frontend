src/
├── api/          # API 호출 관련 함수들을 작성합니다.
├── assets/       # 이미지, 폰트 등 정적 자원을 저장합니다.
├── components/   # 재사용 가능한 React 컴포넌트를 작성합니다.
├── hooks/        # 커스텀 훅을 작성합니다.
├── pages/        # 페이지 컴포넌트를 작성합니다.
├── store/       # Zustand 상태 관리 관련 파일을 작성합니다.
├── router/       # 라우팅 관련 파일을 작성합니다.
├── styles/       # 스타일링 관련 파일을 작성합니다.

브랜치 규칙
github flow [main - feature 로 구성]

1. feature 브랜치 생성하기
git checkout main
git pull origin main
git checkout -b feature/[브랜치_규칙에_따른_이름]

2. 각 feature 에서 pull request 날리기 전 해야할 것
git checkout main
git pull origin main
git checkout feature/[생성한_브랜치_이름]
git rebase main

3. 충돌 해결하기 후 진행
< 충돌 해결 후 >
git add .
git rebase --continue

4. feature 에 커밋 후 pull request 생성
git push origin feature/your-feature-name --force