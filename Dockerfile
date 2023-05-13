FROM node:18-slim AS build

WORKDIR .

COPY package*.json ./

RUN npm install 

COPY . ./

RUN npm run build 


FROM node:18-slim AS Production

WORKDIR .

COPY --from=build ./.env ./
COPY --from=build ./next.config.js ./
COPY --from=build ./public ./public
COPY --from=build ./.next ./.next
COPY --from=build ./node_modules ./node_modules