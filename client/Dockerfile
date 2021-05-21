FROM node:10-alpine as build-step
 
WORKDIR /usr/app
 
COPY ./package.json ./
RUN npm install
COPY ./ ./
RUN npm run build
 
RUN rm -f /usr/app/build/static/js/*.map
RUN rm -f /usr/app/build/static/js/*.map
RUN rm -f /usr/app/build/static/js/*.map
 
RUN rm -f ../../bin/bash
RUN rm -f ../../bin/cat
 
FROM nginx:1.17.1-alpine
COPY --from=build-step /usr/app/build /usr/share/nginx/html