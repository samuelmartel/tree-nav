FROM node:22-alpine AS frontend-builder

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN rm -rf backend 
RUN npm run build

FROM nginx:stable-alpine AS production

WORKDIR /

COPY --from=frontend-builder /usr/src/app /usr/share/nginx/html

COPY --from=frontend-builder /usr/src/app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

RUN apk add --update nodejs npm

WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend/ ./

EXPOSE 80 8080

CMD ["sh", "-c", "nginx && node /app/backend/app.js"]