# Stage 1
FROM node:18 as build-stage

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

ARG REACT_API_BASE_URL
ENV REACT_API_BASE_URL=$VITE_API_BASE_URL

RUN npm run build

# Stage 2
FROM nginx

COPY --from=build-stage /app/dist /usr/share/nginx/html
#EXPOSE nginx port running the app
EXPOSE 80

CMD nginx -g 'daemon off;'