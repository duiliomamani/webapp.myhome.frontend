# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:16.16.0-alpine3.16 as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install

COPY ./ /app/
RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.19.0-alpine as prod-stage

COPY --from=build-stage /app/build/ /usr/share/nginx/html

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]