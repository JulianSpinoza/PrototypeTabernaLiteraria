FROM node:22-alpine

RUN corepack enable

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .
COPY pnpm-workspace.yaml .

COPY frontend/package.json frontend/package.json

RUN pnpm install --filter frontend... --frozen-lockfile

COPY frontend ./frontend

WORKDIR /app/frontend

EXPOSE 8081

CMD ["pnpm", "web"]