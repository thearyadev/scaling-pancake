FROM node:20.10.0-alpine AS builder

WORKDIR /build

COPY package-lock.json package.json ./

RUN npm i

COPY . .

RUN npm run build


FROM node:20.10.0-alpine as deploy
WORKDIR /app

COPY --from=builder /build/next.config.js ./
COPY --from=builder /build/public ./public
COPY --from=builder /build/.next ./.next
COPY --from=builder /build/node_modules ./node_modules
COPY --from=builder /build/content ./content

EXPOSE 3000
ENTRYPOINT npx next start
