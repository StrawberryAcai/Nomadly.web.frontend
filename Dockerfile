# Node.js 20 기준
FROM node:20-alpine

# 작업 디렉토리 생성
WORKDIR /app

# 패키지 파일만 복사 후 의존성 설치 (캐시 활용)
COPY package.json package-lock.json* ./
RUN npm install

# 나머지 앱 코드 복사
COPY . .

# Next.js 빌드
RUN npm run build

# 3000 포트 노출
EXPOSE 3000

# 컨테이너 시작 명령
CMD ["npm", "start"]
