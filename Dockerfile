from node:22-alpine as frontend-builder

workdir /usr/src/app
copy package.json package-lock.json ./
run npm ci
copy . .
run rm -rf backend 
run npm run build

from nginx:stable-alpine as production

workdir /

copy --from=frontend-builder /usr/src/app /usr/share/nginx/html

copy --from=frontend-builder /usr/src/app/build /usr/share/nginx/html
copy default.conf /etc/nginx/conf.d/default.conf

run apk add --update nodejs npm

workdir /app/backend
copy backend/package*.json ./
run npm install
copy backend/ ./

expose 80 8080

cmd ["sh". "-c", "nginx && node /app/backend/index.js"]