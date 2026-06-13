FROM node:22-alpine

RUN corepack enable

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .
COPY pnpm-workspace.yaml .

COPY backend/package.json backend/package.json

RUN pnpm install --filter backend... --frozen-lockfile

COPY backend ./backend

WORKDIR /app/backend

EXPOSE 3000

CMD ["pnpm", "dev"]