FROM node:18-alpine AS builder-deps

WORKDIR /home/app

COPY ./package*.json ./
COPY ./yarn.lock ./
RUN yarn install --frozen-lockfile


FROM builder-deps AS builder

COPY . .

RUN yarn run build

FROM node:18-alpine AS runtime

WORKDIR /home/app

RUN addgroup --system --gid 1001 app
RUN adduser --system --uid 1001 app

COPY --from=builder /home/app/next.config.js ./
COPY --from=builder /home/app/public ./public
COPY --from=builder /home/app/.next/standalone ./
COPY --from=builder /home/app/.next/static ./.next/static

USER app

EXPOSE 3000

ENV NODE_ENV production
ENV PORT 3000

CMD ["node","server.js"]