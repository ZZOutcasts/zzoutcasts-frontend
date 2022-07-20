FROM node:18-alpine

EXPOSE 3000

RUN mkdir /home/app
COPY . /home/app
WORKDIR /home/app

RUN npm install --omit=optional

ENV NODE_ENV=production
ENV PORT 3000

RUN npx next telemetry disable

RUN npm run build
CMD ["npm","run","start"]